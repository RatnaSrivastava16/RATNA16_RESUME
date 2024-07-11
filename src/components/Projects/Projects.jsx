import { projectData } from '../../constants';
import ProjectBox from './ProjectBox/ProjectBox';
import './Projects.css';
export default function Projects(){
    
    return (

        <div>
            <p className='projects_title'>Projects</p>
            <div className='projects_box_container'>
                {
                    projectData.map((project,index) => (
                        <ProjectBox
                        title={project.title}
                        image={project.image}
                        sentences={project.sentence}
                        link={project.link}
                        />
                    ))
                }
            </div>
        </div>
    )
}