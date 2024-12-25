const express = require("express");
const Razorpay = require("razorpay");
const bodyParser = require("body-parser");
const crypto = require("crypto");

const app = express();
app.use(bodyParser.json());

// Razorpay instance
const razorpay = new Razorpay({
    key_id: "rzp_test_lhxBWfwsy1FWVq",
    key_secret: "SWwgDjiolX60Byly2ipdBQNK",
});

// Payment Order API
app.post("/create-order", async (req, res) => {
    const { amount, currency } = req.body;

    try {
        const order = await razorpay.orders.create({
            amount: amount * 100, // Amount in paise
            currency: currency,
            receipt: "order_rcptid_11",
        });
        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Payment Verification API
app.post("/verify-payment", (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const generated_signature = crypto
        .createHmac("sha256", "YOUR_RAZORPAY_API_SECRET")
        .update(razorpay_order_id + "|" + razorpay_payment_id)
        .digest("hex");

    if (generated_signature === razorpay_signature) {
        res.json({ status: "success" });
    } else {
        res.status(400).json({ status: "failure" });
    }
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
