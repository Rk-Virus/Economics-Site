import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function quiz() {
    return (
        <>
            <Header />
            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div className="breadcrumbs">
                    <div className="page-header d-flex align-items-center" >
                        <div className="container position-relative">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <h2>Quiz page</h2>
                                    <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav>
                        <div className="container">
                            <ol>
                                <li><a href="/">Home</a></li>
                                <li>Quiz Page</li>
                            </ol>
                        </div>
                    </nav>
                </div>
                {/* <!-- End Breadcrumbs --> */}

                            {/* Quiz section  */}
                            <div className='bg-white text-black quiz-section'>
                                <div className='container-fluid p-5'>

                                    <h2>CUET Practice</h2>
                                    <h4 className='lead'>Attempt the following quitions :</h4>
                                    <hr />

                                    <form action='' method='POST'>
                                        <ol className='quiz-block'>
                                            {/* quiz questions starts here  */}
                                            <li>
                                                <div className='question mt-4'>
                                                    <p>Which one is correct ?</p>
                                                </div>
                                                <div className='options'>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="q1" id="flexRadioDefault1" />
                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                            Option A
                                                        </label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="q1" id="fq2op1" />
                                                        <label class="form-check-label" for="fq2op1">
                                                            Option B
                                                        </label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="q1" id="fq3op1" />
                                                        <label class="form-check-label" for="fq3op1">
                                                            Option C
                                                        </label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="q1" id="fq4op1" />
                                                        <label class="form-check-label" for="fq4op1">
                                                            Option D
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className='question mt-4'>
                                                    <p>Which one is correct ?</p>
                                                </div>
                                                <div className='options'>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="q2" id="q2op1" />
                                                        <label class="form-check-label" for="q2op1">
                                                            Option A
                                                        </label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="q2" id="q2op2" />
                                                        <label class="form-check-label" for="q2op2">
                                                            Option B
                                                        </label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="q2" id="q2op3" />
                                                        <label class="form-check-label" for="q2op3">
                                                            Option C
                                                        </label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="q2" id="q2op4" />
                                                        <label class="form-check-label" for="q2op4">
                                                            Option D
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                        <button type="submit" class="btn btn-sm btn-outline-primary mx-4 my-2 px-4">Submit</button>
                                    </form>
                                </div>
                            </div>
            </main>

            <Footer />
        </>
    )
}

export default quiz