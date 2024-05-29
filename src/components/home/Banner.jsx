const Banner = () => {
  return (
    <div className="hero relative bg-sky-500">
      {/* Background image */}
      <img
        src="https://i.ibb.co/qgvr1KN/hipkicks-Ldh-Tor-I9-T-o-unsplash.jpg"
        alt="Fashion shoes background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="hero-overlay bg-opacity-60 bg-black absolute inset-0"></div>
      {/* Content */}
      <div className="hero-content relative text-center text-neutral-content z-10">
        <div className="max-w-md mx-auto bg-white bg-opacity-80 p-10 rounded-lg shadow-lg">
          <h1 className="mb-5 text-5xl font-bold text-gray-900">
            Step Into the Future of Fashion
          </h1>
          <p className="mb-5 text-gray-800">
            Discover the latest trends in footwear. Our collection offers
            unparalleled comfort, cutting-edge design, and top-notch quality
            to elevate your style. Embrace innovation and elegance with every step.
          </p>
          <button className="btn btn-primary text-white bg-blue-600 hover:bg-blue-700">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
