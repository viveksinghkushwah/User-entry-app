import React from 'react'
import Userdata from '../components/Userdata'
import Formonclick from './Formonclick'
function Form() {
  return (
    <div><form onSubmit={<Formonclick/>} >
    <div className='form-cont'>
      <table><tr><td> <label>Name </label></td><td>  <input type="text" ></input>
      </td></tr>
        <tr><td>
          <label>Phone </label></td><td>
            <input type="num" required ></input>
          </td></tr>
        <tr><td><label>Age </label>
        </td><td>
            <input type="num"></input>
          </td></tr>
        <tr><td><label>Company</label></td><td>
          <input type="text" ></input>
        </td></tr>
        <tr>         <button type="submit" >Submit</button>
        </tr>

      </table>





    </div>
  </form>
</div>
  )
}

export default Form