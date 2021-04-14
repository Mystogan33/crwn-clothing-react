import express, { static as expressStatic } from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import { join } from 'path';
import compression from 'compression';
import { HTTPS } from 'express-sslify';
import Stripe, { charges } from 'stripe';

const { PORT, NODE_ENV, STRIPE_SECRET_KEY } = process.env;

if(NODE_ENV !== 'production') require('dotenv').config();

const secretKey = STRIPE_SECRET_KEY!;
const stripe = new Stripe(secretKey);

const app = express();
const port = PORT || 5000;

app.use([
  json(),
  urlencoded({ extended: true }),
  cors()
]);

if(NODE_ENV === 'production') {
  app.use([
    compression(),
    HTTPS({ trustProtoHeader: true }),
    expressStatic(join(__dirname, '../', 'client/build'))
  ]);

  app
    .get('/service-worker.js', (_, { sendFile }) => sendFile('/service-worker.js'))
    .get('*', (_, { sendFile }) => sendFile('/index.html'));
}

app.post('/payment', ({ body: { token: { id }, amount } }, res) => {

  const chargesBody: charges.IChargeCreationOptions = {
    source: id,
    amount,
    currency: 'usd'
  };

  stripe.charges.create(chargesBody, (error, success) => {
    if(error) res.status(500).send({ error });
    else res.status(200).send({ success });
  });
});

app.listen(port);
