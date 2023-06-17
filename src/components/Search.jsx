import React from 'react'

function Search() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-sm-2'></div>
        <div className='col-sm-8'>
          <div className='row'>
            <div className='col-sm-2'></div>
            <div className='col-sm-8'>
              <div className='input-group'>
                <input type='text' placeholder='Search Movies' className='form-control' />
               <span className='btn btn-warning'>Search</span>
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
