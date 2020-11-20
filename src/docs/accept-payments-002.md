---
title: Accept Payments Inline and Checkout
subtitle: Receive payments via multiple channels including Local and International Debit/Credit Cards, Online Banking, USSD etc.
date: 2018-12-01 07:00:00
featuredImage: '../images/accept.png'
---

## Remita Inline Checkout (Inline and Redirect)

The Remita Inline Checkout is our iframe checkout option which displays a secure payment form as an overlay on your checkout page. Remita Inline Checkout allows you receive payments from your website quickly and securely, by embedding a simple Inline JavaScript. This makes it ideal for use with shopping cart applications or your own custom checkout process.


```
<form>
    <script src="https://remitademo.net/payment/v1/remita-pay-inline.bundle.js"></script>
    <button type="button" onclick="makePayment()"> Pay </button> 
</form>
<script>
    function makePayment() {
        var paymentEngine = RmPaymentEngine.init({
            key: 'public key',
            customerId: "140700251",
            firstName: "Lisa",
            lastName: "Spark",
            email: "demo@remita.net",
            amount: 19999,
            onSuccess: function (response) {
                console.log('callback Successful Response', response);
            },
            onError: function (response) {
                console.log('callback Error Response', response);
            },
            onClose: function () {
                console.log("closed");
            }
        });
    
        paymentEngine.showPaymentWidget();
    }
</script>
```

Clone sample project [here](https://github.com/RemitaNet/remita-inline-sample)

### Remita Redirect

This method requires that submit an http post request to our paymentinit endpoint to generate a Remita Retrieval Reference(RRR), then calling our finalize endpoint to process the payment. This then redirects your customer to Remita payment page which loads to the payment modal to complete the transaction.

*Payment Initiation*
```
curl --location --request POST 'https://remitademo.net/remita/exapp/api/v1/send/api/echannelsvc/merchant/api/paymentinit' \
--header 'Content-Type: application/json' \
--header 'Authorization: remitaConsumerKey=2547916,remitaConsumerToken=893d92511299d7c7a7a74775a8a46f8a3f4f3b1c127aca40dcaa42234c03bddf9e491e189fe646da0748ba3e792e77b6a21031908fd3e04205525d59910fd8d1' \
--data-raw '{ 
	"serviceTypeId": "4430731",
	"amount": "20000",
	"orderId": "1604883992419",
	"payerName": "Michael Alozie",
	"payerEmail": "alozie@systemspecs.com.ng",
	"payerPhone": "09062067384",
	"description": "Payment for Donation 3"
}'
```
***Finalize***
```
<html>
<body>
<formaction="https://remitademo.net/remita/ecomm/finalize.reg"name="SubmitRemitaForm"method="POST">
<input name="merchantId" value="1509328648353" type="hidden">
<input name="hash" value="ABCED12D3E1476DEFA12"type="hidden">
<input name="rrr" value="Y11095959" type="hidden">
<input name="responseurl" value="http://www.yourwebsite.com/response.php"type="hidden">
<input type ="submit" name="submit_btn" value="Pay Via Remita">
</form>
</body>
</html>
```