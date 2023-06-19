import React, { useState } from 'react'

function Search({handleSearch}) {
  const [query,setQuery]=useState("something")
  const handleChange = (event) => {
    setQuery(event.target.value)
  }
  return (
    <div className='container mt-5'>
    <div className='row'>
      <div className='col-sm-2'></div>
      <div className='col-sm-8'>
        <div className='row'>
          <div className='col-sm-2'></div>
          <div className='col-sm-8'>
            <div className='input-group'>
              <input type='text' onChange={handleChange}  placeholder='Search Movies' defaultValue={query} className='form-control' />
              <button className='btn btn-warning' onClick={()=>{handleSearch(query)}}>Search</button>
            </div>
          </div>
          <div className='col-sm-2'></div>
        </div>
      </div>
      <div className='col-sm-2'></div>
    </div>
  </div>
  )
}

export default Search
