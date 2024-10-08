import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { MdEmail, MdSchool } from "react-icons/md"
import { AiFillPhone } from "react-icons/ai"
import { ImLocation2 } from "react-icons/im"
import { FaGithub, FaFacebookSquare, FaRegIdCard } from "react-icons/fa"
import { GrLinkedin } from "react-icons/gr"

import Slide from "react-reveal/Slide"
import Fade from "react-reveal/Fade"

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
                <h3 className="heading-smaller">Personal information</h3>
                <div className="purple-gradient-border-bottom mb-3"></div>

                <div className="contact-info-details">
                  <Slide bottom cascade>
                    <div class="personal-info mb-5">
                    <div className="contact-info-row d-flex mb-4  ">
                        <div>
                          <FaRegIdCard
                            className="contact-info-icon"
                            style={{ fill: "url(#purple-gradient)" }}
                          />
                        </div>
                        <p className="center-vertically">Martin Staykov</p>
                      </div>
                      <div className="contact-info-row d-flex mb-4  ">
                        <svg width="0" height="0">
                          <linearGradient
                            id="purple-gradient"
                            x1="100%"
                            y1="100%"
                            x2="0%"
                            y2="0%"
                          >
                            <stop stopColor="#ab05f2" offset="0%" />
                            <stop stopColor="#5a13f2" offset="100%" />
                          </linearGradient>
                        </svg>
                        <div className="white-font">
                          <MdEmail
                            className="contact-info-icon white-font"
                            style={{ fill: "url(#purple-gradient)" }}
                          />
                        </div>
                        <p className="center-vertically">
                          marti.staykov@gmail.com
                        </p>
                      </div>

                      <div className="contact-info-row d-flex mb-4  ">
                        <div>
                          <AiFillPhone
                            className="contact-info-icon"
                            style={{ fill: "url(#purple-gradient)" }}
                          />
                        </div>
                        <p className="center-vertically">+359 88706 6622</p>
                      </div>

                      <div className="contact-info-row d-flex mb-4  ">
                        <div>
                          <ImLocation2
                            className="contact-info-icon"
                            style={{ fill: "url(#purple-gradient)" }}
                          />
                        </div>
                        <p className=" center-vertically">
                          Eindhoven, The Netherlands
                        </p>
                      </div>

                      <div className="contact-info-row d-flex mb-4  ">
                        <div>
                          <MdSchool
                            className="contact-info-icon"
                            style={{ fill: "url(#purple-gradient)" }}
                          />
                        </div>
                        <p className=" center-vertically">
                          Fontys University of Applied Sciences
                        </p>
                      </div>

                      
                    </div>
                  </Slide>

                  <div class="social-info mb-5 mt-5">
                    <h3 className="heading-smaller">Social media</h3>
                    <div className="purple-gradient-border-bottom mb-4"></div>

                    <Fade bottom cascade>
                      <div className=" d-flex justify-content-between">
                        <a href="https://github.com/TinStay" target="_blank"  rel="noreferrer">
                          <FaGithub
                            className="contact-info-icon-big"
                            style={{ fill: "url(#purple-gradient)" }}
                          />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/martin-staykov-25993b184/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <GrLinkedin
                            className="contact-info-icon-big"
                            style={{ fill: "url(#purple-gradient)" }}
                          />
                        </a>
                        <a
                          href="https://www.facebook.com/martin.staykov.1/about_work_and_education"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaFacebookSquare
                            className="contact-info-icon-big"
                            style={{ fill: "url(#purple-gradient)" }}
                          />
                        </a>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
              <div className="col-md-5 mx-auto ">
                <h3 className="heading-smaller">Send me a message</h3>
                <div className="purple-gradient-border-bottom mb-3"></div>
                <form
                  id="contact-form"
                  className="contact-form"
                  method="post"
                  name="contact-me-form"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit="submit"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="contact-me-form"
                  />
                  <div className="contact-form-field mb-3">
                    <label className="contact-form-label" htmlFor="name">Name *</label>
                    <input
                    id="name"
                      className="contact-form-input"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="contact-form-field mb-3">
                    <label className="contact-form-label" htmlFor="email">Email *</label>
                    <input
                      id="email"
                      className="contact-form-input"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="contact-form-field mb-3">
                    <label className="contact-form-label" htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      className="contact-form-input"
                      name="message"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>
                  <div className="mt-5">
                    <button
                      type="submit"
                      className="btn float-end px-4 w-100 py-2 btn-purple-rounded"
                    >
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
