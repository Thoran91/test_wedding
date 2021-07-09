import React from 'react'

function Body() {
	return (
		<div>
			<div className="venue-card d-flex flex-column justify-content-center align-items-center" id="venue">
				<h1 className="centered-text title">The Old Mill, Riverstown, Co. Louth</h1>
				<p>Description of the venue</p>
				<div className="image-container d-flex flex-column justify-content-center">
					<img 
						src="https://res.cloudinary.com/tom-horan/image/upload/v1624370799/wedding_hp1fpr.jpg" 
						className="img-fluid venue-image" 
						alt="Carlingford Brewing Company"
					/>
					<img 
						src="https://res.cloudinary.com/tom-horan/image/upload/v1624370799/The_Old_Mill_weddings_-_Carlingford_Brewing_Company_-_main_hall_roof_sgthbk.jpg" 
						className="img-fluid venue-image" 
						alt="Carlingford Brewing Company"
					/>
				</div>
			</div>
			<div className="map-card d-flex flex-column justify-content-center align-items-center" id="venue">
				<div className="map-container">
				<div id="map"></div>
				</div>
			</div>   
			<div className="text-card d-flex flex-column justify-content-center align-items-center" id="food-and-drink">
				<h1 className="centered-text title">Food and Drink</h1>
				<div className="centered-text">
					<p className="centered-text">Details of the food and drink options</p>
					<p>Pig</p>
					<p>Not pig</p>
					<p>Lettuce bags</p>
					<p>
						"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
					</p>
				</div>
			</div>
			<div className="text-card d-flex flex-column justify-content-center align-items-center" id="gifts">
				<h1>Gifts</h1>
				<p>Money pleeease</p>
			</div>
		</div>
	);
}

export default Body;