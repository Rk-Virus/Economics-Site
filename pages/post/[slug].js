import groq from 'groq'
import Image from 'next/image'
import Link from 'next/link'
import client from '../../client'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const Post = ({ post = {} }) => {
  const { mainImage = null, title = 'Missing title', authName = 'Unknown', categories =[], authorImage=null, authorBio="", body = [] } = post
  return (
    <>
    <title>Ekonopro/Post</title>

      <Header />
      <main id="main">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <div className="breadcrumbs">
          <div className="page-header d-flex align-items-center" >
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2>Ekonopro Blogs</h2>
                  <p>To enhance your knowledge of current affairs and economics.</p>
                </div>
              </div>
            </div>
          </div>
          <nav>
            <div className="container">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li>Blog Details</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* <!-- End Breadcrumbs --> */}


        {/* <!-- ======= Blog Details Section ======= --> */}
        <section id="blog" className="blog bg-light">
          <div className="container aos-init aos-animate" data-aos="fade-up">

            <div className="row g-5">

              <div className="col-lg-12">

                <article className="blog-details">

                  <div className="post-img">
                  <picture>
                    {mainImage && (
                      <img
            src={urlFor(mainImage)
                        .url()} style={{height:300, width:'100%', objectFit:'cover', objectPosition:'80% 50%'}} alt="post image" className="img-fluid" />
                    )}
                  </picture>
                  </div>

                  {/* post title  */}
                  <h2 className="title">{title}</h2>

                  <div className="meta-top">
                    <ul >
                      <li className="d-flex align-items-center"><i className="bi bi-person"></i> {authName}</li>
                      {/* <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <time dateTime="2020-01-01">{post?.publishedAt}</time></li> */}
                      <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> 12 Comments</li>
                    </ul>
                  </div>
                  {/* <!-- End meta top --> */}

                  <div className="content text-black">
                    <PortableText
                      value={body}
                      components={ptComponents}
                    />
                  </div>
                  {/* <!-- End post content --> */}

                  <div className="meta-bottom">
                    <i className="bi bi-folder"></i>
                    <ul className="cats text-black">
                      Posted in &nbsp;
                      {categories && categories.map(category => <li key={category}><strong><Link href='#'>{category}</Link></strong>,&nbsp;</li>)}

                    </ul>
                  </div>
                  {/* <!-- End meta bottom --> */}

                </article>
                {/* <!-- End blog post --> */}

                <div className="post-author d-flex align-items-center">
                  <picture>
                  {authorImage && (
                    <img
                     src={urlFor(authorImage)
                      .width(100)
                      .url()} className="rounded-circle flex-shrink-0" alt="author image" />
                  )}
                  </picture>
                  <div>
                    <h4>{authName}</h4>
                    <div className="social-links">
                      <Link href="https://twitters.com/#"><i className="bi bi-twitter"></i></Link>
                      <Link href="https://facebook.com/#"><i className="bi bi-facebook"></i></Link>
                      <Link href="https://instagram.com/#"><i className="biu bi-instagram"></i></Link>
                    </div>
                    <PortableText
                      value={authorBio}
                      components={ptComponents}
                    />
                  </div>
                </div>
                {/* <!-- End post author --> */}

              </div>

              {/* <div className="col-lg-4">

                <div className="sidebar"> */}

                  {/* <div className="sidebar-item search-form">
                    <h3 className="sidebar-title">Search</h3>
                    <form action="" className="mt-3">
                      <input type="text" className='bg-white' />
                      <button type="submit"><i className="bi bi-search"></i></button>
                    </form>
                  </div> */}
                  {/* <!-- End sidebar search formn--> */}

                  {/* <div className="sidebar-item categories">
                    <h3 className="sidebar-title">Categories</h3>
                    <ul className="mt-3">
                      <li><Link href="#">General Knowledge <span>(25)</span></Link></li>
                    </ul>
                  </div> */}
                  {/* <!-- End sidebar categories--> */}

                  {/* <div className="sidebar-item recent-posts">
                    <h3 className="sidebar-title">Recent Posts</h3>

                    <div className="mt-3">

                      <div className="post-item mt-3">
                        <img
               src="/assets/img/blog/blog-recent-1.jpg" alt="" />
                        <div>
                          <h4><Link href="blog-details.html">Nihil blanditiis at in nihil autem</Link></h4>
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </div>
                      </div> */}
                      {/* <!-- End recent post item--> */}

                    </div>

                  </div>
                  {/* <!-- End sidebar recent posts--> */}

                  {/* <div className="sidebar-item tags">
                    <h3 className="sidebar-title">Tags</h3>
                    <ul className="mt-3">
                      <li><Link href="#">Economics</Link></li>
                      <li><Link href="#">CUET</Link></li>
                      <li><Link href="#">Business</Link></li>
                    </ul>
                  </div> */}
                  {/* <!-- End sidebar tags--> */}

                {/* </div> */}
                {/* <!-- End Blog Sidebar --> */}

              {/* </div> */}
            {/* </div> */}

          {/* </div> */}
        </section>
        {/* <!-- End Blog Details Section --> */}


      </main>
      {/* <!-- End #main --> */}

      <Footer />

    </>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage,
  body,
  "authName": author->name,
  "authorImage": author->image,
  "categories": categories[]->title,
  "authorBio": author -> bio
}`

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}

export default Post