import React from 'react'

const imgStyle = {
    position:'relative',
    borderRadius:'50%',
    left:'50%',
    transform:'scale(80%)',
    transform:'translateX(-50%)',
}

const ProfilePic = () => {
    return (
        <img src="profile_pic.jpg" style={imgStyle} /> 
    )
}

export default ProfilePic
