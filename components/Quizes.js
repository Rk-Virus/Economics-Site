import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import Pagination from './Pagination'


function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <Image fill
          width={800}
          height={500}
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

function Quizes({ quizes }) {
  console.log(quizes)
  return (
    <>
      {/* <!-- ======= Recent Blog quizes Section ======= --> */}
      <section id="recent-quizes" className="recent-posts sections-bg">

        <div className="section-header text-black">
          <h2>Recent Quizes</h2>
          <p>Keep your confidence up with daily quizes...</p>
        </div>

        <div className="row gy-4 mx-2">

          {quizes.length > 0 && quizes.map((quiz) => {
            return <div className="col-xl-4 col-md-6" key={quiz._id}>
              <article>
                <div className="quiz-img">
                  {
                  // quiz.mainImage &&
                  <img src="https://cdn.pixabay.com/photo/2017/07/20/03/53/homework-2521144_1280.jpg"
                    alt="blog image" className="img-fluid" />}
                </div>

                {/* <p className="quiz-category">{quiz.categoryName && <>{quiz.categoryName}</>}</p> */}

                <h2 className="title">
                  <Link href={"/quiz/" + quiz.slug.current}>
                    {quiz.quizName}
                  </Link>
                </h2>
                {/* {quiz.body[0].children[0].text.substring(0, 100) + "..."} */}

                <div className="d-flex align-items-center mt-4">  
                  <div className="quiz-meta">

                    <p className="quiz-author text-black">
                      {/* {quiz.authorName && <>{quiz.authorName}</>} */}
                    </p>

                    <p className="quiz-date">
                      <time dateTime="2022-01-01">
                        {/* {quiz.publishedAt} */}
                        {new Date(quiz.publishedAt).toDateString()}
                      </time>
                    </p>
                  </div>
                </div>

              </article>
            </div>
            {/* <!-- End quiz list item --> */ }
          })}

          <Pagination/>

        </div>
      </section>
      {/* <!-- End Recent Blog quizes Section --> */}
    </>
  )
}

export default Quizes