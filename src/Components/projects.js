import '../css/projects.css'
import Project1 from './project-1.js';
import img from '../Assets/question.png'

function Projects(){
  return <div className="projects">
    <div className="line"></div>
    <div className='border'>
    <Project1 title="none" katakana="プロジェクト 1" url="" img={img}/>
    <Project1 title="none" katakana="プロジェクト 2" url="" img={img}/>
    <Project1 title="none" katakana="プロジェクト 3" url="" img={img}/>
    <Project1 title="none" katakana="プロジェクト 4" url="" img={img}/>
    <Project1 title="none" katakana="プロジェクト 5" url="" img={img}/>
    <Project1 title="none" katakana="プロジェクト 6" url="" img={img}/>

  
    </div>
    <div className="sectionrect">
      <div className="uppersection">Projects</div>
      <div className="lowersection">プロジェクト</div>
    </div>
  </div>
}

export default Projects;