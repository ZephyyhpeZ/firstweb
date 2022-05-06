import '../css/about.css'
import placeholder from '../Assets/placeholder.png'


function About(){
  return <div className="about">
    <div className="line"><div className="mask"></div></div>
    <div className='border'>
      <div className="textbox">
          <div className="innerbox">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget justo in diam dignissim faucibus. Aenean eleifend varius felis, eu ultricies tellus. Phasellus venenatis vel felis quis bibendum. In et tempor justo, et posuere dolor. Aliquam congue ante purus, sit  </p>
          </div>
      </div>
      <div className="recthorizontal"><h2 className="horizontaltext">イマニュエル</h2></div>
      <div className="rectvertical"><h1 className="verticaltext">IMANUEL</h1></div>
      <div className="picbox"><img src={placeholder} alt="" /></div> 
    </div>
    <div className="sectionrect">
      <div className="uppersection">私について</div>
      <div className="lowersection">About Me</div>
    </div>
  </div>
}

export default About;