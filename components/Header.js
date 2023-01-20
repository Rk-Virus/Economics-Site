import React from 'react'

function Header() {
  return (
    <>
         {/* <!-- ======= Header ======= --> */}
         <section id="topbar" className="topbar d-flex align-items-center" >
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center" >
              <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
              <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center" >
              <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </section>
        {/* <!-- End Top Bar --> */}

        <header id="header" className="header d-flex align-items-center" style={{background:"#340122"}}>

          <div className="container-fluid container-xl d-flex align-items-center justify-content-between"  >
            <a href="index.html" className="logo d-flex align-items-center">
              {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
              {/* <!-- <img src="assets/img/logo.png" alt=""/> --> */}
              <h1>Ekonopro<span>.</span></h1>
            </a>
            <nav id="navbar" className="navbar" style={{background:"#340122"}}>
              <ul>
                <li ><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                {/* <li><a href="#portfolio">Portfolio</a></li> */}
                <li><a href="#team">Team</a></li>
                <li><a href="blog.html">Blog</a></li>
                {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                  <ul>
                    <li><a href="#">Drop Down 4</a></li>
                  </ul>
                </li> */}
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
            {/* <!-- .navbar --> */}

            <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

          </div>
        </header>
        {/* <!-- End Header --> */}
    </>
  )
}

export default Header