import { snacks } from "../../../../../data/dummydata";

const Snacks = () => {
  return (
    <div className="grid gap-5 grid-cols-menu-auto-fit">
      {snacks.map((snack) => (
        <div className=" p-4 rounded-lg ">
          <img
            src={snack.img}
            alt="Blog Post One"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Snacks;
