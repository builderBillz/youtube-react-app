import './Profile.css'

const Profile = (props) => {
    const { name, title, bio, image, github } = props.data;
    return (
        <div className='Profile'>
            <div className='column'>
                <div className='card'>
                    <div className="container">
                        <h2>{name}</h2>
                        <p className="title">{title}</p>
                        <p>{bio}</p>
                        <p>
                            <img src={image}/>
                        </p>
                        <a className='github' href={github}>GitHub</a>    
                    </div>
                </div>
            </div>
        </div>
)
};

export default Profile;