import React from 'react'
import Userdata from './Userdata'
function Table({ users, deleteUser, editUser }) {
  return (
    <div> <h1 > User Data table</h1>
      <table className='fromdatatable' ><tr className='fromdatatable'>
        <th className='fromdatatable'>Name</th>
        <th className='fromdatatable'>Phone</th>
        <th className='fromdatatable'>Age</th>
        <th className='fromdatatable'>Company</th>
        <th className='fromdatatable'>Edit entry</th>
        <th className='fromdatatable'>Delete entry</th>
      </tr><Userdata users={users} deleteUser={deleteUser} editUser={editUser} />
      </table></div>
  )
}

export default Table