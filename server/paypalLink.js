const express = require("express");
const app = express();
const paypal = require("paypal-rest-sdk");
const bodyParser = require("body-parser");

require("dotenv").config();
const cors = require("cors");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

paypal.configure({
  mode: "sandbox", // or 'live' for production
  client_id:
    "ASJPYnT65_iebulztfnhcn9bKZ7JwyrZ68SirOUyQMdsXAb9xz8wmNVHFpZa99GF36JFlew4u5vHaZWJ",
  client_secret:
    "EDEd3P-6cC1nerpNbq2FU7J-CC-kobwUhsKUhd9fejh96LZ3tN_ZbMKtcPCcLOjuuq3lgFaBvePjdDXO",
});

app.post("/create-payment-link", (req, res) => {
  const amount = req.body.amount;
  const currency = req.body.currency;
  const description = req.body.description;

  paypal.payment.create(
    {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: "http://example.com/return",
        cancel_url: "http://example.com/cancel",
      },
      transactions: [
        {
          amount: {
            currency: currency,
            total: amount,
          },
          description: description,
        },
      ],
    },
    (err, payment) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: "Error creating payment link" });
      } else {
        res.send({ paymentLink: payment.links[1].href });
      }
    }
  );
});

app.post("/confirm-payment", (req, res) => {
  const paymentLink = req.body.paymentLink;
  const paymentId = req.body.paymentId;

  paypal.payment.get(paymentId, (err, payment) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: "Error confirming payment" });
    } else {
      if (payment.state === "approved") {
        // Update user's account
        // ...
        res.send({ message: "Payment confirmed successfully" });
      } else {
        res.status(400).send({ message: "Payment failed" });
      }
    }
  });
});

app.post("/process-payment", (req, res) => {
  const paymentLink = req.body.paymentLink;
  const paymentId = req.body.paymentId;

  paypal.payment.get(paymentId, (err, payment) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: "Error processing payment" });
    } else {
      if (payment.state === "approved") {
        // Update user's account
        // ...
        res.send({ message: "Payment processed successfully" });
      } else {
        res.status(400).send({ message: "Payment failed" });
      }
    }
  });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Sever is listening on port - " + process.env.PORT);
});
