---
title: Lending Support Services Notification
subtitle: Expand your loan portfolio as well as your lendable ecosystem and ensure guaranteed repayments with near zero default rates. 
date: 2018-12-04 07:00:00
featuredImage: '../images/lending.png'
---
## Loan Disbursement Notification

This API informs SystemSpecs of loan granted to customer. Automatically creates a Direct Debit Mandate.

| **Header** |**Type**  |  **Mandatory(M)/ Optional (O)** | **Description** |
| ----------- | ------------ | ------------ | ------------ |
| Content-Type  |   | M  |  application/json |
| MERCHANT_ID   |   |  M | This is the merchant identifier  |
|API_KEY    |   | M  | This is your token for authentication to Remita  |
|  REQUEST_ID  |   | M  |  This uniquely identifies a request|
|  AUTHORIZATION |   |M   | This is the Api authorization token  |


|**Parameter** |**Type**   | **Mandatory(M)/ Optional (O)** | **Description**  |
| customerId | String  |  M |  A unique reference that identifies a salary earner within REMITA . This customerId would have been sent from Remita to the Bank&#39;s data enrichment service.  |
|authorisationCode  | String  | M  |This is a unique code that implies the customer opt in for the service. This is to be provided by the Bank. This is the same authorisation code that was sent to REMITA in LA01 |
| authorisationChannel |String   | M  |   How the authorization (Opt-In) was received from the customer.Options are USSD, WEB, MOBILE, BRANCH, PHONE, OTHER |
|phoneNumber  | String  | M  | The phone number tied to the account the loan was disbursed into.|
|accountNumber  | String  | M  | The account number the loan was disbursed into.  |
| currency | String  | M  |   Currency in which loan was disbursed |
| loanAmount |  Double | M  | Amount customer was given as loan  |
|collectionAmount  |Double   | M  | Amount to be collected by REMITA the next time Salary is to be paid.|
|dateOfDisbursement  | String  | M  | Date when the Loan was disbursed to the Customer|
|dateOfCollection  | String  | M  |  Tentative date which REMITA should start the process of collection  |
| totalCollectionAmount | Double  | M  |  This is the total amount REMITA is collecting from the customer for loan disbursed.|
|numberOfRepayments  | String  |M|This is how many times the collectionAmount should be deducted for |


*Sample Notification Request*
```
curl --location --request POST 'https://remitademo.net/remita/exapp/api/v1/send/api/loansvc/data/api/v2/payday/post/loan' \
--header 'Content-Type: application/json' \
--header 'API_KEY: Q1dHREVNTzEyMzR8Q1dHREVNTw==' \
--header 'MERCHANT_ID: 27768931' \
--header 'REQUEST_ID: 1605051210304' \
--header 'AUTHORIZATION: remitaConsumerKey=Q1dHREVNTzEyMzR8Q1dHREVNTw==, remitaConsumerToken=47c66c9fadca370566d41b0f0609d6c755643e60814cf8a91907d09d618f68efc24977919f6bc1d5ff90d1063dbb95bd25142641eb660179a1fe96c347a6a0d9' \
--data-raw '{
  "customerId": "456783897",
  "authorisationCode": "334523457",
  "authorisationChannel": "USSD",
  "phoneNumber": "07038684773",
  "accountNumber": "1234657893",
  "currency": "NGN",
  "loanAmount": 2000,
  "collectionAmount": 2100,
  "dateOfDisbursement": "11-06-2020 10:16:18+0000",
  "dateOfCollection": "11-06-2020 10:16:18+0000",
  "totalCollectionAmount": 2100,
  "numberOfRepayments": 1,
  "bankCode": "011"
}'
```
*Sample Response*
```
{
    "status": "success",
    "hasData": true,
    "responseId": "1605051210304/1605051210304",
    "responseDate": "10-11-2020 23:33:31+0000",
    "requestDate": "10-11-2020 23:33:31+0000",
    "responseCode": "00",
    "responseMsg": "SUCCESS",
    "data": {
        "authorisationCode": "334523457",
        "accountNumber": "1234657893",
        "bankCode": "011",
        "amount": "2000",
        "customerId": "456783897",
        "status": null,
        "mandateReference": "260007833608"
    }
}
```