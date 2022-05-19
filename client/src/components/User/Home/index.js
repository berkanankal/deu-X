import React from "react";
import Video from "../../../videos/video.mp4";
import "./styles.css";

const UserHome = () => {
  return (
    <div className="heroContainer">
      <div className="heroBg">
        <video
          className="videoBg"
          width="400"
          autoPlay={true}
          src={Video}
          loop
          muted
          type="video/mp4"
        />
      </div>
      <div className="heroContent">
        <h1 className="heroH1">
          Üniversite öğrencilerinin hayatı artık daha kolay!
        </h1>
        <p className="heroP">
          Sana uygun evi veya evine uygun arkadaşı bulmak ister misin?
          <br />
          İkinci el eşya, kitap ihtiyacın mı var?
          <br />
          Vizelerin ve finallerin için not bulmakta zorlanıyor musun?
          <br />
          Öyleyse aramıza hoşgeldin!
        </p>
      </div>
    </div>
  );
};

export default UserHome;
