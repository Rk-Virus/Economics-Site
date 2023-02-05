import groq from 'groq'
import Link from 'next/link'
import client from '../../client'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'

const Quiz = ({quiz = {}}) => {
  return (
    <>
    <title>Ekonopro/Quiz</title>

       <Header />
            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div className="breadcrumbs">
                    <div className="page-header d-flex align-items-center" >
                        <div className="container position-relative">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <h2>Quiz page</h2>
                                    <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav>
                        <div className="container">
                            <ol>
                                <li><Link href="/">Home</Link></li>
                                <li>Quiz Page</li>
                            </ol>
                        </div>
                    </nav>
                </div>
                {/* <!-- End Breadcrumbs --> */}

                {/* Quiz section  */}
                <div className='bg-white text-black quiz-section'>
                    <div className='container-fluid p-5'>

                        <h2>{quiz.quizName?quiz.quizName:"No Title"}</h2>
                        <h4 className='lead'>Attempt the following quitions :</h4>
                        <hr />

                        <form action='https://formspree.io/f/xrgvekgj' method='POST'>
                            <ol className='quiz-block'>
                                {/* quiz questions starts here  */}
                                <li>
                                    <div className='question mt-4'>
                                        <p>Which one is correct ?</p>
                                    </div>
                                    <div className='options'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="q1" id="flexRadioDefault1" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Option A
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="q1" id="fq2op1" />
                                            <label className="form-check-label" htmlFor="fq2op1">
                                                Option B
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="q1" id="fq3op1" />
                                            <label className="form-check-label" htmlFor="fq3op1">
                                                Option C
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="q1" id="fq4op1" />
                                            <label className="form-check-label" htmlFor="fq4op1">
                                                Option D
                                            </label>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className='question mt-4'>
                                        <p>Which one is correct ?</p>
                                    </div>
                                    <div className='options'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="q2" id="q2op1" />
                                            <label className="form-check-label" htmlFor="q2op1">
                                                Option A
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="q2" id="q2op2" />
                                            <label className="form-check-label" htmlFor="q2op2">
                                                Option B
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="q2" id="q2op3" />
                                            <label className="form-check-label" htmlFor="q2op3">
                                                Option C
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="q2" id="q2op4" />
                                            <label className="form-check-label" htmlFor="q2op4">
                                                Option D
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                            <button type="submit" className="btn btn-sm btn-outline-primary mx-4 my-2 px-4">Submit</button>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
    </>
  )
}


const query = groq`*[_type == "quiz" && slug.current == $slug][0]{
  quizName,
  // mainImage,
  // body,
  // "authName": author->name,
  // "authorImage": author->image,
  // "categories": categories[]->title,
  // "authorBio": author -> bio
}`

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "quiz" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const quiz = await client.fetch(query, { slug })
  return {
    props: {
      quiz
    }
  }
}

export default Quiz