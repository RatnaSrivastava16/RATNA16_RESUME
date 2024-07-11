import './TechStackIconContainer.css';
import githubIcon from '../../../assets/git.png';

function TechStackIconContainer(props){
    return (
        <div className='techstack_icons'>
                    <img src={props.image}   alt={props.altProperty} />
                    <p>{props.title}</p>
        </div>
    )
}
export default TechStackIconContainer;