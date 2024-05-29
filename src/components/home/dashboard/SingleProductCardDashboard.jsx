/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const { id, title, brand, price, description, image_url } = shoe;
  
  const handleDelete = async () => {
    await fetch(`http://localhost:3000/shoes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDelete(id);
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-full mr-2">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
          <button className="btn bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-2">
            <Link to={`edit/${id}`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="btn bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardDashboard;
