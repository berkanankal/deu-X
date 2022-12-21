import React from "react";
import "./styles.css";

const UserHome = () => {
  return (
    <div className="heroContainer">
      <div className="heroBg">
        <video
          className="videoBg"
          width="400"
          autoPlay={true}
          src="/videos/video.mp4"
          loop
          muted
          type="video/mp4"
        />
      </div>
      <div className="heroContent">
        <h1 className="heroH1">
          Üniversite öğrencilerinin hayatı artık daha kolay!
        </h1>
        
      </div>
    </div>
  );
};

export default UserHome;
