---
title: Reference Data Services
subtitle: Validate your customer’s identity and associated information in an automated manner.
date: 2018-12-03 07:00:00
featuredImage: '../images/rds.png'
---
**Overview**

Integrating to Remita for Reference data services enables integrators to request for configured customer data on Remita through their platform. This provides access to the vast array of data; viz National Identity Management Commission (NIMC), Bank Verification Number (BVN) and more to come.

**Reference Data services include:**

* Available data services

* Configured data services

* Data service.


**1. AVAILABLE DATA SERVICES**
This returns a list of available reference data services.

**REQUEST - GET | /api/ext/availablereferencedata**

**X-API-PUBLIC-KEY:**

```
REFOQUNPT1B8NDEyNjczNTN8OTJjZWVlNmI4MzYwMzdmNmYzNzRmZDExMGQ2YzZkNzRiNzQ0ZTE2ZTU0OTdkNjlkNzA1YTc3NWE0N2ViZDIxZjBmYTgzMGRmNTQzYjljMmQyNmU4MGE0MDQ0ZjE5YmE4MjU4YzU0MGQ4YTFhNDZmZDMwMzZiMTllNTk5NmJjMTM=

```

**RESPONSE:**

```
{
  "status": "success",
  "responseCode": "00",
  "responseMsg": "SUCCESS",
  "data": [
    {
      "refId": "nimcDetailsByNin",
      "description": "NIMC Details by NIN"
    },
    {
      "refId": "customerDetailsByBvn",
      "description": "Customer Details by BVN"
    }
  ]
}

```

**2. CONFIGURED DATA SERVICES**
This returns a list of configured data services for a corresponding subscriber based on the selected refId.

**REQUEST - GET |  /api/ext/reference-data-configs/< refId >**

**X-API-PUBLIC-KEY:**

```
REFOQUNPT1B8NDEyNjczNTN8OTJjZWVlNmI4MzYwMzdmNmYzNzRmZDExMGQ2YzZkNzRiNzQ0ZTE2ZTU0OTdkNjlkNzA1YTc3NWE0N2ViZDIxZjBmYTgzMGRmNTQzYjljMmQyNmU4MGE0MDQ0ZjE5YmE4MjU4YzU0MGQ4YTFhNDZmZDMwMzZiMTllNTk5NmJjMTM=

```

**RESPONSE:**

```
{
  "status": "success",
  "responseCode": "00",
  "responseMsg": "SUCCESS",
  "data": {
    "customFields": [
      {
        "description": "Provide NIN",
        "value": "",
        "key": "nin",
        "required": true,
        "keyType": "ALL",
        "valueOptions": []
      }
    ],
    "refId": "nimcDetailsByNin"
  }
}

```


**3. DATA SERVICES**
This returns required data for a corresponding subscriber based on the selected refId and customFields.

**REQUEST - POST |  /api/ext/referencedata**

**X-API-PUBLIC-KEY:**

```
REFOQUNPT1B8NDEyNjczNTN8OTJjZWVlNmI4MzYwMzdmNmYzNzRmZDExMGQ2YzZkNzRiNzQ0ZTE2ZTU0OTdkNjlkNzA1YTc3NWE0N2ViZDIxZjBmYTgzMGRmNTQzYjljMmQyNmU4MGE0MDQ0ZjE5YmE4MjU4YzU0MGQ4YTFhNDZmZDMwMzZiMTllNTk5NmJjMTM=

```
**REQUEST: **
```
{
  "refId": "nimcDetailsByNin",
  "authorisationCode": "15885661",
  "authorisationChannel": "USSD",
  "customFields": [
    {
      "value": "123456789",
      "key": "nin"
    }
  ]
}

```
**RESPONSE:**

```
{
  "status": "success",
  "responseCode": "00",
  "responseMsg": "SUCCESS",
  "data": {
    "firstName": "JOHN",
    "mobileNumber": "08022222222",
    "lastName": "DOE",
    "nin": null,
    "bvn": null
  }
}

```

**Clone Sample Project**

**Mobile SDKs**

Our Reference Data Solution is also accessible for your mobile Apps. Click below for Technical Documentation

[![Android Image](https://www.remita.net/developers/assets/minimal/images/plugins/Android_Sdk_Img.png)](https://github.com/RemitaNet/remita-refdata-android-sdk) [![IOS Image](https://www.remita.net/developers/assets/minimal/images/plugins/ios_sdk_Img.png)](https://github.com/RemitaNet/remita-refdata-ios-sdk)


You may also proceed to use the test credentials below and kick start your integrations
```
Public Key: REFOQUNPT1B8NDEyNjczNTN8OTJjZWVlNmI4MzYwMzdmNmYzNzRmZDExMGQ2YzZkNzRiNzQ0ZTE2ZTU0OTdkNjlkNzA1YTc3NWE0N2ViZDIxZjBmYTgzMGRmNTQzYjljMmQyNmU4MGE0MDQ0ZjE5YmE4MjU4YzU0MGQ4YTFhNDZmZDMwMzZiMTllNTk5NmJjMTM=

Secret Key: 0d15226009484dac11384bceab1ad4f90f2fc2b0bdb1453e9dbbe3e7c429f60d9d645e4e33d942fa76c587927c605a11b9edc528c8155bd0b762166d15534992
```

| NAME | Mandatory(M)/Optional(O) | DESCRIPTION |
| --- |  --- | --- |
| refId | M | Reference Id e.g. pensionDetailsByRsaPin |
| authorisationCode | M | Merchant Id e.g. 1509371854739 |
| secretKey  | M | Your secret keys are located in your profile at www.remita.net |
| authorisationChannel | M | USSD, BANK BRANCH, CARD etc |
| customFields | M  | Key/Value pair e.g. rsaPin = PEN100945634112 and pfa = FCMB |
| signature | M  | signature = SHA512 of refId + authorisationCode + secretKey; |

