import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner'
import Search from './components/Search';
import Loader from './components/Loader';
import Card from './components/Card';
// import Search from './components/Search';
// import Card from './components/Card';

function App() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false)

	const getData = (value) => {
		setIsLoading(true)
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=d4fbc0cd7f3b6b7ea3c3b8e5c74b8f46&language=en-US&query=${value || "something"}`)
			.then((result) => result.json()).then((resp) => {
				// console.log(resp)
				setData(resp.results)
				setIsLoading(false)
			}).catch((err) => {
				// console.log(err)
				setIsLoading(false)
			})
	}
	useEffect(() => {
		getData()
	}, [])

	const handleSearch = (value) => {
		getData(value)
	}

	return (
		<div className="App">
			<div className='container'>
				<Search handleSearch={handleSearch} />
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
