import '../css/project-1.css'

function Project1(props){

  return <div className="project1">
    <div className="titlerect">
        <div className="innerrect"><a href={props.url}> {props.title} </a></div>
    </div>
    <div className="rect">
      <img src={props.img} alt="" />
    </div>
    <div className="smallline"><div className="text">{props.katakana}</div></div>
  </div>
}

export default Project1;