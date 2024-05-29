import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const shoe = useLoaderData();
    const { brand, description, image_url, price, title } = shoe;
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img className="w-full h-96 object-cover object-center" src={image_url} alt="Product" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
          <h1 className="absolute bottom-8 left-8 text-4xl font-bold text-white z-10">{title}</h1>
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Brand: {brand}</h2>
          <h2 className="text-2xl font-semibold mb-4">Price: ${price}</h2>
          <p className="text-lg font-light mb-8">{description}</p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-md shadow-md hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
