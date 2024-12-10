import React, {useEffect, useState} from 'react'
import axios from 'axios'
// import {Await} from 'react-router-dom'
const Database = () => {
  const [userdata, updateuserdata] = useState([])
  console.log('updated data', userdata)
  const [searchRestaurant, updatesearchrestaurant] = useState('')
  const [finalfilterdata, updatefinalfilterdata] = useState([])

  const getpostdata = async () => {
    const payload = {
      id: 11,
      name: 'pavan',
      username: 'Bret',
      email: 'Sincere@april.biz',
    }
    // const url = axios.post("https://jsonplaceholder.typicode.com/users", payload);

    const url = await axios.get('https://jsonplaceholder.typicode.com/users')

    console.log('url', url.data)
    updateuserdata(url.data)
  }

  const filterdata = userdata.filter(Restuarentnames => {
    return Restuarentnames.username.includes(searchRestaurant)
  })

  debugger
  useEffect(() => {
    getpostdata() //mounting phase
    // if (!searchRestaurant) {
    //   updatefinalfilterdata(userdata)
    // } else {
    //   updatefinalfilterdata(filterdata)
    // }
  }, [searchRestaurant])

  const handlesearch = event => {
    updatesearchrestaurant(event.target.value)
  }

  return (
    <>
      <input type="text" onChange={handlesearch} />
      Search Restaurant onchange search Restaurant{searchRestaurant}
      <div className="row">
        {filterdata.map(copyofuserdata => {
          const {website, username} = copyofuserdata

          return (
            <div className="col-4">
              <h4>{username} </h4>
              <p>{website} </p>
            </div>
          )
        })}
      </div>
      {/* <button onClick={getpostdata}>Getdata</button> */}
      {/* {userdata} */}
    </>
  )
}
export default Database
