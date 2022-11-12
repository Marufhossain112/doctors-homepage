import React from "react";
import headerImg from "../../assets/images/bg.png";
const HeaderBanner = () => {
  return (
    <div className="hero  bg-base-200 mt-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img alt="me" src={headerImg} className="w-1/2 rounded-lg shadow-2xl" />
        <div className="text-left w-1/2">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
