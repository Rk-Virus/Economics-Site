import React from 'react'

function Blogs() {
  return (
    <>
    {/* <!-- ======= Recent Blog Posts Section ======= --> */}
<section id="recent-posts" className="recent-posts sections-bg">

    <div className="section-header text-black">
      <h2>Recent Blog Posts</h2>
      <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto accusamus fugit aut qui distinctio</p>
    </div>

    <div className="row gy-4">

      <div className="col-xl-4 col-md-6">


      <div className="col-xl-4 col-md-6">
        <article>
          <div className="post-img">
            <img src="assets/img/blog/blog-2.jpg" alt="" className="img-fluid"/>
          </div>

          <p className="post-category">Sports</p>

          <h2 className="title">
            <a href="/blog">Nisi magni odit consequatur autem nulla dolorem</a>
          </h2>

          <div className="d-flex align-items-center">
            <img src="assets/img/blog/blog-author-2.jpg" alt="" className="img-fluid post-author-img flex-shrink-0"/>
            <div className="post-meta">
              <p className="post-author">Allisa Mayer</p>
              <p className="post-date">
                <time dateTime="2022-01-01">Jun 5, 2022</time>
              </p>
            </div>
          </div>

        </article>
      </div>
      {/* <!-- End post list item --> */}

    </div>
    {/* <!-- End recent posts list --> */}

  </div>
</section>
{/* <!-- End Recent Blog Posts Section --> */}
    </>
  )
}

export default Blogs