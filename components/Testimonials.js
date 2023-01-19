import React from 'react'

function Testimonials() {
  return (
    <>
        {/* <!-- ======= Testimonials Section ======= --> */}
<section id="testimonials" className="testimonials" style={{background:"#340122"}}>
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
    </>
  )
}

export default Testimonials