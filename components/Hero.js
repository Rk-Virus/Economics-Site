import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <> {/* <!-- ======= Hero Section ======= --> */}
    <section id="hero" className="hero mt-0 sticked-header-offset">
      <div className="container position-relative">
        <div className="row gy-5 aos-init aos-animate" data-aos="fade-in">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
            <h2>Welcome to <span>Ekonopro</span></h2>
            <ul className='d-flex flex-column align-items-start text-bold text-white'>
              <li>General Economics</li>
              <li>Competitive Exams</li>
              <li>Current Affairs</li>
              <li>Class X, XI, XII</li>
            </ul>

            <p>The ultimate purpose of learning economic, offcourse is to understand and promote enhancement of well-being</p>

            {/* <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="#about" className="btn-get-started">Get Started</a>
              <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
            </div>*/}
          </div> 
          <div className="col-lg-6 order-1 order-lg-2">
            <img src="/assets/img/hero-img.jpeg" className="img-fluid aos-init aos-animate" alt="hero image" data-aos="zoom-out" data-aos-delay="100" />
          </div>
        </div>
      </div>

      <div className="icon-boxes position-relative">
        <div className="container position-relative">
          <div className="row gy-4 mt-5">

            {/* <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-easel"></i></div>
                <h4 className="title"><a href="" className="stretched-link">Lorem Ipsum</a></h4>
              </div>
            </div> */}
            {/* <!--End Icon Box --> */}

           
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End Hero Section --> */}</>
  )
}

export default Hero