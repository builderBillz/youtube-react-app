import "./NavBar.css";
import FellowData from "./FellowData";
import Profile from './Profile';

const About = () => {
    return (
        <div className='body'>
            <div className='about-section'>
                <h1>Project Description</h1>
                <p>Project</p>
            </div>

            <h2 className='our-team'>Our Team</h2>
            {FellowData.map((fellow) => {return (<Profile data= {fellow}/>)})}
        </div>
    )
    }
  
  export default About;