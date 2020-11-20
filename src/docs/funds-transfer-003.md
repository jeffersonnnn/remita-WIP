---
title: Funds Transfer Bulk
subtitle: Send funds Account-to-Account between Commercial and Micro-Finance Banks
date: 2018-12-02 07:00:00
featuredImage: '../images/fundstransfer.png'
---

  

## Bulk Transfer : This API facilitates funds transfer from one bank account to multiple bank accounts.

  

**How to initiate a Bulk Transfer:**

  

Request- POST

Endpoint - &#39;https://remitademo.net/remita/exapp/api/v1/send/api/rpgsvc/rpg/api/v2/merc/bulk/payment/send&#39;

  

```

{

  

&quot;bulkPaymentInfo&quot;:{

  

&quot;totalAmount&quot;:&quot;{{totalAmount}}&quot;,

  

&quot;batchRef&quot;:&quot;{{batchRef}}&quot;,

  

&quot;debitAccount&quot;:&quot;{{debitAccount}}&quot;,

  

&quot;narration&quot;:&quot;{{narration}}&quot;,

  

&quot;bankCode&quot;:&quot;{{bankCode}}&quot;

  

},

  

&quot;paymentDetails&quot;:[

  

{

  

&quot;transRef&quot;:&quot;{{transRef1}}&quot;,

  

&quot;narration&quot;:&quot;{{narration1}}&quot;,

  

&quot;benficiaryEmail&quot;:&quot;{{benficiaryEmail1}}&quot;,

  

&quot;benficiaryBankCode&quot;:&quot;{{benficiaryBankCode1}}&quot;,

  

&quot;benficiaryAccountNumber&quot;:&quot;{{benficiaryAccountNumber1}}&quot;,

  

&quot;benficiaryName&quot;:&quot;{{benficiaryName1}}&quot;,

  

&quot;amount&quot;:&quot;{{amount1}}&quot;

  

},

  

{

  

&quot;transRef&quot;:&quot;{{transRef2}}&quot;,

  

&quot;narration&quot;:&quot;{{narration2}}&quot;,

  

&quot;benficiaryEmail&quot;:&quot;{{benficiaryEmail2}}&quot;,

  

&quot;benficiaryBankCode&quot;:&quot;{{benficiaryBankCode2}}&quot;,

  

&quot;benficiaryAccountNumber&quot;:&quot;{{benficiaryAccountNumber2}}&quot;,

  

&quot;benficiaryName&quot;:&quot;{{benficiaryName2}}&quot;,

  

&quot;amount&quot;:&quot;{{amount2}}&quot;

  

},

  

{

  

&quot;transRef&quot;:&quot;{{transRef3}}&quot;,

  

&quot;narration&quot;:&quot;{{narration3}}&quot;,

  

&quot;benficiaryEmail&quot;:&quot;{{benficiaryEmail3}}&quot;,

  

&quot;benficiaryBankCode&quot;:&quot;{{benficiaryBankCode3}}&quot;,

  

&quot;benficiaryAccountNumber&quot;:&quot;{{benficiaryAccountNumber3}}&quot;,

  

&quot;benficiaryName&quot;:&quot;{{benficiaryName3}}&quot;,

  

&quot;amount&quot;:&quot;{{amount3}}&quot;

  

}

  

]

  

}

  

Sample response for AutoRemit

  

```

{

  

&quot;status&quot;: &quot;success&quot;,

  

&quot;data&quot;: {

  

&quot;authorizationId&quot;: &quot;140007878873&quot;,

  

&quot;transRef&quot;: &quot;256568&quot;,

  

&quot;transDate&quot;: &quot;2020-10-31 21:51:26&quot;,

  

&quot;paymentDate&quot;: &quot;2020-10-31 21:51:26&quot;,

  

&quot;responseId&quot;: &quot;1604181087297&quot;,

  

&quot;responseCode&quot;: &quot;00&quot;,

  

&quot;responseDescription&quot;: &quot;Account [8909090989] Debited successfully.Credit in progress.&quot;,

  

&quot;rrr&quot;: &quot;140007878873&quot;,

  

&quot;data&quot;: null

  

}

  

}

```

Sample response for Approval Workflow

  

```

{

  

&quot;status&quot;: &quot;success&quot;,

  

&quot;data&quot;: {

  

&quot;authorizationId&quot;: &quot;100009858871&quot;,

  

&quot;transRef&quot;: &quot;789522&quot;,

  

&quot;transDate&quot;: &quot;2020-10-31 21:27:10&quot;,

  

&quot;paymentDate&quot;: &quot;2020-10-31 21:27:10&quot;,

  

&quot;responseId&quot;: &quot;1604181773333&quot;,

  

&quot;responseCode&quot;: &quot;00&quot;,

  

&quot;responseDescription&quot;: &quot;Forwarded to next approval&quot;,

  

&quot;rrr&quot;: &quot;100009858871&quot;,

  

&quot;data&quot;: null

  

}

  

}

```

  

- **Verify Bulk Transfer:** This API essentially retrieves the status of a single or bulk payment request using its transaction reference or bulk transaction reference. Below is a sample request and response.

  

Request- POST

  

Endpoint-

&#39;https://remitademo.net/remita/exapp/api/v1/send/api/rpgsvc/rpg/api/v2/merc/bulk/payment/status&#39;

  

```

{

  

&quot;batchRef&quot;:&quot;{{batchRef}}&quot;

  

}

```

  

Sample Response

  

```

{

  

&quot;status&quot;: &quot;success&quot;,

  

&quot;data&quot;: {

  

&quot;bulkRef&quot;: &quot;256568&quot;,

  

&quot;batchRef&quot;: &quot;256568&quot;,

  

&quot;bulkPaymentStatusInfo&quot;: {

  

&quot;debitAccountToken&quot;: &quot;8909090989&quot;,

  

&quot;statusCode&quot;: &quot;00&quot;,

  

&quot;statusMessage&quot;: &quot;SUCCESS&quot;,

  

&quot;totalAmount&quot;: 14500.0,

  

&quot;feeAmount&quot;: 53.75,

  

&quot;currencyCode&quot;: &quot;NGN&quot;,

  

&quot;responseCode&quot;: &quot;00&quot;,

  

&quot;responseMessage&quot;: &quot;SUCCESS&quot;,

  

&quot;paymentState&quot;: &quot;DEBITED&quot;

  

},

  

&quot;paymentDetails&quot;: [

  

{

  

&quot;transRef&quot;: &quot;789&quot;,

  

&quot;paymentReference&quot;: &quot;140007878873&quot;,

  

&quot;authorizationId&quot;: &quot;140007878873&quot;,

  

&quot;transDate&quot;: &quot;2020-10-31 22:10:58&quot;,

  

&quot;paymentDate&quot;: &quot;2020-10-31 22:10:58&quot;,

  

&quot;statusCode&quot;: &quot;39&quot;,

  

&quot;statusMessage&quot;: &quot;Payment in Progress&quot;,

  

&quot;amount&quot;: 5500.0,

  

&quot;paymentState&quot;: &quot;PENDING\_CREDIT&quot;,

  

&quot;responseCode&quot;: &quot;39&quot;,

  

&quot;responseMessage&quot;: &quot;Payment in Progress&quot;

  

},

  

{

  

&quot;transRef&quot;: &quot;58588&quot;,

  

&quot;paymentReference&quot;: &quot;140007878873&quot;,

  

&quot;authorizationId&quot;: &quot;140007878873&quot;,

  

&quot;transDate&quot;: &quot;2020-10-31 22:10:58&quot;,

  

&quot;paymentDate&quot;: &quot;2020-10-31 22:10:58&quot;,

  

&quot;statusCode&quot;: &quot;39&quot;,

  

&quot;statusMessage&quot;: &quot;Payment in Progress&quot;,

  

&quot;amount&quot;: 6000.0,

  

&quot;paymentState&quot;: &quot;PENDING\_CREDIT&quot;,

  

&quot;responseCode&quot;: &quot;39&quot;,

  

&quot;responseMessage&quot;: &quot;Payment in Progress&quot;

  

},

  

{

  

&quot;transRef&quot;: &quot;1877544&quot;,

  

&quot;paymentReference&quot;: &quot;140007878873&quot;,

  

&quot;authorizationId&quot;: &quot;140007878873&quot;,

  

&quot;transDate&quot;: &quot;2020-10-31 22:10:58&quot;,

  

&quot;paymentDate&quot;: &quot;2020-10-31 22:10:58&quot;,

  

&quot;statusCode&quot;: &quot;39&quot;,

  

&quot;statusMessage&quot;: &quot;Payment in Progress&quot;,

  

&quot;amount&quot;: 3000.0,

  

&quot;paymentState&quot;: &quot;PENDING\_CREDIT&quot;,

  

&quot;responseCode&quot;: &quot;39&quot;,

  

&quot;responseMessage&quot;: &quot;Payment in Progress&quot;

  

}

  

]

  

}

  

}

```