import React from 'react'
import { TableRow } from './TableRow'
import './Table.css'

export const Table = ({ data }) => {
  const columns = data && data.length !==0 && Object.keys(data[0])
  return(
    <div className="row px-3">
      <table className="table table-sm table-hover table-bordered shadow-sm bg-white rounded">
        <thead className="thead-light">
          <tr>
            <th className="text-center">#</th>
            {
              columns && columns.map(e => <th key={e} className="text-center minWidth">{e}</th>)
            }
            <th className="text-center">Options</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.length !==0 && data.map((e, i)=> <TableRow key={e+i} data={e} num={i+1}/>)
          }
        </tbody>
      </table>
    </div>
  )
}