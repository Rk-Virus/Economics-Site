import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <>
         {/* <!-- ======= Header ======= --> */}
        <header id="header" className="header d-flex align-items-center sticked">

          <div className="container-fluid container-xl d-flex align-items-center justify-content-between"  >
            <Link href="/" className="logo d-flex align-items-center">
              {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
              {/* <!-- <img src="/assets/img/logo.png" alt=""/> --> */}
              <h1>Ekonopro<span>.</span></h1>
            </Link>
            <nav id="navbar" className="navbar">
              <ul>
                <li ><Link href="#hero">Home</Link></li>
                <li><Link href="#about">About</Link></li>
                {/* <li><Link href="#services">Services</Link></li> */}
                {/* <li><Link href="#portfolio">Portfolio</Link></li> */}
                {/* <li><Link href="#team">Team</Link></li> */}
                <li><Link href="#recent-posts">Blog</Link></li>
                {/* <li className="dropdown"><Link href="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                  <ul>
                    <li><Link href="#">Drop Down 4</Link></li>
                  </ul>
                </li> */}
                <li><Link href="#contact">Contact</Link></li>
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