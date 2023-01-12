import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ekonopro</title>
        <meta charset="utf-8" />
        <meta name="description" content="Economics handles the world behind the scene, from a coin to world bank" />
        <meta content="economics" name="keywords" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <!-- Favicons --> */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Google Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

        {/* <!-- Vendor CSS Files --> */}
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

        {/* <!-- Template Main CSS File --> */}
        <link href="assets/css/main.css" rel="stylesheet" />

        {/* <!-- =======================================================
        * Template Name: Impact - v1.1.1
        * Template URL: https://bootstrapmade.com/impact-bootstrap-business-website-template/
        * Author: BootstrapMade.com
        * License: https://bootstrapmade.com/license/
        ======================================================== --> */}

      </Head>
      <div>
        {/* <!-- ======= Header ======= --> */}
        <section id="topbar" className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
              <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </section>
        {/* <!-- End Top Bar --> */}

        <header id="header" className="header d-flex align-items-center">

          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
              {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
              {/* <!-- <img src="assets/img/logo.png" alt=""/> --> */}
              <h1>Impact<span>.</span></h1>
            </a>
            <nav id="navbar" className="navbar">
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                  <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                      <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Drop Down 2</a></li>
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                  </ul>
                </li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
            {/* <!-- .navbar --> */}

            <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

          </div>
        </header>
        {/* <!-- End Header --> */}

        {/* <!-- ======= Hero Section ======= --> */}
        <section id="hero" className="hero mt-0">
          <div className="container position-relative">
            <div className="row gy-5" data-aos="fade-in">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                <h2>Welcome to <span>Impact</span></h2>
                <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <a href="#about" className="btn-get-started">Get Started</a>
                  <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <img src="assets/img/hero-img.svg" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
              </div>
            </div>
          </div>

          <div className="icon-boxes position-relative">
            <div className="container position-relative">
              <div className="row gy-4 mt-5">

                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-easel"></i></div>
                    <h4 className="title"><a href="" className="stretched-link">Lorem Ipsum</a></h4>
                  </div>
                </div>
                {/* <!--End Icon Box --> */}

                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-gem"></i></div>
                    <h4 className="title"><a href="" className="stretched-link">Sed ut perspiciatis</a></h4>
                  </div>
                </div>
                {/* <!--End Icon Box --> */}

                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-geo-alt"></i></div>
                    <h4 className="title"><a href="" className="stretched-link">Magni Dolores</a></h4>
                  </div>
                </div>
                {/* <!--End Icon Box --> */}

                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-command"></i></div>
                    <h4 className="title"><a href="" className="stretched-link">Nemo Enim</a></h4>
                  </div>
                </div>
                {/* <!--End Icon Box --> */}

              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Hero Section --> */}

        <main id="main">
          {/* <!-- ======= About Us Section ======= --> */}
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">

              <div className="section-header">
                <h2>About Us</h2>
                <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
              </div>

              <div className="row gy-4">
                <div className="col-lg-6">
                  <h3>Voluptatem dignissimos provident quasi corporis</h3>
                  <img src="assets/img/about.jpg" className="img-fluid rounded-4 mb-4" alt="" />
                  <p>Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod nisi et. Placeat debitis quia recusandae odit et consequatur voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.</p>
                  <p>Temporibus nihil enim deserunt sed ea. Provident sit expedita aut cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus nobis tempore doloribus debitis explicabo similique sit. Accusantium sed ut omnis beatae neque deleniti repellendus.</p>
                </div>
                <div className="col-lg-6">
                  <div className="content ps-0 ps-lg-5">
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="bi bi-check-circle-fill"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                    </p>

                    <div className="position-relative mt-4">
                      <img src="assets/img/about-2.jpg" className="img-fluid rounded-4" alt="" />
                      <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
          {/* <!-- End About Us Section --> */}

          {/* <!-- ======= Clients Section ======= --> */}
          <section id="clients" className="clients">
            <div className="container" data-aos="zoom-out">

              {/* ye error de rha tha  */}
              {/* <div className="clients-slider swiper"> */}
              <div className="">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
                </div>
              </div>

            </div>
          </section>
          {/* <!-- End Clients Section --> */}

          {/* <!-- ======= Stats Counter Section ======= --> */}
          <section id="stats-counter" className="stats-counter">
            <div className="container" data-aos="fade-up">

              <div className="row gy-4 align-items-center">

                <div className="col-lg-6">
                  <img src="assets/img/stats-img.svg" alt="" className="img-fluid" />
                </div>

                <div className="col-lg-6">
                  <div className="stats-item d-flex align-items-center">
                    <span data-purecounter-start="0" data-purecounter-end="453" data-purecounter-duration="1" className=""></span>
                    <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                  </div>
                  {/* <!-- End Stats Item --> */}

                  <div className="col-lg-6">
                    <div className="stats-item d-flex align-items-center">
                      <span data-purecounter-start="0" data-purecounter-end="453" data-purecounter-duration="1" className=""></span>
                      <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                    </div>
                    {/* <!-- End Stats Item --> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End Stats Counter Section --> */}

          {/* <!-- ======= Call To Action Section ======= --> */}
          <section id="call-to-action" className="call-to-action">
            <div className="container text-center" data-aos="zoom-out">
              <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
              <h3>Call To Action</h3>
              <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a className="cta-btn" href="#">Call To Action</a>
            </div>
          </section>
          {/* <!-- End Call To Action Section --> */}


{/* <!-- ======= Our Services Section ======= --> */}
<section id="services" className="services sections-bg">
  <div className="container" data-aos="fade-up">

    <div className="section-header">
      <h2>Our Services</h2>
      <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
    </div>

    <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">

      <div className="col-lg-4 col-md-6">
        <div className="service-item  position-relative">
          <div className="icon">
            <i className="bi bi-activity"></i>
          </div>
          <h3>Nesciunt Mete</h3>
          <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
          <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
      {/* <!-- End Service Item --> */}

      <div className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-broadcast"></i>
          </div>
          <h3>Eosle Commodi</h3>
          <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
          <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
      {/* <!-- End Service Item --> */}

      <div className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-easel"></i>
          </div>
          <h3>Ledo Markt</h3>
          <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
          <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
      {/* <!-- End Service Item --> */}

      <div className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-bounding-box-circles"></i>
          </div>
          <h3>Asperiores Commodit</h3>
          <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
          <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
      {/* <!-- End Service Item --> */}

      <div className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-calendar4-week"></i>
          </div>
          <h3>Velit Doloremque</h3>
          <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
          <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
      {/* <!-- End Service Item --> */}

      <div className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-chat-square-text"></i>
          </div>
          <h3>Dolori Architecto</h3>
          <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
          <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
      {/* <!-- End Service Item --> */}

    </div>

  </div>
</section>
{/* <!-- End Our Services Section --> */}
{/* <!-- ======= Testimonials Section ======= --> */}
<section id="testimonials" className="testimonials">
  <div className="container" data-aos="fade-up">

    <div className="section-header">
      <h2>Testimonials</h2>
      <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam</p>
    </div>

{/* eroor */}
    <div className="" data-aos="fade-up" data-aos-delay="100">
      <div className="swiper-wrapper">

      

        <div className="swiper-slide">
          <div className="testimonial-wrap">
            <div className="testimonial-item">
              <div className="d-flex align-items-center">
                <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img flex-shrink-0" alt=""/>
                <div>
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </div>
        {/* <!-- End testimonial item --> */}

      </div>
      <div className="swiper-pagination"></div>
    </div>

  </div>
</section>
{/* <!-- End Testimonials Section --> */}
{/* <!-- ======= Our Team Section ======= --> */}
<section id="team" className="team">
  <div className="container" data-aos="fade-up">

    <div className="section-header">
      <h2>Our Team</h2>
      <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
    </div>

    <div className="row gy-4">

      <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
        <div className="member">
          <img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""/>
          <h4>Walter White</h4>
          <span>Web Development</span>
          <div className="social">
            <a href=""><i className="bi bi-twitter"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Team Member --> */}

      <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
        <div className="member">
          <img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""/>
          <h4>Sarah Jhinson</h4>
          <span>Marketing</span>
          <div className="social">
            <a href=""><i className="bi bi-twitter"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Team Member --> */}

      <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
        <div className="member">
          <img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""/>
          <h4>William Anderson</h4>
          <span>Content</span>
          <div className="social">
            <a href=""><i className="bi bi-twitter"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Team Member --> */}

      <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
        <div className="member">
          <img src="assets/img/team/team-4.jpg" className="img-fluid" alt=""/>
          <h4>Amanda Jepson</h4>
          <span>Accountant</span>
          <div className="social">
            <a href=""><i className="bi bi-twitter"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Team Member --> */}

    </div>

  </div>
</section>
{/* <!-- End Our Team Section --> */}
{/* <!-- ======= Frequently Asked Questions Section ======= --> */}
<section id="faq" className="faq">
  <div className="container" data-aos="fade-up">

    <div className="row gy-4">

      <div className="col-lg-4">
        <div className="content px-xl-5">
          <h3>Frequently Asked <strong>Questions</strong></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
          </p>
        </div>
      </div>

      <div className="col-lg-8">

        <div className="accordion accordion-flush" id="faqlist" data-aos="fade-up" data-aos-delay="100">

          <div className="accordion-item">
            <h3 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                <span className="num">1.</span>
                Non consectetur a erat nam at lectus urna duis?
              </button>
            </h3>
            <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
              <div className="accordion-body">
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
              </div>
            </div>
          </div>
          {/* <!-- # Faq item--> */}

          <div className="accordion-item">
            <h3 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                <span className="num">2.</span>
                Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
              </button>
            </h3>
            <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
              <div className="accordion-body">
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </div>
            </div>
          </div>
          {/* <!-- # Faq item--> */}

          <div className="accordion-item">
            <h3 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                <span className="num">3.</span>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
              </button>
            </h3>
            <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
              <div className="accordion-body">
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
              </div>
            </div>
          </div>
          {/* <!-- # Faq item--> */}

          <div className="accordion-item">
            <h3 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                <span className="num">4.</span>
                Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
              </button>
            </h3>
            <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
              <div className="accordion-body">
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </div>
            </div>
          </div>
          {/* <!-- # Faq item--> */}

          <div className="accordion-item">
            <h3 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                <span className="num">5.</span>
                Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
              </button>
            </h3>
            <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
              <div className="accordion-body">
                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
              </div>
            </div>
          </div>
          {/* <!-- # Faq item--> */}

        </div>

      </div>
    </div>

  </div>
</section>
{/* <!-- End Frequently Asked Questions Section --> */}

{/* <!-- ======= Recent Blog Posts Section ======= --> */}
<section id="recent-posts" className="recent-posts sections-bg">
  <div className="container" data-aos="fade-up">

    <div className="section-header">
      <h2>Recent Blog Posts</h2>
      <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto accusamus fugit aut qui distinctio</p>
    </div>

    <div className="row gy-4">

      <div className="col-xl-4 col-md-6">
        <article>

          <div className="post-img">
            <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid"/>
          </div>

          <p className="post-category">Politics</p>

          <h2 className="title">
            <a href="blog-details.html">Dolorum optio tempore voluptas dignissimos</a>
          </h2>

          <div className="d-flex align-items-center">
            <img src="assets/img/blog/blog-author.jpg" alt="" className="img-fluid post-author-img flex-shrink-0"/>
            <div className="post-meta">
              <p className="post-author">Maria Doe</p>
              <p className="post-date">
                <time dateTime="2022-01-01">Jan 1, 2022</time>
              </p>
            </div>
          </div>

        </article>
      </div>
      {/* <!-- End post list item --> */}

      <div className="col-xl-4 col-md-6">
        <article>

          <div className="post-img">
            <img src="assets/img/blog/blog-2.jpg" alt="" className="img-fluid"/>
          </div>

          <p className="post-category">Sports</p>

          <h2 className="title">
            <a href="blog-details.html">Nisi magni odit consequatur autem nulla dolorem</a>
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

      <div className="col-xl-4 col-md-6">
        <article>

          <div className="post-img">
            <img src="assets/img/blog/blog-3.jpg" alt="" className="img-fluid"/>
          </div>

          <p className="post-category">Entertainment</p>

          <h2 className="title">
            <a href="blog-details.html">Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
          </h2>

          <div className="d-flex align-items-center">
            <img src="assets/img/blog/blog-author-3.jpg" alt="" className="img-fluid post-author-img flex-shrink-0"/>
            <div className="post-meta">
              <p className="post-author">Mark Dower</p>
              <p className="post-date">
                <time dateTime="2022-01-01">Jun 22, 2022</time>
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
{/* <!-- ======= Contact Section ======= --> */}
<section id="contact" className="contact">
  <div className="container" data-aos="fade-up">

    <div className="section-header">
      <h2>Contact</h2>
      <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
    </div>

    <div className="row gx-lg-0 gy-4">

      <div className="col-lg-4">

        <div className="info-container d-flex flex-column align-items-center justify-content-center">
          <div className="info-item d-flex">
            <i className="bi bi-geo-alt flex-shrink-0"></i>
            <div>
              <h4>Location:</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
          {/* <!-- End Info Item --> */}

          <div className="info-item d-flex">
            <i className="bi bi-envelope flex-shrink-0"></i>
            <div>
              <h4>Email:</h4>
              <p>info@example.com</p>
            </div>
          </div>
          {/* <!-- End Info Item --> */}

          <div className="info-item d-flex">
            <i className="bi bi-phone flex-shrink-0"></i>
            <div>
              <h4>Call:</h4>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
          {/* <!-- End Info Item --> */}

          <div className="info-item d-flex">
            <i className="bi bi-clock flex-shrink-0"></i>
            <div>
              <h4>Open Hours:</h4>
              <p>Mon-Sat: 11AM - 23PM</p>
            </div>
          </div>
          {/* <!-- End Info Item --> */}
        </div>

      </div>

      <div className="col-lg-8">
        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
            </div>
          </div>
          <div className="form-group mt-3">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="7" placeholder="Message" required></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>
      {/* <!-- End Contact Form --> */}

    </div>

  </div>
</section>
{/* <!-- End Contact Section --> */}
        </main>
        {/* <!-- End #main --> */}


        {/* <!-- ======= Footer ======= --> */}
        <footer id="footer" className="footer">

          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <a href="index.html" className="logo d-flex align-items-center">
                  <span>Impact</span>
                </a>
                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                <div className="social-links d-flex mt-4">
                  <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Terms of service</a></li>
                  <li><a href="#">Privacy policy</a></li>
                </ul>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#">Web Design</a></li>
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">Product Management</a></li>
                  <li><a href="#">Marketing</a></li>
                  <li><a href="#">Graphic Design</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022<br />
                  United States <br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>

              </div>

            </div>
          </div>

          <div className="container mt-4">
            <div className="copyright">
              &copy; Copyright <strong><span>Impact</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/impact-bootstrap-business-website-template/ --> */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>

        </footer>
        {/* <!-- End Footer --> */}
      </div >

      {/* <!-- Vendor JS Files --> */}
      < script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" ></script >
      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>

      {/* <!-- Template Main JS File --> */}
      <script src="assets/js/main.js"></script>
    </>
  )
}
