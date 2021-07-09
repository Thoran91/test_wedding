import React, {useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './App.css';
import Banner from './components/Banner.js';
import Body from './components/Body.js';

function App() {

  const [product, setProduct] = useState({
    name: "Money Please",
    price: 2
  })

  const makePayment = token => {
    const body = {
      token,
      product
    }
    const headers = {
      "Content-Type": "application/json"
    }
    return fetch('http://localhost:8282/payment', {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log("Response ", response)
      const{status} = response;
      console.log("Status ", status)
    })
    .catch(error => console.log(error));
  }

  return (
    <div className="App">  
        <Banner/>
        <Body/>
        <StripeCheckout stripeKey="pk_test_51JAttUFEi1xgGXpkP9U0XWbR1JOBdEZc1WOBamS1dplY5U95b97ZBdJ13dDHWr8Vdcljvqb5uFIzGymcZALBK11c0009dcnIIh"
        token={makePayment}
        name="Now. Money. Please."
        amount={product.price * 100}
        >
          <button className="btn-large blue">€{product.price} now please.</button>
        </StripeCheckout>
    </div>
  );
}

export default App;
