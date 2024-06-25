import { snacks } from "../../../../../data/dummydata";

const Snacks = ({ viewAll }) => {
  const imagesToDisplay = viewAll ? snacks : snacks.slice(0, 4);

  return (
    <div className="grid gap-5 grid-cols-menu-auto-fit">
      {imagesToDisplay.map((snack, index) => (
        <div key={index} className="p-2 rounded-lg aspect-[4/3]">
          <img
            src={snack.img}
            alt={`Snack ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Snacks;
