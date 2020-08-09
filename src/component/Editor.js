import React, { useState } from 'react'
import { DataWrapper } from '../dataContext/DataWrapper'
import { Frame } from './Frame'
import { Link } from 'react-router-dom';

export const Editor = DataWrapper(({ item, handleEdit }) => {
  const [job, setJob] = useState(item)
  const [change, setChange] = useState({})

  const handleChange = (e) => {
    const newChange = {
      ...change,
      [e.target.name]: e.target.value
    }
    setChange(newChange)

    const newJob = {
      ...job,
      [e.target.name]: e.target.value
    }
    setJob(newJob)
  }

  const handleSubmit = (e) => {
    if(Object.keys(change).length){
      handleEdit(job.id, change)
      alert("The content was changed.")
    }
    e.preventDefault()
  }

  const subjects = Object.keys(job).filter( e => e !== 'id' && e !== 'active')

  return(
    <Frame>
      <form className="border p-5 shadow mt-5 bg-white rounded">
        <div className="d-flex justify-content-center align-items-center mb-4">
          <h4>Job&nbsp;</h4>
          <h6>{` ( ID: ${job.id} )`}</h6>
        </div>
        {
          subjects.map(e =>{
            return(
              <div className="form-group" key={e}>
                <label htmlFor={e} className="text-capitalize font-weight-bold">{e}</label>
                {
                  e === 'description'?
                  <textarea
                    className="form-control"
                    id={e} 
                    name={e} 
                    value={job[e]}
                    onChange={handleChange} /> :
                  <input
                    type="text" 
                    className="form-control"
                    id={e} 
                    name={e} 
                    value={job[e]}
                    onChange={handleChange} />
                }
              </div>
            )
          })
        }
        <div className="d-flex justify-content-between mt-4">
          <button 
            className="btn btn-primary"
            onClick={handleSubmit} >
              Submit
          </button>
          <Link 
            className="btn btn-primary"
            to="/jobs" >
              &nbsp;&nbsp;Back&nbsp;&nbsp;
          </Link>
        </div>
      </form>
    </Frame>
  )
})