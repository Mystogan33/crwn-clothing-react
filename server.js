const
  express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  path = require('path'),
  compression = require('compression');

if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const
  app = express(),
  port = process.env.PORT || 5000;

app.use([
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  cors(),
  compression()
]);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.post('/payment', (req, res) => {
  const { token: { id }, amount } = req.body;

  const body = {
    source: id,
    amount,
    currency: 'usd'
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if(stripeErr)
      res.status(500).send({ error: stripeErr });
    else
      res.status(200).send({ success: stripeRes })
  });
});

app.listen(port, error => {
  if(error) throw error;
  console.log(`Server running on port ${port}`);
});
