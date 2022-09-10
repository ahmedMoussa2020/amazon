const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51KOQR7Lg1ETehAmcpHAt9pW6gfoKJ8Kjc9N0F9lUNGAtZ7hJWMwox7GklIK185Kb9Y38faLuUTcYjy05JZPBKmU900uktstxov"
);
// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('Hello world'))
// app.get('/Ahmed', (request, response) => response.status(200).send('Hello Ahmed'))

app.post('/payments/create', async (request, response) =>{
  const total = request.query.total;

  console.log('tesing the request', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd', // currenry type is usd 
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})
// Listen command
exports.api = functions.https.onRequest(app)

//sk_test_51KOQR7Lg1ETehAmcpHAt9pW6gfoKJ8Kjc9N0F9lUNGAtZ7hJWMwox7GklIK185Kb9Y38faLuUTcYjy05JZPBKmU900uktstxov