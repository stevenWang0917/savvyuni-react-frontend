import React, { useState } from 'react'

export const Modal =({ handleAddTag }) => {
  const [tag, setTag] = useState('')
  const handleChange = (e) => setTag(e.target.value)

  return(
    <div
     className="modal fade" 
     id="addTag" 
     tabIndex="-1" 
     role="dialog" 
     aria-labelledby="title" 
     aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="title">Add a tag</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group row">
              <label
               htmlFor="tag" 
               className="col-2 col-form-label font-weight-bold">
                 Tag:
              </label>
              <div className="col-10">
                <input 
                  className="form-control-control" 
                  id="tag" 
                  type="text"
                  name="tag" 
                  value={tag} 
                  onChange={handleChange} />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-secondary" 
              data-dismiss="modal">
                Close
            </button>
            <button
             type="button" 
             className="btn btn-primary" 
             onClick={() =>{ handleAddTag(tag); setTag('')}}>
               Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}