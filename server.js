if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const stripePublicKet = process.env.STRIPE_PUBLIC_KEY;
const stripeSecretKet = process.env.STRIPE_SECRET_KEY;
console.log("👀: stripeSecretKet", stripeSecretKet)
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.listen(3000);