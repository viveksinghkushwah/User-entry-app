import React from 'react'
import styles from './Parentui.module.css'
import { useState, useEffect, useRef } from 'react'
import Table from './Table'
import './Table.css'
import GetDataFromLS from './utility/GetDataFromLS'
import CheckisNan from './utility/CheckisNan'
function ParentUi() {

  const [users, newuser] = useState(GetDataFromLS());
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Age, setAge] = useState('');
  const [Company, setCompany] = useState('');
  const phoneRef = useRef(null);
  const formsubmit = (event) => {
    event.preventDefault();
    let user = {
      Name, Phone, Age, Company
    }

    const DupliUser = (Phone) => {
      const Duplicate = users.some((element, index) => {
        return element.Phone === Phone
      })
      if (Duplicate) {
        alert('enter a Unique Phone number')
        editUser(users.Phone)

      }

    }
    DupliUser(user.Phone)

    newuser([...users, user])
    setName('')
    setPhone('')
    setAge('')
    setCompany('')
  }

  const editUser = (Phone) => {
    const updatedUsers1 = users.find((element, index) => {
      return element.Phone === Phone
    })
    setName(updatedUsers1.Name)
    setPhone(updatedUsers1.Phone)
    setAge(updatedUsers1.Age)
    setCompany(updatedUsers1.Company)
    deleteUser(Phone)
  }

  const deleteUser = (Phone) => {
    const updatedUsers = users.filter((element, index) => {
      return element.Phone !== Phone
    })
    newuser(updatedUsers);
  }

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users])

  const phoneFieldHandler = (event) => {
    CheckisNan(event.target.value) ? setPhone('') : setPhone(event.target.value)

  }


  return (

    <div className={styles.container}>

      <div className={styles.col1}>
        <form onSubmit={formsubmit} >
          <div className={styles.formcont}>
            <table><tr><td> <label>Name </label></td><td>
              <input type="text" onChange={(event) => setName(event.target.value)}
                value={Name} placeholder="Enter Your Phone"></input>
            </td></tr>
              <tr><td>
                <label>Phone </label></td><td>
                  <input type="num" required ref={phoneRef} onChange={(event) => phoneFieldHandler(event)} value={Phone} placeholder="Enter Your Phone"></input>
                </td></tr>
              <tr><td><label>Age </label>
              </td><td>
                  <input type="num" onChange={(event) => setAge(event.target.value)} value={Age} placeholder="Enter Your Age"></input>
                </td></tr>
              <tr><td><label>Company</label></td><td>
                <input type="text" onChange={(event) => setCompany(event.target.value)} value={Company} placeholder="Enter Your Company"></input>
              </td></tr>
              <tr><td><button type="submit" >Submit</button></td>
              </tr>
            </table>
          </div>
        </form>
      </div>
      <div className={styles.col2}>
        {users.length < 1 && <h1>No users entered</h1>}
        {users.length > 0 && <Table users={users} deleteUser={deleteUser} editUser={editUser} />}
      </div>
    </div>
  )
}

export default ParentUi