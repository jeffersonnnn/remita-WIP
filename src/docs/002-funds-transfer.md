---
title: Funds Transfer
subtitle: Send funds Account-to-Account between Commercial and Micro-Finance Banks
date: 2018-12-02 07:00:00
featuredImage: '../images/fundstransfer.png'
---

The Remita Interbank Transfer Service (RITS) is an account based, online real time funds transfer service that provides instant payments to beneficiaries in commercial banks and selected micro finance banks (MFBs). RITS enables Aggregator to transfer funds securely from their designated account on Remita to destination accounts instantly and with ease.

**OVERVIEW**

The Remita Interbank Transfer Service (RITS) is an account based, online real time funds transfer service that provides instant payments to beneficiaries in commercial banks and selected micro finance banks (MFBs). RITS enables Aggregator to transfer funds securely from their designated account on Remita to destination accounts instantly and with ease.

There are two kinds of response. These includes;

1. AutoRemit: This is where a single amount is debited to credit single/multiple account(s) across several bank(s).
2. Approval Workflow: This is where payment details are routed to the inbox of the next approver.ie the approver logs into the corporate&#39;s Remita profile to approve the transactions.


Click link for full documentation - [https://documenter.getpostman.com/view/11423836/T17CDA3q](https://documenter.getpostman.com/view/11423836/T17CDA3q)

- **Single Transfer** : This API facilitates funds transfer from one bank account to another.

**How to initiate a Single Transfer:**

Request- POST
 Endpoint -
 &#39;https://remitademo.net/remita/exapp/api/v1/send/api/rpgsvc/rpg/api/v2/merc/payment/singlePayment.json&#39;

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

Sample response for AutoRemit

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

Sample response for Approval Workflow.

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

- **Verify Single Transfer** : This API essentially retrieves the status of a payment request using its transaction reference. Below is a sample request and response.

Request- POST
 Endpoint-

&#39;https://remitademo.net/remita/exapp/api/v1/send/api/rpgsvc/rpg/api/v2/merc/payment/status&#39;
 {

&quot;transRef&quot;:&quot;{{transRef}}&quot;

}

Sample Response

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

- **Bulk Transfer** : This API facilitates funds transfer from one bank account to multiple bank accounts.

**How to initiate a Bulk Transfer:**

Request- POST
 Endpoint - &#39;https://remitademo.net/remita/exapp/api/v1/send/api/rpgsvc/rpg/api/v2/merc/bulk/payment/send&#39;

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

Sample response for Approval Workflow
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

- **Verify Bulk Transfer:** This API essentially retrieves the status of a single or bulk payment request using its transaction reference or bulk transaction reference. Below is a sample request and response.

 Request- POST

Endpoint-
 &#39;https://remitademo.net/remita/exapp/api/v1/send/api/rpgsvc/rpg/api/v2/merc/bulk/payment/status&#39;

 {

&quot;batchRef&quot;:&quot;{{batchRef}}&quot;

}

 Sample Response

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

- **Account Enquiry:** This API enables you and your customers validate the account(s) that you intend to credit by returning the corresponding account name(s) on request **.** Below is a sample request and response.

Request- POST

Endpoint- &#39;https://remitademo.net/remita/exapp/api/v1/send/api/rpgsvc/rpg/api/v2/merc/fi/account/lookup&#39;

{

&quot;accountNo&quot;:&quot;{{accountNo}}&quot;,

&quot;bankCode&quot;:&quot;{{bankCode}}&quot;

}

 Sample Response
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

}

- **Get Active Bank:** This API provides a list of active banks (Deposit money Banks and Micro-Finance Banks) for your regular inquiry.

Request- POST

Endpoint-
 &#39;https://remitademo.net/remita/exapp/api/v1/send/api/rpgsvc/rpg/api/v2/fi/banks&#39;

Sample Response

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

**LIBARIES AND SDKS**

- [https://github.com/RemitaNet/rits-sdk-java](https://github.com/RemitaNet/rits-sdk-java)
- [https://github.com/RemitaNet/rits-sdk-php](https://github.com/RemitaNet/rits-sdk-php)
- [https://github.com/RemitaNet/rits-sdk-python](https://github.com/RemitaNet/rits-sdk-python)
- [https://github.com/RemitaNet/rits-sdk-dotnet](https://github.com/RemitaNet/rits-sdk-dotnet)

**REVERSAL**