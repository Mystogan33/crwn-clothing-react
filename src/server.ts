import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { join } from 'path';
import compression from 'compression';
import enforce from 'express-sslify';
import Stripe from 'stripe';

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
};

const secretKey = process.env.STRIPE_SECRET_KEY!;
const stripe = new Stripe(secretKey);

const app = express();
const port = process.env.PORT || 5000;

app.use([
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  cors()
]);

if(process.env.NODE_ENV === 'production') {
  console.log("Production mode");
  app.use([
    compression(),
    enforce.HTTPS({ trustProtoHeader: true }),
    express.static(join(__dirname, 'client/build'))
  ]);

  app.get('/service-worker.js', (_, res) => {
    res.sendFile(join(__dirname, 'client/build', 'service-worker.js'));
  });

  app.get('*', (_, res) => {
    res.sendFile(join(__dirname, 'client/build', 'index.html'));
  });
}

app.post('/payment', (req, res) => {
  const { token: { id }, amount } = req.body;

  const body: Stripe.charges.IChargeCreationOptions = {
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

app.listen(port);
