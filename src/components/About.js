import "./NavBar.css";
import FellowData from "./FellowData";
import Profile from './Profile';
import './About.css'

const About = () => {
    return (
        <div className='body'>
            <div className='about'>
              <h1 className='description'>About Us</h1>
                <p>description</p>
            </div>

            {FellowData.map((fellow) => {return (<Profile data= {fellow}/>)})}
        </div>
    )
    }
  
  export default About;