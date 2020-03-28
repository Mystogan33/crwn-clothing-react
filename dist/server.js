"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = require("path");
const compression_1 = __importDefault(require("compression"));
const express_sslify_1 = __importDefault(require("express-sslify"));
const stripe_1 = __importDefault(require("stripe"));
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
;
const secretKey = process.env.STRIPE_SECRET_KEY;
const stripe = new stripe_1.default(secretKey);
const app = express_1.default();
const port = process.env.PORT || 5000;
app.use([
    body_parser_1.default.json(),
    body_parser_1.default.urlencoded({ extended: true }),
    cors_1.default()
]);
if (process.env.NODE_ENV === 'production') {
    app.use([
        compression_1.default(),
        express_sslify_1.default.HTTPS({ trustProtoHeader: true }),
        express_1.default.static(path_1.join(__dirname, '../', 'client/build'))
    ]);
    app.get('/service-worker.js', (_, res) => {
        res.sendFile(path_1.join(__dirname, '../', 'client/build', 'service-worker.js'));
    });
    app.get('*', (_, res) => {
        res.sendFile(path_1.join(__dirname, '../', 'client/build', 'index.html'));
    });
}
app.get('/dirname', (req, res) => {
    res.status(200).send({ pathname: path_1.join(__dirname, '../') });
});
app.post('/payment', (req, res) => {
    const { token: { id }, amount } = req.body;
    const body = {
        source: id,
        amount,
        currency: 'usd'
    };
    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr)
            res.status(500).send({ error: stripeErr });
        else
            res.status(200).send({ success: stripeRes });
    });
});
app.listen(port);
