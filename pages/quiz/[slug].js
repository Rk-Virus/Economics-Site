import client from '../../client'

const Quiz = ({quiz}) => {
  
  return (
    <article>
      <h1>{quiz?.slug?.current}</h1>
    </article>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "quiz" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const quiz = await client.fetch(`
    *[_type == "quiz" && slug.current == $slug][0]
  `, { slug })
  return {
    props: {
      quiz
    }
  }
}

export default Quiz