import './Profile.css'

const Profile = (props) => {
    const { name, bio, image, github } = props.data;
    return (
        <div className='profile'>
            <div className='card'>
                <div>
                    <p>
                        <img src={image}/>
                    </p>
                    <h2 className='name'>{name}</h2>
                    <p>{bio}</p>
                    <a href={github}>GitHub</a>    
                </div>
            </div>
        </div>
)
};

export default Profile;