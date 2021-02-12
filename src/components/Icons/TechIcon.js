import React from "react"
import { IconContext } from "react-icons"
import { SiReactrouter } from "react-icons/si"
import { SiNetlify } from "react-icons/si"

import { OverlayTrigger, Tooltip } from "react-bootstrap"

const TechIcon = ({ tooltip = true, ...props }) => {
  let icon = null

  switch (props.name) {
    case "React":
      icon = <i className="devicon-react-original tech-icon colored"> </i>
      break

    case "Redux":
      icon = <i className="devicon-redux-original tech-icon colored"> </i>
      break

    case "HTML":
      icon = <i className="devicon-html5-plain tech-icon colored"> </i>
      break

    case "CSS":
      icon = <i className="devicon-css3-plain tech-icon colored"> </i>
      break

    case "Sass":
      icon = <i className="devicon-sass-original tech-icon colored"></i>
      break

    case "Gatsby":
      icon = <i className="devicon-gatsby-plain tech-icon colored"></i>
      break

    case "JavaScript":
      icon = <i className="devicon-javascript-plain tech-icon colored"></i>
      break

    case "Bootstrap":
      icon = <i className="devicon-bootstrap-plain tech-icon colored"></i>
      break

    case "Python":
      icon = <i className="devicon-python-plain tech-icon colored"></i>
      break

    case "Django":
      icon = <i className="devicon-django-plain tech-icon colored"></i>
      break

    case "Firebase":
      icon = <i className="devicon-firebase-plain tech-icon colored"></i>
      break

    case "Git":
      icon = <i className="devicon-git-plain tech-icon colored"></i>
      break

    case "Heroku":
      icon = <i className="devicon-heroku-plain tech-icon colored"></i>
      break

    case "Adobe Experience Design":
      icon = <i className="devicon-xd-plain tech-icon colored"></i>
      break

    case "Visual Studio":
      icon = <i className="devicon-visualstudio-plain tech-icon colored"></i>
      break

    case "Adobe Photoshop":
      icon = <i className="devicon-photoshop-plain tech-icon colored"></i>
      break

    case "npm":
      icon = <i className="devicon-npm-original-wordmark tech-icon colored"></i>
      break

    case "React Router":
      icon = <SiReactrouter className="tech-icon" />
      break

    case "Netlify":
      icon = <SiNetlify className="tech-icon netlify-icon" />
      break

    case "Netlify":
      icon = <SiNetlify className="tech-icon netlify-icon" />
      break

    default:
      break
  }

  if (icon !== null) {
    if (tooltip == true) {
      return (
        <OverlayTrigger
          key={props.name}
          placement="bottom"
          overlay={
            <Tooltip
              className="zindex-tooltip"
              id={`tooltip-${props.name}`}
              animation="true"
            >
              {props.name}
            </Tooltip>
          }
        >
          {icon}
        </OverlayTrigger>
      )
    }else{
      return icon
    }
  } else return null
}

export default TechIcon
