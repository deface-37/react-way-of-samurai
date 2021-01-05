import React from 'react'
import style from './pages.module.css'
import classnames from 'classnames'

function Pages(props) {
  const {pagesInfo, parameters} = props
  
  let pagesCount = Math.ceil(pagesInfo.totalCount / parameters.usersPerPage)
  pagesCount = Math.min(pagesCount, parameters.displayedPages)
  const pagesArray = Array.from(Array(pagesCount), (_val, index) => index + 1)

  const onPageClick = (number) => {
    props.setCurrentPage(number)
    props.reloadUsers()
  }

  return <div>
    {pagesArray.map(p => 
    <span className={classnames(style.base, {[style.selected]: pagesInfo.currentPage === p })} 
      onClick = {() => {onPageClick(p)}} > 
    {p} </span>)}
    </div>

}

export default Pages
