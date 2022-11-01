import React from "react"
import img from "../image/image 2.png"
const Header = () => {
  return (
    <div className="header-section">
      <div className="logo-section">
        {" "}
        <img className="img-section" src={img} />
        <p className="h-title" style={{ marginTop: "6px" }}>BuildIt</p>
      </div>
    </div>
  )
}

export default Header
