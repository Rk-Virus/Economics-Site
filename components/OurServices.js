import React from 'react'

function OurServices() {
  return (
    <>
        
{/* <!-- ======= Our Services Section ======= --> */}
<section id="services" className="services sections-bg">
  <div className="container aos-init aos-animate" data-aos="fade-up">

    <div className="section-header">
      <h2>Our Services</h2>
      {/* <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p> */}
    </div>

    <div className="row gy-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

      <div className="col-lg-4 col-md-6">
        <div className="service-item  position-relative">
          <div className="icon">
            <i className="bi bi-tools"></i>
          </div>
          <h3>Interactive learning tool</h3>
          <p> Access to 24*7 quiz session that allow students to experiment their concepts and assess their knowledge.</p>
          {/* <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a> */}
        </div>
      </div>
      {/* <!-- End Service Item --> */}

      <div className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-book-half"></i>
          </div>
          <h3>Lesson plans and curriculum resources</h3>
          <p>We offer lesson plans and activity guides that helps learners to incorporate ECONOMICS and track their preparation.</p>
          {/* <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a> */}
        </div>
      </div>
      {/* <div className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-newspaper"></i>
          </div>
          <h3> News Analyse</h3>
          <p> We provide news and analysis of current events in the economy and financial markets, to make learners up-to-date and develop a deeper understanding of ECONOMICS concepts.</p>
        </div>
      </div> */}
      <div className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-diagram-3"></i>
          </div>
          <h3>Career Information</h3>
          <p>We provide counselling about career in ECONOMICS, to help those who are considering pursuing a degree in ECONOMICS or finance and want to learn more about potential job opportunities.</p>
          {/* <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a> */}
        </div>
      </div>
      {/* <!-- End Service Item --> */}
    </div>

  </div>
</section>
{/* <!-- End Our Services Section --> */}
    </>
  )
}

export default OurServices