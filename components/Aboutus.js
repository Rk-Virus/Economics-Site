import React from 'react'

function Aboutus() {
  return (
    <>{/* <!-- ======= About Us Section ======= --> */}
      <section id="about" className="about">
        <div className="container aos-init aos-animate" data-aos="fade-up">

          <div className="section-header">
            <h2>About Us</h2>
            <p style={{textAlign:'justify'}}>EKONOPRO is an Educational  Platform which provides structured, technical and effective learning in ECONOMICS.
              <br />
              We are dedicated to dispense high-quality, accessible and educational resources to help learners the complexity of the subject with real life example.
              <br />

              Our experienced educators create and Provide understandable, relevant and latest content of affairs of  ECONOMICS.
              <br />
              We are here to help you all, navigate this fascinating subject, whether you are an individual, student or a business professional.

            </p>
          </div>

          <div className="row gy-4">
            {/* <div className="col-lg-6">
              <h3>Voluptatem dignissimos provident quasi corporis</h3>
              <img src="/assets/img/about.jpg" className="img-fluid rounded-4 mb-4" alt="" />
              
            </div> */}
            <div className="col-lg-6">
              <div className="content ps-0 ps-lg-5">
                <p className="fst-italic">
                  What we do for you ?
                </p>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i> <b> Interactive learning tool:</b> access to 24*7 quiz session that allow students to experiment their concepts and assess their knowledge.</li>
                  <li><i className="bi bi-check-circle-fill"></i><b> Lesson plans and curriculum resources:</b> we offer lesson plans and activity guides that helps learners to incorporate ECONOMICS and track their preparation.</li>
                  <li><i className="bi bi-check-circle-fill"></i><b> News Analyse:</b> we provide news and analysis of current events in the economy and financial markets, to make learners up-to-date and develop a deeper understanding of ECONOMICS concepts.
                  </li>

                  <li><i className="bi bi-check-circle-fill"></i> <b>Career Information:</b> we provide counselling about career in ECONOMICS, to help those who are considering pursuing a degree in ECONOMICS or finance and want to learn more about potential job opportunities.

                  </li>
                </ul>

              </div>
            </div>
          </div>

        </div>
      </section>
      {/* <!-- End About Us Section --> */}</>
  )
}

export default Aboutus