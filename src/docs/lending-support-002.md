---
title: Lending Support Services history
subtitle: Expand your loan portfolio as well as your lendable ecosystem and ensure guaranteed repayments with near zero default rates. 
date: 2018-12-04 07:00:00
featuredImage: '../images/lending.png'
---

## Request Salary Payment History

This API returns the electronic payment history data. 

| **Header** |**Type**  |  **Mandatory(M)/ Optional (O)** | **Description** |
| ----------- | ------------ | ------------ | ------------ |
| Content-Type  |   | M  |  application/json |
| MERCHANT_ID   |   |  M | This is the merchant identifier  |
|API_KEY    |   | M  | This is your token for authentication to Remita  |
|  REQUEST_ID  |   | M  |  This uniquely identifies a request|
|  AUTHORIZATION |   |M   | This is the Api authorization token  |
|**Parameter** |**Type**   | **Mandatory(M)/ Optional (O)** | **Description**  |
| authorisationCode | String  | M  | This is a unique code that implies the customer opt in for the service. This is to be provided by the loan provider. AuthorisationCodes are unique and cannot be requested or recycled. Error 13 will be returned in such cases  |
| authorisationChannel  | String  |  M | How the authorization (Opt-In) was received from the customer.Options are USSD, WEB, MOBILE, BRANCH, PHONE, OTHER|
| phoneNumber  | String  | M  |The phone number the customer was authorized with in the case of USSD authorization|

*Sample Initiate Request*
```
curl --location --request POST 'https://remitademo.net/remita/exapp/api/v1/send/api/loansvc/data/api/v2/payday/salary/history/ph' \
--header 'Content-Type: application/json' \
--header 'Api_Key: Q1dHREVNTzEyMzR8Q1dHREVNTw==' \
--header 'Merchant_id: 27768931' \
--header 'Request_id: 1605050861006' \
--header 'Authorization: remitaConsumerKey=Q1dHREVNTzEyMzR8Q1dHREVNTw==, remitaConsumerToken=974dcf7786a3f0b8dac1bd0bcca97ff1e9600593b7f59b1daa0d1c229b28e1446ac66e268e2a7657bb5af93f44a1bbdc7e1fcd23dd8e59bbd1aab9f397f1a599' \
--data-raw '{
   "authorisationCode":"671158",
   "phoneNumber":"07038684773",
   "authorisationChannel":"USSD"
}'
```
*Sample Response*
```
{
    "status": "success",
    "hasData": true,
    "responseId": "1605050861006/1605050861006",
    "responseDate": "10-11-2020 23:27:45+0000",
    "requestDate": "10-11-2020 23:27:45+0000",
    "responseCode": "00",
    "responseMsg": "SUCCESS",
    "data": {
        "customerId": "456783897",
        "accountNumber": "1234657893",
        "bankCode": "214",
        "bvn": null,
        "companyName": "Remit Test 126",
        "customerName": "Samuel Efe",
        "category": null,
        "firstPaymentDate": "27-06-2019 00:00:00+0000",
        "salaryCount": "6",
        "salaryPaymentDetails": [
            {
                "paymentDate": "25-11-2019 13:33:46+0000",
                "amount": "50000",
                "accountNumber": "1234657893",
                "bankCode": "214"
            },
            {
                "paymentDate": "25-10-2019 13:33:46+0000",
                "amount": "50000",
                "accountNumber": "1234657893",
                "bankCode": "214"
            },
            {
                "paymentDate": "25-09-2019 13:33:46+0000",
                "amount": "50000",
                "accountNumber": "1234657893",
                "bankCode": "214"
            },
            {
                "paymentDate": "25-08-2019 13:33:46+0000",
                "amount": "50000",
                "accountNumber": "1234657893",
                "bankCode": "214"
            }
```