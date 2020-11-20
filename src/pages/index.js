import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import SEO from "../components/seo"

// Images
import DevImage from "../components/images/homepage"
import AcceptPay from "../components/images/cardacceptpay"
import DFS from "../components/images/carddfs"
import Lending from "../components/images/cardlending"
import RDS from "../components/images/cardrds"
import Regulatory from "../components/images/cardregulatory"
import Transfer from "../components/images/cardtransfer"
import DevC from "../components/images/devc"
import Examples from "../components/images/examples"
import Support from "../components/images/support"

// Ovals
import Oval from "../components/images/oval"
import OvalOne from "../components/images/ovalone"
import OvalTwo from "../components/images/ovaltwo"
import OvalThree from "../components/images/ovalthree"
import OvalFour from "../components/images/ovalfour"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="ov">
        <Oval />
      </div>
      <div className="ov-one">
        <OvalOne />
      </div>
      <div className="ov-two">
        <OvalTwo />
      </div>
      <div className="ov-three">
        <OvalThree />
      </div>  
      <div className="ov-four">
        <OvalFour />
      </div>                
      <div className="row">       
        <div className="col-md-6 col-sm-12">
          <h1 className="jumbotext">Build and Integrate your payment products and solutions</h1>
        </div>       
        <div className="col-md-6 d-none d-md-block jumboimg">
          <DevImage />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row my-5">
        <div className="col-md-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <Link className="card-title gridcard-title" to="/accept-payments-overview">Accept Payments</Link>
              <div className="row">
                <Link className="card-text col-10 gridcard-text mt-2" to="/accept-payments-overview">
                  Receive payments via multiple channels including Local and
                  International Debit/Credit Cards, Online Banking, USSD etc.
                </Link>
                <div className="col-2">
                  <div className="gridcard-image">
                  <AcceptPay />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <Link className="card-title gridcard-title" to="/funds-transfer-overview">Funds Transfer</Link>
              <div className="row">
                <Link className="card-text col-10 gridcard-text mt-2" to="/funds-transfer-overview">
                  Send funds Account-to-Account between Commercial and Micro-Finance Banks
                </Link>                
                <div className="col-2">
                    <div className="gridcard-image">
                    <DFS />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <Link className="card-title gridcard-title" to="/reference-data-services-overview">Reference Data Services</Link>
              <div className="row">
                <Link className="card-text col-10 gridcard-text mt-2" to="/reference-data-services-overview">
                  Validate your customer’s identity and associated information in
                  an automated manner.
                </Link>  
                <div className="col-2">
                    <div className="gridcard-image">
                    <Lending />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <Link className="card-title gridcard-title" to="/lending-support-services-overview">Lending Support Services</Link>
              <div className="row">
                <Link className="card-text col-10 gridcard-text mt-2" to="/lending-support-services-overview">
                Expand your loan portfolio as well as your lendable ecosystem and ensure guaranteed repayments with near zero default rates. 
                </Link>
                <div className="col-2">
                    <div className="gridcard-image">
                    <RDS />
                    </div>
                </div>
              </div>
              </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <Link className="card-title gridcard-title" to="/digital-financial-services">Digital Financial Services</Link>
              <div className="row">
                <Link className="card-text col-10 gridcard-text mt-2" to="/dfs">
                  Wide range of financial services accessed and delivered via Remita as well as Partner touch-points. These include Biller services, Wallet services, Cash-outs, etc.
                </Link>
                <div className="col-2">
                    <div className="gridcard-image">
                    <Regulatory />
                    </div>
                </div>
              </div>
              </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card gridcard h-100">
            <div className="card-body">
              <Link className="card-title gridcard-title" to="/regulatory-payments">Regulatory Payments</Link>
              <div className="row">
                <Link className="card-text col-10 gridcard-text mt-2" to="/regulatory-payments">
                  Remit Tax and Pension payments to various Tax Authorities with corresponding schedules delivered to the relevant authorities via a simple API call. 
                </Link>
                <div className="col-2">
                    <div className="gridcard-image">
                    <Transfer />
                    </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sectionthree">
      <div className="col-12 text-center mt-5">
        <h1 className="pt-4 sectionthree-text">We're here to help</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-4">
            <div className="sectionthree-img mx-auto">
              <DevC />
            </div>
            <h4 className="my-4 text-center sectionthree-title">Developer Community</h4>
            <p className="text-center sectionthree-body">Join our dev forums to discuss plugins and third party integration.</p>
          </div>
          <div className="col-md-4 my-4">
            <div className="sectionthree-img mx-auto">
              <Examples />
            </div>
            <h4 className="my-4 text-center sectionthree-title">Examples</h4>
            <p className="text-center sectionthree-body">Explore some sample plugins built by the Remita Team.</p>
          </div>
          <div className="col-md-4 my-4">
          <a href={"mailto:" + "devsupport@remita.net"}>
            <div className="sectionthree-img mx-auto">
                <Support />
              </div>
              <h4 className="my-4 text-center sectionthree-title">Support</h4>            
          </a>
            <div className="text-center sectionthree-body">
              Reach out to us at  {' '}
              <span className="">
                <a href={"mailto:" + "devsupport@remita.net"}>
                  devsupport@remita.net
                </a>
              </span> 
            </div>
          </div> 
        </div>
      </div>
    </div>   
  </Layout>
)

deckDeckGoHighlightElement();

export default IndexPage
