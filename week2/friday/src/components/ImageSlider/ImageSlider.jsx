import React from "react";
import img1 from "images/1.jpg";
import img2 from "images/2.jpg";
import img3 from "images/3.jpg";
import img4 from "images/4.jpg";
import img5 from "images/5.jpg";

const ImageSlider = () => {
  const images = [img1, img2, img3, img4, img5];
  return (
    <>
      <button>이전</button>
      <button>다음</button>
      <br />
      <div className="img-box">
        <img src="./images/1.jpg" alt="이미지" />
      </div>
    </>
  );
};

export default ImageSlider;
