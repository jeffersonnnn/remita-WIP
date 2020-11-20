---
title: Accept Payments Split and Recurring Payments
subtitle: Receive payments via multiple channels including Local and International Debit/Credit Cards, Online Banking, USSD etc.
date: 2018-12-01 07:00:00
featuredImage: '../images/accept.png'
---

## Split Payments

If you need to receive payments for the same service into more than one bank account, this API allows you to securely specify multiple accounts for funds collection

```
curl --location --request POST 'https://remitademo.net/remita/exapp/api/v1/send/api/echannelsvc/merchant/api/paymentinit' \
--header 'Content-Type: application/json' \
--header 'Authorization: remitaConsumerKey=2547916,remitaConsumerToken=8f27439702688e2feb79b4f1effd0fe98f956bd555b3b1f34025dba12d73cdb60fe6770aa453680d7d5235c89d7d90fd52a2d8a8db3e82badd16ebb6d55a60e9' \
--data-raw '{
	"serviceTypeId": "4430731",
	"amount": "10000",
	"orderId": "1604883865026",
	"payerName": "Ogunseye Olanrewaju",
	"payerEmail": "awoedey2k@gmail.com",
	"payerPhone": "2347038496242",
	"description": "Payment for Test",
"lineItems":[{
"lineItemsId":"itemid1","beneficiaryName":"Test Corporation", "beneficiaryAccount":"0360883515","bankCode":"057","beneficiaryAmount":"7000","deductFeeFrom":"1"},	
{
"lineItemsId":"itemid2","beneficiaryName":"Folivi    Joshua",	
"beneficiaryAccount":"4017904612","bankCode":"058","beneficiaryAmount":"3000","deductFeeFrom":"0"
}]
}
'   
```

## Recurring Payments

This API allows you to directly debit funds from your customers&#39; accounts anytime(Direct Debit) or allows you setup an instruction for debits on your customers&#39; accounts based on an agreed frequency (Standing Order). Using the methods exposed by this API, you will be able to credit your account(s) by debiting your customers&#39; bank accounts for products sold and services rendered to a maximum of a certain amount for a specific number of times each calendar month.

## API Keys

You can retrieve your API keys by following the steps below

1. Login to your Remita Dashboard
2. Click on Setup Collections
3. Select option Yes when asked &#39;Will you be implementing an integration for Remita collections?&#39; and click on Proceed.
4. You will be provided with the test keys to start your implementation.
You may also proceed to use the test credentials below and kick start your integrations
```
Public Key: U09MRHw0MDgxOTUzOHw2ZDU4NGRhMmJhNzVlOTRiYmYyZjBlMmM1YzUyNzYwZTM0YzRjNGI4ZTgyNzJjY2NjYTBkMDM0ZDUyYjZhZWI2ODJlZTZjMjU0MDNiODBlMzI4YWNmZGY2OWQ2YjhiYzM2N2RhMmI1YWEwYTlmMTFiYWI2OWQxNTc5N2YyZDk4NA==

Secret Key: 4ac2427b53b5bac53df667e5605d2a4234a994f68bc63479522567c6247627f0b8e0217b0d3378d49f216bcd4f3a46bf0056627358df61f929450e3c7d48bef1

Merchant Id: 2547916

API Key: 1946

Service Type Id: 4430731
```
**Test Payment Details**

When integrating with Remita, we understand you need to test your implementations in a test environment before going live. We have provided you with a list of test credentials to use for test purposes.

**Test Card**

***Successful Payment***

CARD: 5178 6810 0000 0002

Expire Date : 05/30

CCV: 000

OTP: 123456

***Failed Payment***

CARD: 5178 6810 0000 0002

Expire Date : 05/30

CCV: 000

OTP: 000000

***Test Bank Account***

Bank Name:

Account Number:

***Test Wallet***

Wallet Provider:

Username:

Password

***Test Internet Banking***

Bank Name:

Username:

Password

***Test Remita Account***

Email:

Password:

***Test Phone Number***

Phone number:

**Dispute Resolution**

**Refunds**

**Verify Payments**

You can look up the state of your transactions using the Status Enquiry APIs. These methods will return responses that confirm the status of your transactions on the platform for incoming payments from your customers.
