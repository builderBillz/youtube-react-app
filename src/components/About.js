import "./NavBar.css";
import FellowData from "./FellowData";
import Profile from './Profile';
import './About.css'

const About = () => {
    return (
        <div className='body'>
            <div className='about'>
                <h1 className='youtube'>Youtube Project</h1>
                  <p><strong>Project:</strong> to create a React application that allows you to search for YouTube videos, using the YouTube API.</p> 
                  <p><strong>Ultimate goal:     </strong>to practice working in collaboration as a team.</p>
                <p className='our-team'>Our Team</p>
            </div>

            {FellowData.map((fellow) => {return (<Profile data= {fellow}/>)})}
        </div>
    )
    }
  
  export default About;