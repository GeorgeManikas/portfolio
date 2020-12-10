import React from "react";

const imgStyle = {
  position: "relative",
  borderRadius: "50%",
  left: "50%",
  transform: "translateX(-50%)",
  marginTop: "2em"
};

const ProfilePic = () => {
  return <img src="profile_pic.jpg" alt="George Manikas" style={imgStyle} />;
};

export default ProfilePic;
