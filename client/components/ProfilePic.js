import React from "react";

const imgStyle = {
  borderRadius: "50%",
  marginTop: "2em",
};

const ProfilePic = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvF5GWZ9aM90fHqSJzEtEP-t-csW3wuPV_-g&usqp=CAU"
        alt="George Manikas"
        style={imgStyle}
      />
      
    </div>
  );
};

export default ProfilePic;
