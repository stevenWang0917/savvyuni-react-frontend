import React from 'react'
import { DataWrapper } from '../dataContext/DataWrapper'
import { Link } from 'react-router-dom';

export const TableRow = DataWrapper(({ num, data, handleDelete, handleItem }) => {
  return(
    <tr>
      <th className="align-middle">{num}</th>
    {
      Object.values(data).map((e, i) =>
       <td className="align-middle minWidth" key={i}>{e}</td>
      )
    }
      <td className="align-middle">
        <div className="d-flex justify-content-center align-items-center">
          <Link
            to={`/edit/${data.id}`} 
            className="btn btn-sm btn-success mr-2" 
            onClick={ () => handleItem(data.id) }>
              Edit
          </Link>
          <button
            className="btn btn-sm btn-danger" 
            onClick={ () => handleDelete(data.id) }>
              Delete
          </button>
        </div>
      </td>
    </tr>
  )
})