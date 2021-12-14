import './Profile.css'
import { Link } from "react-router-dom";

const Profile = (props) => {
    const { name, bio, image, github } = props.data;
    return (
        <div className='profile'>
            <div className='column'>
                <div className='card'>
                    <div className="container">
                        <p>
                            <img src={image}/>
                        </p>
                        <h2 className='name'>{name}</h2>
                        <p>{bio}</p>
                        <a href={github}>GitHub</a>    
                    </div>
                </div>
            </div>
        </div>
)
};

export default Profile;