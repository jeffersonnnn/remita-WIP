---
title: Reference Data Services SDKs
subtitle: Validate your customer’s identity and associated information in an automated manner.
date: 2018-12-03 07:00:00
featuredImage: '../images/rds.png'
---

## Mobile SDKs

Our Reference Data Solution is also accessible for your mobile Apps. Click below for Technical Doclearcumentation

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

