---
title: Lending Support Services Stop Loan
subtitle: Expand your loan portfolio as well as your lendable ecosystem and ensure guaranteed repayments with near zero default rates. 
date: 2018-12-04 07:00:00
featuredImage: '../images/lending.png'
---
## Stop Loan Collection

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
```
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
```
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