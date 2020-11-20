---
title: Funds Transfer Single 
subtitle: Send funds Account-to-Account between Commercial and Micro-Finance Banks
date: 2018-12-02 07:00:00
featuredImage: '../images/fundstransfer.png'
---

## Single Transfer : This API facilitates funds transfer from one bank account to another.



**How to initiate a Single Transfer:**

Request- POST
 Endpoint -
 &#39;https://remitademo.net/remita/exapp/api/v1/send/api/rpgsvc/rpg/api/v2/merc/payment/singlePayment.json&#39;

```
{

    &quot;toBank&quot;: &quot;{{toBank}}&quot;,

    &quot;creditAccount&quot;: &quot;{{creditAccount}}&quot;,

    &quot;narration&quot;: &quot;{{narration}}&quot;,

    &quot;amount&quot;: &quot;{{amount}}&quot;,

    &quot;transRef&quot;: &quot;{{transRef}}&quot;,

    &quot;fromBank&quot;: &quot;{{fromBank}}&quot;,

    &quot;debitAccount&quot;: &quot;{{debitAccount}}&quot;,

    &quot;beneficiaryEmail&quot;: &quot;{{beneficiaryEmail}}&quot;

}
```

Sample response for AutoRemit
```
{

    &quot;status&quot;: &quot;success&quot;,

        &quot;data&quot;: {

        &quot;authorizationId&quot;: &quot;160007878869&quot;,

        &quot;transRef&quot;: &quot;541803&quot;,

        &quot;transDate&quot;: &quot;2020-10-31 21:20:40&quot;,

        &quot;paymentDate&quot;: &quot;2020-10-31 21:20:40&quot;,

        &quot;responseId&quot;: &quot;1604179241274&quot;,

        &quot;responseCode&quot;: &quot;00&quot;,

        &quot;responseDescription&quot;: &quot;SUCCESS&quot;,

        &quot;rrr&quot;: &quot;160007878869&quot;,

        &quot;data&quot;: null

    }


}
```

Sample response for Approval Workflow.
```
{

    &quot;status&quot;: &quot;success&quot;,

        &quot;data&quot;: {

        &quot;authorizationId&quot;: &quot;100007878871&quot;,

        &quot;transRef&quot;: &quot;510199&quot;,

        &quot;transDate&quot;: &quot;2020-10-31 21:27:10&quot;,

        &quot;paymentDate&quot;: &quot;2020-10-31 21:27:10&quot;,

        &quot;responseId&quot;: &quot;1604179630649&quot;,

        &quot;responseCode&quot;: &quot;00&quot;,

        &quot;responseDescription&quot;: &quot;Forwarded to next approval&quot;,

        &quot;rrr&quot;: &quot;100007878871&quot;,

        &quot;data&quot;: null

    }

}
```

- **Verify Single Transfer** : This API essentially retrieves the status of a payment request using its transaction reference. Below is a sample request and response.

Request- POST
 Endpoint-

&#39;https://remitademo.net/remita/exapp/api/v1/send/api/rpgsvc/rpg/api/v2/merc/payment/status&#39;
```
 {

    &quot;transRef&quot;:&quot;{{transRef}}&quot;

}
```
Sample Response
```
{

&quot;status&quot;: &quot;success&quot;,

    &quot;data&quot;: {

        &quot;authorizationId&quot;: &quot;160007878869&quot;,

        &quot;transRef&quot;: &quot;541803&quot;,

        &quot;debitAccount&quot;: &quot;8909090989&quot;,

        &quot;toBank&quot;: &quot;044&quot;,

        &quot;creditAccount&quot;: &quot;4589999044&quot;,

        &quot;narration&quot;: &quot;Regular Payment&quot;,

        &quot;amount&quot;: &quot;5000&quot;,

        &quot;feeAmount&quot;: &quot;53.75&quot;,

        &quot;paymentStatus&quot;: &quot;SUCCESS&quot;,

        &quot;settlementDate&quot;: &quot;2020-10-31 21:10:41&quot;,

        &quot;paymentDate&quot;: &quot;2020-10-31 21:10:41&quot;,

        &quot;currencyCode&quot;: null,

        &quot;paymentStatusCode&quot;: &quot;00&quot;,

        &quot;paymentState&quot;: &quot;DEBITED&quot;,

        &quot;responseCode&quot;: &quot;00&quot;,

        &quot;responseDescription&quot;: &quot;SUCCESS&quot;,

        &quot;reversalRef&quot;: null

    }

}
```