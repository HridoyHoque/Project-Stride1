import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProducts = ({ shoe }) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, brand, price, description, image_url } = shoe;

  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 my-5 mx-5">
      <figure className="relative">
        <img
          src={image_url}
          alt="Shoes"
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <h2 className="absolute bottom-4 left-4 text-white text-2xl font-bold z-10">
          {title}
        </h2>
      </figure>
      <div className="card-body p-6">
        <h3 className="text-xl font-semibold text-gray-800">Brand: {brand}</h3>
        <h3 className="text-xl font-semibold text-gray-800">Price: ${price}</h3>
        <p className="text-gray-700">{description}</p>
        <div className="card-actions mt-4">
          <Link
            to={`/products/${id}`}
            className="btn btn-primary w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg shadow-md hover:from-purple-600 hover:to-blue-500"
          >
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
