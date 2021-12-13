import './Profile.css'

const Profile = (props) => {
    const { name, title, bio, image, github } = props.data;
    return (
        <div className='profile'>
            <div className='column'>
                <div className='card'>
                    <div className="container">
                        <h2 className='name'>{name}</h2>
                        <p>
                            <img src={image}/>
                        </p>
                        <p>{bio}</p>
                        <a className='github' href={github}>GitHub</a>    
                    </div>
                </div>
            </div>
        </div>
)
};

export default Profile;