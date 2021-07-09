const cors = require ("cors");
const express = require("express");
const uuid = require("uuid");
const stripe = require("stripe")("sk_test_51JAttUFEi1xgGXpkfdjLWbEDX1NTGdk8aJVD3ox1QdyTfvpEPqjXnU2enjrWE4Gb5Nked3NztQDiWdI31AQgM8EF00BwrRgE6R");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
    res.send("It's working");
});

app.post("/payment", (req, res) => {
    const {product, token} = req.body;
    console.log("Product ", product);
    console.log("Price ", product.price);
    const idempontencyKey = uuid();

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
