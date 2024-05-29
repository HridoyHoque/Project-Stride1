const Accordion = () => {
  return (
    <div className="my-8">
      <h1 className="mx-5 my-5 text-center text-5xl font-extrabold tracking-wide">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Frequently As
        </span>
        <span className="text-primary relative">
          ked Questions
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 rounded-lg"></span>
        </span>
      </h1>
      <div className="mx-5 space-y-4">
        <div className="collapse collapse-arrow bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-lg shadow-md">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium peer-checked:bg-opacity-80">
            Are they the right size?
          </div>
          <div className="collapse-content peer-checked:bg-white peer-checked:text-gray-800 p-4 rounded-b-lg">
            <p>
              Shoe size varies by manufacturer. Have a professional measure your
              shoe size and look for a thumb’s width of room in the toe box from
              your longest toe. Think about it, if you had to wear a pair of
              gloves all day, you would need enough room for your fingers to
              spread out to complete your daily activities. Our feet should have
              enough room in our shoes so they can carry us all day long! Shoes
              that are too small or too big can cause friction calluses, wounds,
              compression injuries, and limit proper movement of the toes. In
              shoes with buckles and straps, make sure they aren’t cinched too
              tight. Cinching laces and buckles too tightly can lead to
              compression on the nerves of the foot.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-lg shadow-md">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium peer-checked:bg-opacity-80">
            Are they too soft?
          </div>
          <div className="collapse-content peer-checked:bg-white peer-checked:text-gray-800 p-4 rounded-b-lg">
            <p>
              Memory foam is all the rage right now! Wearing collapsible, soft,
              “pillow-like” inserts and shoes are popular, but dangerous. They do
              not provide stability for the foot. They predispose us to injuries
              like stress fractures and Plantar Fasciitis.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-lg shadow-md">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium peer-checked:bg-opacity-80">
            Are they right for my activity?
          </div>
          <div className="collapse-content peer-checked:bg-white peer-checked:text-gray-800 p-4 rounded-b-lg">
            <p>
              There are a host of activity specific shoes, and it is important to
              do a little research before buying shoes for sports such as running
              or tennis. If your sport requires wearing cleats or spikes, find
              stud types for the ground you will be playing on most often (soft,
              hard, firm, or turf) and wear longer cleats for wet surfaces. A good
              quality foot bed and snug synthetic or leather upper will decrease
              blisters and sliding injuries in the shoe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
