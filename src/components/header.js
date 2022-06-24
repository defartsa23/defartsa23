import * as React from "react"
import PropTypes from "prop-types"
import mail from "../images/email.png" 
import linkedin from "../images/linkedin.png" 
import github from "../images/github.png" 

const Header = ({ greetings }) => {
  return (
    <div className="container">
      <div className="hero">
        <h1 className="name">
          <strong>Farras 23</strong> Deza Farras Tsany
        </h1>
        <span className="job-title">Software Engineer</span>
        <span className="email"> 
          <a href="https://github.com/defartsa23" target={'_blank'}><img src={github} width={20}/></a>
          <a href="https://www.linkedin.com/in/deza-farras-tsany/" target={'_blank'} style={{padding:10}}><img src={linkedin} width={20}/></a>
          <a href="mailto:deza.ftsany@gmail.com" target={'_blank'}><img src={mail} width={20}/></a>
        </span>
        <h2 className="lead">{greetings}</h2>
      </div>
    </div>
  )
}

Header.propTypes = {
  greetings: PropTypes.string,
}

Header.defaultProps = {
  greetings: ``,
}

export default Header
