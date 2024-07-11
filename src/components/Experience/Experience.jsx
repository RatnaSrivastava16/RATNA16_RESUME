import './Experience.css';
import ExperienceCard from './ExperienceCard/ExperienceCard.jsx';
import c from '../../assets/c.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';

function Experience(){
    const iconImages = [c,css,js];

    const statements = [
        "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, nostrum. Qui magnam optio eveniet autem. Id impedit inventore amet explicabo, reprehenderit labore in? Consectetur, nisi error reprehenderit assumenda earum sit.",
        "2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sequi, maiores placeat magnam nesciunt laudantium molestias fugit deserunt sint illo animi possimus amet laborum iste recusandae, excepturi officia, libero ipsa.",
        "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sequi, maiores placeat magnam nesciunt laudantium molestias fugit deserunt sint illo animi possimus amet laborum iste recusandae, excepturi officia, libero ipsa.",
        "4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sequi, maiores placeat magnam nesciunt laudantium molestias fugit deserunt sint illo animi possimus amet laborum iste recusandae, excepturi officia, libero ipsa.",
        "5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sequi, maiores placeat magnam nesciunt laudantium molestias fugit deserunt sint illo animi possimus amet laborum iste recusandae, excepturi officia, libero ipsa.",
    ];
    return (
        <div className='experience_container'>
            <p className='experience_title'>Experience</p>
            <div className='experience_cards_container'>
                <ExperienceCard
                companyName="ABC Pvt Ltd"
                designation='SDE 2'
                statements={statements}
                iconImages={iconImages}
                />
                <ExperienceCard
                companyName="XYZ Pvt Ltd"
                designation='SDE 1'
                statements={statements}
                iconImages={iconImages}/>
                <ExperienceCard
                companyName="EFG Pvt Ltd"
                designation='SDE 2'
                statements={statements}
                iconImages={iconImages}/>
            </div>
        </div>
    )
}
export default Experience;
