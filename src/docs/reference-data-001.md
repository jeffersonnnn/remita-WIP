---
title: Reference Data Services Overview
subtitle: Validate your customer’s identity and associated information in an automated manner.
date: 2018-12-03 07:00:00
featuredImage: '../images/rds.png'
---

## Overview

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