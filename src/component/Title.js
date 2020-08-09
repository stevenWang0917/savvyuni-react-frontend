import React from 'react'

export const Title = ({ title, subtitle }) => {
  return(
    <>
      <div className="row justify-content-center mt-5">
        <h2>{title}&nbsp;</h2>
      </div>
      <div className="row justify-content-center align-items-center mb-3">
        <h6>{subtitle}</h6>
      </div>
    </>
  )
}