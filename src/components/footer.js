import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer>
    <div className="row">
      <a className="col-md-4 footer-left" href="https://systemspecs.com.ng/" target="_blank" rel="noopener noreferrer">
        © 2020 SystemSpecs Limited
      </a>      
      <div className="col-md-4 ">
          <div className="footer-center_text">
          By using this website, you agree to our {' '}
          <span className="">
            <a className="footer-center_span" href="https://remita.net/legal/policy" target="_blank" rel="noopener noreferrer">
              privacy statement
            </a>
          </span> 
          </div>
      </div>
      <div className="col-md-4 footer-right">
          <div className="row">
              <a className="col-md-3 footer-right" href="https://remita.net" target="_blank" rel="noopener noreferrer">
                Remita
              </a>
              <a className="col-md-3 footer-right" href="https://github.com/RemitaNet" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a className="col-md-3 footer-right" href="https://web.facebook.com/RemitaNet/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a className="col-md-3 footer-right" href="https://twitter.com/RemitaNET" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
          </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer