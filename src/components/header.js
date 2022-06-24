import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ greetings }) => {
  return (
    <div className="container">
      <div className="hero">
        <h1 className="name">
          <strong>Farras</strong> Deza Farras Tsany
        </h1>
        <span className="job-title">Software Engineer</span>
        <span className="email">i@defartsa.dev</span>
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
