import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <>
        
        {/* <!-- ======= Footer ======= --> */}
        <footer id="footer" className="footer" >

          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <Link href="index.html" className="logo d-flex align-items-center">
                  <span>Ekonopro</span>
                </Link>
                <p>The ultimate purpose of learning economics, offcourse is to understand and promote enhancement of well-being</p>
                <div className="social-links d-flex mt-4">
                  <Link href="https://twitter.com/ekonopro?t=D9rgARBNIXkw77PzW2BUXA&s=09" className="twitter"><i className="bi bi-twitter"></i></Link>
                  <Link href="https://www.facebook.com/profile.php?id=100087708252044&is_tour_dismissed=true" className="facebook"><i className="bi bi-facebook"></i></Link>
                  <Link href="https://www.instagram.com/ekonopro/" className="instagram"><i className="bi bi-instagram"></i></Link>
                  <Link href="https://www.linkedin.com/in/econo-pro-068a95256/" className="linkedin"><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="#about">About us</Link></li>
                  {/* <li><Link href="#">Services</Link></li> */}
                  <li><Link href="#">Terms of service</Link></li>
                  <li><Link href="#">Privacy policy</Link></li>
                </ul>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><Link href="#about">Interactive Learning</Link></li>
                  <li><Link href="#about">Lesson Plans and Curriculum Resources</Link></li>
                  <li><Link href="#about">News Analyse</Link></li>
                  <li><Link href="#about">Career Information</Link></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022<br />
                  United States <br /><br />
                  <strong>Phone:</strong> <Link href='tel:+1 55895548855'>+1 5589 55488 55</Link> <br />
                  <strong>Email:</strong> <Link href='mailto:econopro@gmail.com'>econopro@gmail.com</Link> <br />
                </p>

              </div>

            </div>
          </div>

          <div className="container mt-4">
            <div className="copyright">
              &copy; Copyright <strong><span>Ekonopro</span></strong>. All Rights Reserved
            </div>
          </div>
        </footer>
        {/* <!-- End Footer --> */}
    </>
  )
}

export default Footer