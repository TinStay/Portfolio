import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="light-gray-container pb-footer pt-4 px-0">
        <div className="w-lg-90-centered ">
          <h1 className="heading-contact text-center">Get in touch </h1>
          <div className="contact-container py-4 px-3">
            <div className="row">
              <div className="col-md-5 mx-auto ">
                <h3 className="heading-smaller">Contact information</h3>
                <div className="purple-gradient-border-bottom"></div>
                <div className="contact-info-details">
                  <div className="contact-info-row diplay-flex">
                    <span className="contact-info-icon">
                      <i className="fa fa-envelope "></i>
                    </span>
                    <p className="center-vertically">marti.staykov@gmail.com</p>
                  </div>

                  <div className="contact-info-row diplay-flex">
                    <span className="contact-info-icon">
                      <i className="fa fa-phone "></i>
                    </span>
                    <p className="center-vertically">+359 88706 6622</p>
                  </div>

                  <div className="contact-info-row diplay-flex">
                    <div className="contact-info-icon">
                      <i className="fa fa-home  "></i>
                    </div>

                    <p className=" center-vertically">
                      Eindhoven, The Netherlands
                    </p>
                  </div>

                  <div className="contact-info-row diplay-flex">
                    <span className="contact-info-icon">
                      <i className="fa fa-globe "></i>
                    </span>

                    <a
                      className="blue-font center-vertically"
                      href="https://tinstay.herokuapp.com/"
                      target="_blank"
                    >
                      https://tinstay.herokuapp.com
                    </a>
                  </div>

                  <div className="contact-info-row diplay-flex">
                    <div className="contact-info-icon">
                      <i className="fa fa-github  "></i>
                    </div>
                    <a
                      className="blue-font  center-vertically"
                      href="https://github.com/TinStay"
                      target="_blank"
                    >
                      https://github.com/TinStay
                    </a>
                  </div>
                  <div className="contact-smp-icons">
                    <a href="#" target="_blank">
                      <img
                        className="contact-icon"
                        src="./Media/linkedInIconColor.png"
                        alt="github"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/martin.staykov.1/about_work_and_education"
                      target="_blank"
                    >
                      <img
                        className="contact-icon"
                        src="./Media/fbIconColor.png"
                        alt="facebook"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/martino_stay/"
                      target="_blank"
                    >
                      <img
                        className="contact-icon"
                        src="./Media/instaIconColor.png"
                        alt="twitter"
                      />
                    </a>
                    <a href="https://twitter.com/MindFuckerHD" target="_blank">
                      <img
                        className="contact-icon"
                        src="./Media/twitterIconColor.png"
                        alt="whatsappBlack"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-5 mx-auto ">
                <h3 className="heading-smaller">Send me a message</h3>
                <div className="purple-gradient-border-bottom"></div>
                <form
                  onsubmit="return validateContactForm()"
                  id="contact-form"
                  className="contact-form"
                  action=""
                >
                  <div className="contact-form-field">
                    <label className="contact-form-label">Name *</label>
                    <input
                      className="contact-form-input"
                      name="name-input"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="contact-form-field">
                    <label className="contact-form-label">Email *</label>
                    <input
                      className="contact-form-input"
                      name="email-input"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="contact-form-field">
                    <label className="contact-form-label">Message *</label>
                    <textarea
                      className="contact-form-input"
                      name="message-input"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <div className="">
                    <button type="submit" className="btn-submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
