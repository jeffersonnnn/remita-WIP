import React from 'react'

import AcceptPay from "../components/processed-images/icon-apay";
import DFS from "../components/processed-images/icon-dfs";
import FTransfer from "../components/processed-images/icon-ftransfer";
import LSupport from "../components/processed-images/icon-lsupport";
import RData from "../components/processed-images/icon-rdata";
import RPay from "../components/processed-images/icon-rpay";


const routes = [
  {
    path: "/accept-payments-overview",
    name: "Accept Payments",
    icon: <AcceptPay />,
    subMenu: [
      {
        link: "/accept-payments-overview",
        name: "Overview"
      },
      {
        link: "/accept-payments-inline-and-checkout",
        name: "Inline Checkout"
      },
      {
        link: "/accept-payments-sdks-and-ecommerce-plugins",
        name: "eCommerce Plugins"
      },
      {
        link: "/accept-payments-split-and-recurring-payments",
        name: "Recurring Payments"
      }
    ]
  },
  {
    path: "/funds-transfer-overview",
    name: "Funds Transfer",
    icon: <FTransfer />,
    subMenu: [
      {
        link: "/funds-transfer",
        name: "Overview"
      },
      {
        link: "/funds-transfer-single",
        name: "Single Funds Transfer"
      },
      {
        link: "/funds-transfer-bulk",
        name: "Bulk Funds Transfer"
      },
      {
        link: "/account-enquiry",
        name: "Account Enquiry"
      },
      {
        link: "/libaries-and-sdks",
        name: "Libraries and SDKs"
      }
    ]
  },
  {
    path: "/reference-data-services-overview",
    name: "Reference Data",
    icon: <RData />,
    subMenu: [
      {
        link: "/reference-data-services-overview",
        name: "Overview"
      },
      {
        link: "/reference-data-services-sdks",
        name: "Reference Data SDKs"
      }
    ]
  },
  {
    path: "/lending-support-services-overview",
    name: "Lending Support Services",
    icon:  <LSupport />,
    subMenu: [
      {
        link: "/lending-support-services-overview",
        name: "Overview"
      },
      {
        link: "/lending-support-services-history",
        name: "Salary History"
      },
      {
        link: "/lending-support-services-notification",
        name: "Loans Notification"
      },
      {
        link: "/lending-support-mandate-history",
        name: "Mandate History"
      }
    ]
  },
  {
    path: "/digital-financial-services-biller-api",
    name: "Digital Financial Services",
    icon:  <DFS />,
    subMenu: [
      {
        link: "/digital-financial-services-biller-api",
        name: "Biller API"
      },
      {
        link: "/digital-financial-services-cashout",
        name: "Cashout"
      },
      {
        link: "/digital-financial-services-Wallet-Service",
        name: "Wallet Service"
      },
    ]
  },
  {
    path: "/regulatory-payments",
    name: "Regulatory Payments",
    icon:  <RPay />,
    subMenu: [
      {
        link: "/overview",
        name: "Overview"
      },
      {
        link: "/sample-response",
        name: "Sample Response"
      }
    ]
  }
];

export default routes;