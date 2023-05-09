import React from 'react'
import Image from 'next/image'

function Statuscounter() {
  return (
    <>  {/* <!-- ======= Stats Counter Section ======= --> */}
    <section id="stats-counter" className="stats-counter">
      <div className="container" data-aos="fade-up">

        <div className="row gy-4 align-items-center">

          <div className="col-lg-6">
            <Image fill src="/assets/img/stats-img.svg" alt="" className="img-fluid" />
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
    {/* <!-- End Stats Counter Section --> */}</>
  )
}

export default Statuscounter