import groq from 'groq'
import Link from 'next/link'
import Image from 'next/image'
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
        <Image 
        width={800}
        height={500}
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const Post = ({ post }) => {
  const { mainImage, title = 'Missing title', authName = 'Unknown', categories, authorImage, authorBio, body = [] } = post
  return (
    // <article>
    //   <h1>{post?.slug?.current}</h1>
    // </article>
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
                  <h2>Blog Details</h2>
                  <p>These blogs are to increase your economic knowledge of current affair and basics of economics.</p>
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

              <div className="col-lg-8">

                <article className="blog-details">

                  <div className="post-img">
                  <picture>
                    {mainImage && (
                      <img src={urlFor(mainImage)
                        .url()} alt="" className="img-fluid" />
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
                      {categories.map(category => <li key={category}><strong><Link href='#'>{category}</Link></strong>,&nbsp;</li>)}

                    </ul>
                  </div>
                  {/* <!-- End meta bottom --> */}

                </article>
                {/* <!-- End blog post --> */}

                <div className="post-author d-flex align-items-center">
                  <picture>
                  {authorImage && (
                    <img src={urlFor(authorImage)
                      .width(100)
                      .url()} className="rounded-circle flex-shrink-0" alt="" />
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

                <div className="comments">

                  <h4 className="comments-count">8 Comments</h4>

                  <div id="comment-1" className="comment">
                    <div className="d-flex">
                      <div className="comment-img"><Image  width={100} height={100} src="/Linkssets/img/blog/comments-1.jpg" alt="" /></div>
                      <div className='text-dark'>
                        <h5><Link href="">Georgia Reader</Link> <Link href="#" className="reply"><i className="bi bi-reply-fill"></i> Reply</Link></h5>
                        <time dateTime="2020-01-01">01 Jan,2022</time>
                        <p>
                          Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta.
                          Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End comment #1 --> */}


                  <div className="reply-form text-dark">

                    <h4 >Leave a Reply</h4>
                    <p>Your email address will not be published. Required fields are marked * </p>
                    <form action="">
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <input name="name" type="text" className="form-control" placeholder="Your Name*" />
                        </div>
                        <div className="col-md-6 form-group">
                          <input name="email" type="text" className="form-control" placeholder="Your Email*" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col form-group">
                          <input name="website" type="text" className="form-control" placeholder="Your Website" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col form-group">
                          <textarea name="comment" className="form-control" placeholder="Your Comment*"></textarea>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary">Post Comment</button>

                    </form>

                  </div>

                </div>
                {/* <!-- End blog comments --> */}

              </div>

              <div className="col-lg-4">

                <div className="sidebar">

                  <div className="sidebar-item search-form">
                    <h3 className="sidebar-title">Search</h3>
                    <form action="" className="mt-3">
                      <input type="text" className='bg-white' />
                      <button type="submit"><i className="bi bi-search"></i></button>
                    </form>
                  </div>
                  {/* <!-- End sidebar search formn--> */}

                  <div className="sidebar-item categories">
                    <h3 className="sidebar-title">Categories</h3>
                    <ul className="mt-3">
                      <li><Link href="#">General Knowledge <span>(25)</span></Link></li>
                    </ul>
                  </div>
                  {/* <!-- End sidebar categories--> */}

                  <div className="sidebar-item recent-posts">
                    <h3 className="sidebar-title">Recent Posts</h3>

                    <div className="mt-3">

                      <div className="post-item mt-3">
                        <Image  width={800} height={500} src="/Linkssets/img/blog/blog-recent-1.jpg" alt="" />
                        <div>
                          <h4><Link href="blog-details.html">Nihil blanditiis at in nihil autem</Link></h4>
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </div>
                      </div>
                      {/* <!-- End recent post item--> */}

                      <div className="post-item">
                        <Image  width={800} height={500} src="/Linkssets/img/blog/blog-recent-5.jpg" alt="" />
                        <div>
                          <h4><Link href="blog-details.html">Et dolores corrupti quae illo quod dolor</Link></h4>
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </div>
                      </div>
                      {/* <!-- End recent post item--> */}

                    </div>

                  </div>
                  {/* <!-- End sidebar recent posts--> */}

                  <div className="sidebar-item tags">
                    <h3 className="sidebar-title">Tags</h3>
                    <ul className="mt-3">
                      <li><Link href="#">Economics</Link></li>
                      <li><Link href="#">CUET</Link></li>
                      <li><Link href="#">Business</Link></li>
                    </ul>
                  </div>
                  {/* <!-- End sidebar tags--> */}

                </div>
                {/* <!-- End Blog Sidebar --> */}

              </div>
            </div>

          </div>
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