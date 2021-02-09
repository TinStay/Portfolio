import React from "react"

const Icon = props => {
  let icon = null

  switch (props.name) {
    case "React":
      icon = <i className="devicon-react-original tech-icon colored"></i>
      break

    case "Redux":
      icon = <i className="devicon-redux-original tech-icon colored"></i>
      break

    case "Html":
      icon = <i class="devicon-html5-plain tech-icon colored"></i>
      break

    case "Css":
      icon = <i className="devicon-css3-plain tech-icon colored"></i>
      break

    case "Sass":
      icon = <i className="devicon-sass-original tech-icon colored"></i>
      break

    case "Gatsby":
      icon = <i className="devicon-gatsby-plain tech-icon colored"></i>
      break

    case "Javascript":
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
      icon = <i class="devicon-git-plain tech-icon colored"></i>
      break

    case "Heroku":
      icon = <i class="devicon-heroku-plain tech-icon colored"></i>
      break

    case "Xd":
      icon = <i class="devicon-xd-plain tech-icon colored"></i>
      break

    default:
      break
  }

  if (icon !== null) return icon
  else return null
}

export default Icon
