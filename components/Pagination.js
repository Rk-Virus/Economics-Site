import React from 'react'

const Pagination = () => {
  return (
    <>
    {/* pagination  */}
    <nav aria-label="Page navigation" className='mt-5'>
    <ul className="pagination justify-content-center">
      <li className="page-item">
        <a className="page-link" href="#" >Previous</a>
      </li>
      <li className="page-item">._.</li>
      <li className="page-item">_._</li>
      <li className="page-item">._.</li>
      <li className="page-item">
        <a className="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
  </>
  )
}

export default Pagination