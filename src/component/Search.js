import React from 'react'

export const Search = ({search, handleChange}) => {
  return(
      <div className="form-group row m-0 p-0">
        <label
         htmlFor="search" 
         className="col-3 col-form-label font-weight-bold px-0"
        >
           Search:
        </label>
        <div className="col-6">
          <input 
            className="form-control-control" 
            id="search" 
            type="text" 
            value={search} 
            onChange={(e) => handleChange(e)} />
        </div>
      </div>
  )
}