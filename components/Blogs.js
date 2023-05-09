import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import Pagination from './Pagination'

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
          fill
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

function Blogs({ posts }) {
  // console.log(posts)

  return (
    <>
      {/* <!-- ======= Recent Blog Posts Section ======= --> */}
      <section id="recent-posts" className="recent-posts sections-bg">

        <div className="section-header text-black">
          <h2>Recent Blogs</h2>
          <p>Get to know recent economic events, current affairs, general knowlegde, exam updates and much more...</p>
        </div>

        <div className="row gy-4 mx-2">

          {posts.length > 0 && posts.map((post) => {
            return <div className="col-xl-4 col-md-6" key={post._id}>
              <article>
                <div className="post-img">
                  {post.mainImage && <img
                   src={urlFor(post.mainImage)}
                    alt="blog image" className="img-fluid" />}
                </div>

                <p className="post-category">{post.categoryName && <>{post.categoryName}</>}</p>

                <h2 className="title">
                  <Link href={"/post/" + post.slug.current}>{post.title}</Link>
                </h2>
                {post.body[0].children[0].text.substring(0, 100) + "..."}

                <div className="d-flex align-items-center mt-4">
                  <img
                     src="/assets/img/blog/blog-author.png" alt="author image" className="img-fluid post-author-img flex-shrink-0" />

                  <div className="post-meta">

                    <p className="post-author text-black">
                      {post.authorName && <>{post.authorName}</>}
                    </p>

                    <p className="post-date">
                      <time dateTime="2022-01-01">
                        {/* {post.publishedAt} */}
                        {new Date(post.publishedAt).toDateString()}
                      </time>
                    </p>
                  </div>
                </div>

              </article>
            </div>
            {/* <!-- End post list item --> */ }
          })}

          <Pagination/>

        </div>
      </section>
      {/* <!-- End Recent Blog Posts Section --> */}
    </>
  )
}

export default Blogs