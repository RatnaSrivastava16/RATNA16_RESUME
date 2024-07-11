import './navbar.css';
import {navOptions} from '../../constants';
import {NAVBAR_TITLE} from '../../constants';
function NavOption(props){
    return <p>{props.navItem}</p>;
}
function Navbar(){
    return (
        <div className='navbar_container'>
            <div className='navbar_left'>
                {NAVBAR_TITLE}
            </div>
            <div className='navbar_right'>
                {
                    navOptions.map(function(item,index){
                        return <NavOption key={item} navItem={item}></NavOption>
                    })
                }
            </div>
        </div>
        )
}
export default Navbar;