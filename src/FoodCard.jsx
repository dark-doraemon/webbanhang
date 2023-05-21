import React from 'react';
const FoodCard = ({ Food ,onClick }) => {


	return (
		<div className="movie" onClick={onClick}>
			<div>
				<p>{Food.strMeal}</p>
			</div>

			<div>
				<img src={Food.strMealThumb !== "N/A" ? Food.strMealThumb : "https://via.placeholder.com/400"} alt={Food.idMeal} />
			</div>

			{/* <div >
				<button className='btn_ThemVaoGioHang' >Thêm vào giỏ hàng</button>
			</div> */}
			
		</div>
	);
}
export default FoodCard


