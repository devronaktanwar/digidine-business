import ItemCard from "@/components/menu/ItemCard";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl md:text-2xl font-bold text-secondary">
            Menu Items
          </h1>
          <p className="text-sm text-gray-500">Sell all your menus.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-20 pt-14 pb-6">
          {menuItems.map((item, index) => {
            return <ItemCard key={index} {...item}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
const menuItems = [
  {
    label: "Margherita Pizza",
    description:
      "Classic cheese pizza with fresh basil and tangy tomato sauce.",
    type: "VEG",
    price: 299,
    image: "/menu.jpg",
  },
  {
    label: "Chicken Biryani",
    description:
      "Fragrant basmati rice cooked with spicy marinated chicken and herbs.",
    type: "NON-VEG",
    price: 349,
    image: "/menu.jpg",
  },
  {
    label: "Paneer Butter Masala",
    description: "Soft paneer cubes in a rich, creamy tomato-based gravy.",
    type: "VEG",
    price: 270,
    image: "/menu.jpg",
  },
  {
    label: "Masala Dosa",
    description:
      "Crispy rice crepe filled with spiced potato mash served with chutney and sambar.",
    type: "VEG",
    price: 160,
    image: "/menu.jpg",
  },
  {
    label: "Mutton Rogan Josh",
    description:
      "Slow-cooked mutton in aromatic Kashmiri spices and yogurt gravy.",
    type: "NON-VEG",
    price: 420,
    image: "/menu.jpg",
  },
  {
    label: "Chole Bhature",
    description: "Spicy chickpeas served with deep-fried fluffy bread.",
    type: "VEG",
    price: 180,
    image: "/menu.jpg",
  },
  {
    label: "Grilled Sandwich",
    description: "Toasted sandwich with veggies, cheese, and green chutney.",
    type: "VEG",
    price: 120,
    image: "/menu.jpg",
  },
  {
    label: "Fish Curry",
    description: "Spicy and tangy fish curry with South Indian flavors.",
    type: "NON-VEG",
    price: 390,
    image: "/menu.jpg",
  },
  {
    label: "Veg Manchurian",
    description: "Crispy vegetable balls tossed in spicy Indo-Chinese gravy.",
    type: "VEG",
    price: 220,
    image: "/menu.jpg",
  },
  {
    label: "Tandoori Chicken",
    description:
      "Chicken leg quarters marinated in yogurt and spices, grilled in a tandoor.",
    type: "NON-VEG",
    price: 350,
    image: "/menu.jpg",
  },
  {
    label: "Rajma Chawal",
    description:
      "Kidney beans cooked in tomato gravy served with steamed rice.",
    type: "VEG",
    price: 190,
    image: "/menu.jpg",
  },
  {
    label: "Butter Naan",
    description:
      "Soft Indian flatbread brushed with butter, perfect with curries.",
    type: "VEG",
    price: 40,
    image: "/menu.jpg",
  },
];

