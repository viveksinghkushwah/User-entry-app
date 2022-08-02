import React from 'react'

function Userdata({ users, deleteUser, editUser }) {
  return users.map(user => (
    <>
      <tr key={user.Phone} className='fromdatatable'>
        <td className='fromdatatable'>{user.Name}</td>
        <td className='fromdatatable'>{user.Phone}</td>
        <td className='fromdatatable'>{user.Age}</td>
        <td className='fromdatatable'>{user.Company}</td>
        <td className='fromdatatable'><button onClick={() => deleteUser(user.Phone)}>delete</button></td>
        <td className='fromdatatable'>  <button onClick={() => editUser(user.Phone)}>edit</button></td>
      </tr>
    </>
  ))

}

export default Userdata