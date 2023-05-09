import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import Pagination from './Pagination'
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';

// fetching data 
const fetchData = async (page) =>{
    const apiKey = '9553887deab04029a3c846ebeb1dfccd'
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&page=${page}&pageSize=4`
    const data = await fetch(url)
    const parsedData = await data.json()
    // console.log(parsedData.articles)
    return (parsedData.articles)
}

function News() {
    const [news, setNews] = useState([])
    const [pageNo, setPageNo] = useState(1)
    useEffect(() => {
      const loadData = async (page) =>{
        const data = await fetchData(page)
        setNews(data)
        // console.log(news)
      }
      loadData(pageNo)
    }, [])


    // previous and next page handlers 
    const handlePrev = async () =>{
      if(pageNo <= 1){
        alert("Can't go back!")
      }
      else{
        setPageNo(pageNo-1)
        const data = await fetchData(pageNo)
        setNews(data)
      }
    }

    const handleNext = async () =>{
      if(pageNo >= 10){
        alert("Can't go forward!")
      }
      else{
        setPageNo(pageNo+1)
        const data = await fetchData(pageNo)
        setNews(data)
      }
    }

    
  return (
    <>
    {/* <!-- ======= Recent News Posts Section ======= --> */}
    <section id="recent-news" className="recent-posts sections-bg mt-2">

<div className="section-header text-black">
  <h2>Recent News</h2>
  <p>Get to know recent economic events, current affairs, general knowlegde, exam updates and much more...</p>
</div>

<div className="row gy-4 mx-2">

  {news.length > 0 && news.map((post,index) => {
    return <div className="col-xl-3 col-md-6" key={index}>
      <article>
        <div className="post-img">
          {post.urlToImage && <img src={post.urlToImage}
            alt="News image" className="img-fluid" />}
        </div>

        <p className="post-category">{post.source.name && <>{post.source.name}</>}</p>

        <h2 className="title">
          <Link href={post.url}>{post.title.substring(0,30)}...</Link>
        </h2>
        {post.content && post.content.substring(0,50)}...

        <div className="d-flex align-items-center mt-4">
          <img fill src="/assets/img/blog/blog-author.png" alt="author image" className="img-fluid post-author-img flex-shrink-0" />
          <div className="post-meta">
            <p className="post-author text-black">
              {post.author && <>{post.author}</>}
            </p>

            <p className="post-date">
              <time dateTime="2022-01-01">
                {/* {post.publishedAt} */}
                {post.publishedAt}
              </time>
            </p>
          </div>
        </div>

      </article>
    </div>
    {/* <!-- End post list item --> */ }
  })}

  {/* <Pagination/> */}
  {/* pagination  */}
  <nav aria-label="Page navigation" className='mt-5'>
    <ul className="pagination justify-content-around">
      <li className="page-item">
        <Link className="page-link" href="#recent-news" onClick={handlePrev}>
          <ArrowLeft/>
          Back</Link>
      </li>
      {/* <li className="page-item">&nbsp;&nbsp;&nbsp;&nbsp;</li> */}
      <li className="page-item">
        <Link className="page-link" href="#recent-news" onClick={handleNext}>Next
        <ArrowRight/>
        </Link>
      </li>
    </ul>
  </nav>

</div>
</section>
{/* <!-- End Recent News Posts Section --> */}
    </>
  )
}

export default News