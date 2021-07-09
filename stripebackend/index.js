const cors = require ("cors");
const express = require("express");
const uuid = require("uuid");
const stripe = require("stripe")("pk_test_51JAttUFEi1xgGXpkP9U0XWbR1JOBdEZc1WOBamS1dplY5U95b97ZBdJ13dDHWr8Vdcljvqb5uFIzGymcZALBK11c0009dcnIIh");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
    res.send("It's working");
});

app.post("/payment", (req,res) => {
    const {product, token} = req.body;
    console.log("Product ", product);
    console.log("Price ", product.price);
    const idempontencyKey = uuid()

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create ({
            amount: product.price * 100,
            currency: 'eur',
            customer: customer.id,
            receipt_email: token.email,
            description: product.name 

        }, {idempontencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
})

//listen

app.listen(8282, () => console.log("listening at port 8282"));
