"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const path_1 = require("path");
const compression_1 = __importDefault(require("compression"));
const express_sslify_1 = require("express-sslify");
const stripe_1 = __importDefault(require("stripe"));
const { PORT, NODE_ENV, STRIPE_SECRET_KEY } = process.env;
if (NODE_ENV !== 'production')
    require('dotenv').config();
const secretKey = STRIPE_SECRET_KEY;
const stripe = new stripe_1.default(secretKey);
const app = express_1.default();
const port = PORT || 5000;
app.use([
    body_parser_1.json(),
    body_parser_1.urlencoded({ extended: true }),
    cors_1.default()
]);
if (NODE_ENV === 'production') {
    app.use([
        compression_1.default(),
        express_sslify_1.HTTPS({ trustProtoHeader: true }),
        express_1.static(path_1.join(__dirname, '../', 'client/build'))
    ]);
    app
        .get('/service-worker.js', (_, { sendFile }) => sendFile('/service-worker.js'))
        .get('*', (_, { sendFile }) => sendFile('/index.html'));
}
app.post('/payment', ({ body: { token: { id }, amount } }, res) => {
    const chargesBody = {
        source: id,
        amount,
        currency: 'usd'
    };
    stripe.charges.create(chargesBody, (error, success) => {
        if (error)
            res.status(500).send({ error });
        else
            res.status(200).send({ success });
    });
});
app.listen(port);
