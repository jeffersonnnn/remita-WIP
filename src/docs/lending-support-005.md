---
title: Lending Support Mandate History
subtitle: Expand your loan portfolio as well as your lendable ecosystem and ensure guaranteed repayments with near zero default rates. 
date: 2018-12-04 07:00:00
featuredImage: '../images/lending.png'
---
## Mandate Payment History

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
```
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
```
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

