import React from 'react'

function Card() {
  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-sm-2' ></div>
        <div className='col-sm-8'>
          {isLoading &&
            <div style={{ paddingLeft: "50%" }}>
              <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          }
          {
            (!isLoading && data.length === 0) &&
            <div className='text-center'>
              <b>No Match Found Data</b>
            </div>
          }
          {
            !isLoading && data.map((item, i) => {
              return (
                //  console.log(item)
                <div className='row my-4 bg-white'>
                  <div className='col-sm-5'>
                    <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="image" height="230px" width="300px" />
                  </div>
                  <div className='col-sm-6 py-5'>
                    <div className='card-body'>
                      <b style={{ fontSize: "18px" }}>{item.original_title}</b>
                      <p>{item.overview.length > 100 ? item.overview.substr(0, 100) + "..." : item.overview}</p>
                      <p><span className='ms-4'>Release Date</span> <span className='ms-4'> {item.release_date} </span> <span className='ms-4'> {item.vote_count} Votes</span></p>
                    </div>
                  </div>
                  <div className='col-sm-1 bg-light'></div>
                </div>
              )
            })
          }
        </div>
        <div className='col-sm-2 '></div>
      </div>
    </div>
  )
}

export default Card
