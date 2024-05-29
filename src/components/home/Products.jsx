import SingleProducts from "./SingleProducts";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  return (
    <div>
      <h1 className="my-8 text-center text-5xl font-extrabold tracking-wide">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Our
        </span>{" "}
        Pro
        <span className="text-primary relative">
          ducts
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 rounded-lg"></span>
        </span>
      </h1>
      <div className="flex gap-2 px-6 justify-center items-center">
        {
          // eslint-disable-next-line react/prop-types
          data.slice(0, 3).map((shoe) => (
            <SingleProducts key={shoe.id} shoe={shoe} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
