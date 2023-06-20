import React from 'react'

function Card({ item }) {
	return (
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
}

export default Card
