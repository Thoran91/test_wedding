import React from 'react'

function Banner() {
	return (
		<div className="banner-image">
			<div className="banner-text d-flex flex-column justify-content-center">
				<h1>Katy and Tom</h1>
				<h2>are getting married</h2>
			</div>
			<div className="button-box d-flex justify-content-center">
				<a className="link-button grow" href="#venue">Venue</a>
				<a className="link-button grow" href="#food-and-drink">Food and Drink</a>
				<a className="link-button grow" href="#gifts">Gifts</a>
			</div>
		</div>
	);
}

export default Banner;