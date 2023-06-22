import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Card from './components/Card';

function App() {

	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [query, setQuery] = useState("something")
	const [year, setYear] = useState('')

	const getData = () => {
		setIsLoading(true)
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=d4fbc0cd7f3b6b7ea3c3b8e5c74b8f46&language=en-US&query=${query || "something"}&year=${year}`)
			.then((result) => result.json()).then((resp) => {
				setData(resp.results)
				setIsLoading(false)
			}).catch((err) => {
				setIsLoading(false)
			})
	}

	useEffect(() => {
		getData()
	}, [year])

	const handleSearch = () => {
		getData()
	}

	const onChangeYear = (e) => {
		setYear(e.target.value)

	}
	const handleChange = (event) => {
		setQuery(event.target.value)
	}

	const startYear = 1990;
	const endYear = 2023
	const years = []

	for (let year = startYear; year <= endYear; year++) {
		years.push(year)
	}

	return (
		<div className="App">
			<div className='container'>
				<div className='container mt-5'>
					<div className='row'>
						<div className='col-sm-2'></div>
						<div className='col-sm-8'>
							<div className='row'>
								<div className='col-sm-2 col-lg-2'>
									<div className='form-control'>
										<select onChange={onChangeYear}>
											<option>Select Year</option>
											{
												years.map((item, i) => {
													return (
														<option value={item}>{item}</option>
													)
												})
											}
										</select>
									</div>
								</div>
								<div className='col-sm-8'>
									<div className='input-group'>
										<input type='text' onChange={handleChange} placeholder='Search Movies' defaultValue={query} className='form-control' />
										<button className='btn btn-warning' onClick={handleSearch}>Search</button>
									</div>
								</div>
								<div className='col-sm-2'></div>
							</div>
						</div>
						<div className='col-sm-2'></div>
					</div>
				</div>
			</div>
			<div className='container p-5'>
				<div className='row'>
					<div className='col-sm-2' ></div>
					<div className='col-sm-8'>

						<Loader isLoading={isLoading} />
						{
							(!isLoading && data.length === 0) &&
							<div className='text-center'>
								<b>No Match Found Data</b>
							</div>
						}
						{
							!isLoading && data.map((item, i) => {
								return (
									<Card key={i} item={item} />
								)
							})
						}
					</div>
					<div className='col-sm-2 '></div>
				</div>
			</div>
		</div>
	);
}

export default App;
