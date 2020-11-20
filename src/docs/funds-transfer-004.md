---
title: Account Enquiry 
subtitle: Send funds Account-to-Account between Commercial and Micro-Finance Banks
date: 2018-12-02 07:00:00
featuredImage: '../images/fundstransfer.png'
---

## Account Enquiry
This API enables you and your customers validate the account(s) that you intend to credit by returning the corresponding account name(s) on request **.** Below is a sample request and response.

Request- POST

Endpoint- &#39;https://remitademo.net/remita/exapp/api/v1/send/api/rpgsvc/rpg/api/v2/merc/fi/account/lookup&#39;

```
{

    &quot;accountNo&quot;:&quot;{{accountNo}}&quot;,

    &quot;bankCode&quot;:&quot;{{bankCode}}&quot;

}
```

 Sample Response

 ```
 {

&quot;status&quot;: &quot;success&quot;,

&quot;data&quot;: {

&quot;responseId&quot;: &quot;1604182563442&quot;,

&quot;responseCode&quot;: &quot;00&quot;,

&quot;responseDescription&quot;: &quot;SUCCESS&quot;,

&quot;accountName&quot;: &quot;Joe James&quot;,

&quot;accountNo&quot;: &quot;2222222044&quot;,

&quot;bankCode&quot;: &quot;044&quot;,

&quot;phoneNumber&quot;: null,

&quot;email&quot;: null

}
```

}

- **Get Active Bank:** This API provides a list of active banks (Deposit money Banks and Micro-Finance Banks) for your regular inquiry.

Request- POST

Endpoint-
 &#39;https://remitademo.net/remita/exapp/api/v1/send/api/rpgsvc/rpg/api/v2/fi/banks&#39;

Sample Response

```
{

&quot;status&quot;: &quot;success&quot;,

    &quot;data&quot;: {

    &quot;responseId&quot;: &quot;1604182718485&quot;,

    &quot;responseCode&quot;: &quot;00&quot;,

    &quot;responseDescription&quot;: &quot;SUCCESS&quot;,

    &quot;banks&quot;: [

        {

        &quot;bankCode&quot;: &quot;511080016&quot;,

        &quot;bankName&quot;: &quot;ABUJA MICROFINANCE BANKS&quot;,

        &quot;bankAccronym&quot;: &quot;ASO&quot;,

        &quot;type&quot;: &quot;MFB&quot;

        },

        {

        &quot;bankCode&quot;: &quot;511080026&quot;,

        &quot;bankName&quot;: &quot;ABUJA MICROFINANCE BANKS&quot;,

        &quot;bankAccronym&quot;: null,

        &quot;type&quot;: &quot;MFB&quot;

        },

        {

        &quot;bankCode&quot;: &quot;044&quot;,

        &quot;bankName&quot;: &quot;ACCESS BANK PLC&quot;,

        &quot;bankAccronym&quot;: &quot;ACCESSBANK&quot;,

        &quot;type&quot;: &quot;DMB&quot;

        }

    ]

}

}
```