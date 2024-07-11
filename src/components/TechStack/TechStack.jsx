import './TechStack.css';
import TechStackIconContainer from './TechStackIconConatiner/TechStackIconContainer';
import githubIcon from '../../assets/git.png';
import { techStackRowOne,techStackRowTwo } from '../../constants';


function TechStack(){
return(
        <div className='techstack_container'>
            <p className='techstack_title'>Tech Stack</p>
            <div className='techstack_icon_container'>
                {
                    techStackRowOne.map(function(element,index){
                        console.log('element is:',element)
                        console.log('index is:',index);
                        return (
                            <TechStackIconContainer 
                            key={element.iconName}
                            title={element.iconName} altProperty={element.iconAltProperty}
                            image={element.iconImage}/>
                        )
                    })
                    
                }
            </div>
            <div className='techstack_icon_container'>
                {
                    techStackRowTwo.map(function(element,index){
                        console.log('element is:',element)
                        console.log('index is:',index);
                        return (
                            <TechStackIconContainer 
                            key={element.iconName}
                            title={element.iconName} altProperty={element.iconAltProperty}
                            image={element.iconImage}/>
                        )
                    })
                    
                }
            </div>
        </div>
    )
}
export default TechStack;