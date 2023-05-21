import { useState, useEffect } from "react";
import SearchIcon from './search.svg'
import FoodCard from './FoodCard'
// 6aaa8336

const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i';

function App() {

	const [Food, setFood] = useState([]);
	const [query, setQuery] = useState('');

	const fileterFood = Food.filter(item =>{
		return item.strMeal.toLowerCase().includes(query.toLocaleLowerCase())
	})

	const SearchFood = async () => {
		
		const response = await fetch(`${API_URL}`);
		const data = await response.json();
		setFood(data.meals);
		
		
	}
	useEffect(() => {
		SearchFood()
	}, [])

	console.log(query)
	return (
		<div className="app">
			<h1>Đồ ăn vặt .CC</h1>

			<div className="search">
				<input placeholder="Tìm kiếm món ăn"
					value={query}
					onChange={(e) => { setQuery(e.target.value) }}></input>

				<img src={SearchIcon}
					alt="Search"></img>
			</div>
			{
				fileterFood?.length > 0
					? (
						<div className="container">
							{
								fileterFood.map((Food) => (
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
