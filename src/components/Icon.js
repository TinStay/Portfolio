import React from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

const Icon = props => {
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
      icon = <i class="devicon-visualstudio-plain tech-icon colored"></i>
      break

    default:
      break
  }

  if (icon !== null) {
    return (
      <OverlayTrigger
        key={props.name}
        placement="bottom"
        overlay={
          <Tooltip id={`tooltip-${props.name}`} animation="true">
            {props.name}
          </Tooltip>
        }
      >
        {icon}
      </OverlayTrigger>
    )
  } else return null
}

export default Icon
