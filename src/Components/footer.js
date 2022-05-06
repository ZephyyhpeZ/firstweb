import '../css/footer.css'
import gmail from "../Assets/gmail.svg"
import insta from "../Assets/instagram.svg"
import github from "../Assets/github.svg"
function Footer(){
  return <div className="footer">
      <div className="line"></div>
      <div className="socialmedias">
        <div className="socialmedia"><img height = "17px" src={gmail} alt="gmail" /> <a href="https://mail.google.com/"> gmail@gmail.com</a> </div>
        <div className="socialmedia"><img height = "22px" src={insta} alt="insta" /> <a href="https://www.instagram.com/"> @instagram</a> </div>
        <div className="socialmedia"><img height = "20px" src={github} alt="github" /> <a href="https://github.com"> @github</a></div>
      </div>
  </div>
}

export default Footer;