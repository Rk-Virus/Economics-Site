import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xrgvekgj");
  if (state.succeeded) {
      return <p>Thanks for your message!</p>;
  }
  return (
    <>
    
{/* <!-- ======= Contact Section ======= --> */}
<section id="contact" className="contact bg-light" >
  <div className="container aos-init aos-animate" data-aos="fade-up">

    <div className="section-header text-black">
      <h2>Contact</h2>
    </div>

    <div className="row gx-lg-0 gy-4">

      <div className="col-lg-4">
        <div className="info-container d-flex flex-column align-items-center justify-content-center">
          <div className="info-item d-flex">
            <i className="bi bi-geo-alt flex-shrink-0"></i>
            <div>
              <h4>Location:</h4>
              <p>311 T/F Vardhman Sunder Plaza MLU Plot No 12 sector 12, Dwarka New Delhi 110078</p>
            </div>
          </div>
          {/* <!-- End Info Item --> */}

          <div className="info-item d-flex">
            <i className="bi bi-envelope flex-shrink-0"></i>
            <div>
              <h4>Email:</h4>
              <p>econopro@gmail.com</p>
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
              <p>Mon-Sat: 11AM - 10PM</p>
            </div>
          </div>
          {/* <!-- End Info Item --> */}
        </div>

      </div>

      <div className="col-lg-8">
        <form action="https://formspree.io/f/xrgvekgj" method="post" role="form" className="php-email-form">
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
    </>
  )
}

export default Contact