import React from 'react'

export const Frame = ({ children }) => {
  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          {children}
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  )
}