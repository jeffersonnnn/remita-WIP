---
title: Lending Support Services
subtitle: Expand your loan portfolio as well as your lendable ecosystem and ensure guaranteed repayments with near zero default rates. 
date: 2018-12-04 07:00:00
featuredImage: '../images/lending.png'
---
# Lending Support Service

The Lending Support Service offers banks, loan issuers/providers a data intelligence platform that mitigates the risk factor involved in granting facility to loan applicants. Remita consists of a salary payment platform
hosting a considerable amount of its customer&#39;s salary information. SystemSpecs shares this data with the loan issuer to enable them determine applicants&#39; eligibility in terms of loan amounts they can realistically repay from their net salaries. The integration will also facilitate repayment of the loans by deducting the loan amounts from applicants&#39; salary accounts when wages are paid.

Documentation

**Overview**

*  Request Salary Payment History : This involves the issuer sending a request to Remita for the applicants&#39; salary payment history. The execution of this method implies that the loan issuers&#39; customers have opted into the service (consent has been obtained).

* Loan Disbursement Notification : The issuer/bank then informs SystemSpecs of loan amounts already granted to the applicant/customer. This notification automatically creates a Direct Debit mandate for the customer

* Stop Loan Collection : This is used to request a STOP on the collection of a repayment amount due.

* Mandate Payment History: This is used to request a payment history on a mandate that has been set up via the loan disbursement endpoint.


**Clone Sample Project**

**Request Salary Payment History**

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
```sh
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
```sh
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


**Loan Disbursement Notification**

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
```sh
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
```sh
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

**Stop Loan Collection**

This API stops recovery for a loan repayment amount due. This could happen if the customer has made payment for the said repayment via another means e.g. cheque or bank transfer or cash.

| **Header** |**Type**  |  **Mandatory(M)/ Optional (O)** | **Description** |
| ----------- | ------------ | ------------ | ------------ |
| Content-Type  |   | M  |  application/json |
| MERCHANT_ID   |   |  M | This is the merchant identifier  |
|API_KEY    |   | M  | This is your token for authentication to Remita  |
|  REQUEST_ID  |   | M  |  This uniquely identifies a request|
|  AUTHORIZATION |   |M   | This is the Api authorization token  |
|**Parameter** |**Type**   | **Mandatory(M)/ Optional (O)** | **Description**  |
| customerId | String  |  M |  A unique reference that identifies a salary earner within REMITA . This customerId would have been sent from Remita to the Bank&#39;s data enrichment service.  |
| authorisationCode | String  | M  | This is a unique code that implies the customer opt in for the service. This is to be provided by the loan provider. AuthorisationCodes are unique and cannot be requested or recycled. Error 13 will be returned in such cases  |
| mandateReference  | String  | M  |A unique reference used to identify each loan repayment created.|

*Sample Request*
```sh
curl --location --request POST 'https://remitademo.net/remita/exapp/api/v1/send/api/loansvc/data/api/v2/payday/stop/loan' \
--header 'Content-Type: application/json' \
--header 'API_KEY: Q1dHREVNTzEyMzR8Q1dHREVNTw==' \
--header 'MERCHANT_ID: 27768931' \
--header 'REQUEST_ID: 1605051547930' \
--header 'AUTHORIZATION: remitaConsumerKey=Q1dHREVNTzEyMzR8Q1dHREVNTw==, remitaConsumerToken=a0c4bc3d625e3ea5437651b81068df394d941a917d30509f30c0fe3e197a63cc0f9408c81e22f52bcec87f52e0acf2edaea90cd5ae3e26affb1796eeeef5d164' \
--data-raw '{ 
	"authorisationCode": "525323", 
	"customerId": "11417210", 
	"mandateReference": "300007782658" 
}'
```
*Sample Response*
```sh
{
"status": “SUCCESS",
"requestId": "223ADDC312342",
"responseId": “223ADDC312342/623ADDC312342",
"responseCode": “00",
"requestDate": “2020-09-06T16:44:32.377Z",
"responseDate": “2020-09 06T16:45:00.0Z",
"responseMsg": “SUCCESS",
"responseData": [{
"authorisationCode": "525323",
"customerId": "11417210",
"mandateReference": "300007782658"
}]
}
```

**Mandate Payment History**

This API returns the payment history on a mandate.

| **Header** |**Type**  |  **Mandatory(M)/ Optional (O)** | **Description** |
| ----------- | ------------ | ------------ | ------------ |
| Content-Type  |   | M  |  application/json |
| MERCHANT_ID   |   |  M | This is the merchant identifier  |
|API_KEY    |   | M  | This is your token for authentication to Remita  |
|  REQUEST_ID  |   | M  |  This uniquely identifies a request|
|  AUTHORIZATION |   |M   | This is the Api authorization token  |
|**Parameter** |**Type**   | **Mandatory(M)/ Optional (O)** | **Description**  |
| customerId | String  |  M |  A unique reference that identifies a salary earner within REMITA . This customerId would have been sent from Remita to the Bank&#39;s data enrichment service.  |
| authorisationCode | String  | M  | This is a unique code that implies the customer opt in for the service. This is to be provided by the loan provider. AuthorisationCodes are unique and cannot be requested or recycled. Error 13 will be returned in such cases  |
| mandateReference  | String  | M  |A unique reference used to identify each loan repayment created.|

*Sample Request*
```sh
curl --location --request POST 'https://login.remita.net/remita/exapp/api/v1/send/api/loansvc/data/api/v2/payday/loan/payment/history' \
--header 'Content-Type: application/json' \
--header 'API_KEY: Q1dHREVNTzEyMzR8Q1dHREVNTw==' \
--header 'MERCHANT_ID: 27768931' \
--header 'REQUEST_ID: 1605055555201' \
--header 'AUTHORIZATION: remitaConsumerKey=, remitaConsumerToken=04246cca81b8c160b0a83d425ca9154642ac4cba7d15007a991b0d463df16260d2cc6c975ea330e60793d8b8df172a37a7437e00651b385b1a607c4946d048fd' \
--data-raw '{
   "authorisationCode":"691594",
   "customerId":"00000758",
   "mandateRef":"230312222627"
}'
```
*Sample Response*
```sh
{
"status": "success",
"hasData": true,
"responseId": "1568972452448/1568972452448",
"responseDate": "20-09-2019 09:40:59+0000",
"requestDate": "20-09-2019 09:40:58+0000",
"responseCode": "00",
"responseMsg": "SUCCESS",
"data": {
"customerId": "00000758",
"firstName": "Stanbic IBTC Pension Managers Ltd",
"lastName": null,
"phoneNumber": null,
"loanMandateReference": "230312222627",
"totalDisbursed": 20000.0,
"outstandingLoanBal": 0.0,
"loanRepaymentRef": null,
"employerName": "GOAL GETTERS NIG. LTD",
"salaryAccount": "0411428063180",
"authorisationCode": "691594",
"salaryBankCode": "ZENITH BANK PLC",
"disbursementAccountBank": "ACCESS BANK PLC",
"collectionStartDate": "25-09-2017 11:49:25+0000",
"dateOfDisbursement": "25-09-2017 11:49:25+0000",
"disbursementAccount": "04410010101",
"status": "NEW",
"lenderDetails": "SHELL",
"repayment": [{
"transactionamount": 21000.0,
"deductiondate": "03-07-2019 16:56:36+0000",
"paymentstatus": "TCLS"
}]
}
}
```

