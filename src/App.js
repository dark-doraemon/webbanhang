import { useState, useEffect } from "react";
import SearchIcon from './search.svg'
import FoodCard from './FoodCard'
// 6aaa8336

const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i';

function App() {

	const [Food, setFood] = useState([]);
	const [searchFood, setSearchFood] = useState('');
	const SearchFood = async (foodname) => {
		if (foodname == '') {
			const response = await fetch(`${API_URL}`);
			const data = await response.json();
			setFood(data.meals);
		}
		else {
			const response = await fetch(`${API_URL}?i=${foodname}`);
			const data = await response.json();
			setFood(data.meals);
		}
	}
	useEffect(() => {
		SearchFood('')
	}, [])

	return (
		<div className="app">
			<h1>Web bán đồ ăn vặt</h1>

			<div className="search">
				<input placeholder="Tìm kiếm món ăn"
					value={searchFood}
					onChange={(e) => { setSearchFood(e.target.value) }}></input>

				<img src={SearchIcon}
					onClick={() => { SearchFood(searchFood) }}
					alt="Search"></img>
			</div>
			{
				Food?.length > 0
					? (
						<div className="container">
							{
								Food.map((Food) => (
									<FoodCard onClick={() => console.log(Food.strMeal)} Food={Food} />

								))
							}
						</div>
					) :
					(
						<div className="empty">
							<h2>No Food found</h2>
						</div>
					)
			}
		</div>


	);
}

export default App;
