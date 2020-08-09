import React, { useState } from 'react'
import { Frame } from './Frame'
import { Table } from './Table'
import { Pagination } from './Pagination'
import { DataWrapper } from '../dataContext/DataWrapper'
import { Search } from './Search'
import { Modal } from './Modal'
import { Title } from './Title'

export const Jobs = DataWrapper(({ items, handleAddTag }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')

  const searchResults = items.filter( e => 
    e.id.includes(search) || 
    e.title.includes(search) || 
    e.company.includes(search) || 
    e.location.includes(search) || 
    e.salary.includes(search) || 
    e.description.includes(search) || 
    e.date.includes(search)
  )
  const resultsNum = searchResults.length
  const pages = Math.ceil(searchResults.length/10)
  const onePage = searchResults.slice(currentPage*10-10, currentPage*10)

  const handlePre = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage-1)
    }
  }

  const handleNext = () => {
    if(currentPage+1 <= pages){
      setCurrentPage(currentPage+1)
    }
  }

  const handleClick = (num) => {
    setCurrentPage(num)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return(
    <Frame>
      <Title title="Indeed Jobs" subtitle='( Keywords "Web Developer" )' />
      <div className="row justify-content-between mb-3 mx-0 px-0">
        <Search search={search} handleChange={handleChange}/>
        <button 
          className="btn btn-sm btn-primary"
          type="button"
          data-toggle="modal" 
          data-target="#addTag"
        >
          Add Tags
        </button>
      </div>
      <Modal handleAddTag={handleAddTag} />
      {
        resultsNum?
        <>
          <Table data={onePage}/>
          <Pagination 
            currentPage={currentPage}
            pages={pages}
            handlePre={handlePre}
            handleNext={handleNext}
            handleClick={handleClick} />
        </> :
        <h4>No Results</h4>
      }
    </Frame>
  )
})
