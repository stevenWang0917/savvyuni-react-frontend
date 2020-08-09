import React from 'react'

export const Pagination = ({ pages, currentPage, handlePre, handleNext, handleClick }) => {
  let icons
  switch(pages){
    case 1:
      icons =(
        <li 
          className={`page-item ${currentPage === 1 && 'active'}`}
          onClick={() => handleClick(1)}
        >
          <a className="page-link" href="/#">1</a>
        </li>)
      break
    case 2:
      icons = (
        <>
          <li 
            className={`page-item ${currentPage === 1 && 'active'}`}
            onClick={() => handleClick(1)}
          >
            <a className="page-link" href="/#">1</a>
          </li>
          <li
            className={`page-item ${currentPage === 2 && 'active'}`}
            onClick={() => handleClick(2)}
           >
            <a className="page-link" href="/#">2</a>
          </li>
        </>)
      break
    default:
      const i = parseInt((currentPage-1)/3)
      icons = (
        <>
          <li 
            className={`page-item ${currentPage === i*3+1 && 'active'}`}
            onClick={(e) =>{ handleClick(i*3+1); e.preventDefault()}}
          >
            <a className="page-link" href="/#">{i*3+1}</a>
          </li>
          <li
           className={`page-item ${currentPage === i*3+2 && 'active'}`}
           onClick={(e) =>{ handleClick(i*3+2); e.preventDefault()}}
           >
            <a className="page-link" href="/#">{i*3+2}</a>
          </li>
          <li
           className={`page-item ${currentPage === i*3+3 && 'active'}`}
           onClick={(e) =>{ handleClick(i*3+3); e.preventDefault()}}
           >
            <a className="page-link" href="/#">{i*3+3}</a>
          </li>
        </>)
  }
  return(
    <div className="row justify-content-end px-3">
      <nav>
        <ul className="pagination">
          <li 
            className={`page-item ${currentPage === 1 && 'disabled'}`}
            onClick={(e) =>{ handlePre(); e.preventDefault()}}>
            <a className="page-link" href="/#">
              <span>&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          { icons }
          <li 
            className={`page-item ${currentPage === pages && 'disabled'}`}
            onClick={(e) =>{ handleNext(); e.preventDefault()}}>
            <a className="page-link" href="/#">
              <span>&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}