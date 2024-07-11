import './homepage.css';
import gitimage from '../../assets/git.png';

function HomePage(){
    return (
        <div className='homepage_container'>
            <div className='homepage_left'>
                <p className='homepage_left_h1'>
                    <span className='red_color'>Hi,</span> my name is
                </p>
                <p className='homepage_left_h2'>
                        Ratna Srivastava
                </p>
                <p className='homepage_left_h3'>
                    Student at <span className='red_color'>LPU</span>
                </p>
                <p className='homepage_left_descp'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ducimus, accusantium perferendis inventore officiis dolorem atque nobis odio unde dignissimos quo aliquam in dolore consequatur excepturi dolores velit nemo Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita ipsa libero maxime atque ratione. Provident quibusdam, ea ab ipsam cupiditate esse reiciendis accusamus corporis quaerat autem numquam aspernatur pariatur architecto.
                </p>
                <div>
                    <a href='https://github.com/RatnaSrivastava16' target='_blank'>
                    <img src={gitimage} alt='github-image'
                    className='homepage_logo'/></a>
                    
                </div>
                <a href='mailto:abc@gmail.com'>
                        <button className='homepage_left_button'>Get in touch</button>
                    </a>
            </div>  
            <div className='homepage_right'>
                <img src='https://cdn.dribbble.com/users/17707/screenshots/2413754/rrr.gif' alt='GIF' />
                </div>      
        </div>
    )
}
export default HomePage;