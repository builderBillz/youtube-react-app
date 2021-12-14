import "./NavBar.css";
import FellowData from "./FellowData";
import Profile from './Profile';
import './About.css'

const About = () => {
    return (
        <div className='body'>
            <div className='about'>
                <p className='youtube'><span className='red-text'>YouTube</span> Project</p>
                  <p className='paragraph'><span className='red-text'>Project Description:</span>  create a React application that allows you to search for YouTube videos, using the YouTube API.</p> 
                  <p className='paragraph'><span className='red-text'>Ultimate goal:</span>  practice working in collaboration as a team.</p>
                <p className='our-team'>Our Team</p>
            </div>

            {FellowData.map((fellow) => {return (<Profile data={fellow} key={fellow.id}/>)})}
j        </div>
    );
    };
  
  export default About;