import React from 'react'
import Link from 'next/link'

function Blogs({posts}) {
  return (
    <>
    {/* <!-- ======= Recent Blog Posts Section ======= --> */}
<section id="recent-posts" className="recent-posts sections-bg">

    <div className="section-header text-black">
      <h2>Recent Blogs</h2>
      <p>Get to know recent economic events, current affairs, general knowlegde, exam updates and much more...</p>
    </div>

    <div className="row gy-4 mx-2">

{posts.length > 0 && posts.map((post) =>{
  return <div className="col-xl-4 col-md-6" key={post._id}>
        <article>
          <div className="post-img">
            <img src="/assets/img/blog/blog-2.jpg" alt="" className="img-fluid"/>
          </div>

          <p className="post-category">{"categoryName"}</p>

          <h2 className="title">
            <Link href={"/post/"+post.slug.current}>{post.title}</Link>
          </h2>
          <div className='text-black pb-4 d-inline-block text-truncate' style={{maxWidth: 350}}>
            {post.body[0].children[0].text}
          </div>

          <div className="d-flex align-items-center">
            <img src="/assets/img/blog/blog-author-2.jpg" alt="" className="img-fluid post-author-img flex-shrink-0"/>
            <div className="post-meta">

              <p className="post-author text-black">
                {/* {authors[0].name} */}
                Author Name
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
      {/* <!-- End post list item --> */}
} )}

  </div>
</section>
{/* <!-- End Recent Blog Posts Section --> */}
    </>
  )
}

export default Blogs