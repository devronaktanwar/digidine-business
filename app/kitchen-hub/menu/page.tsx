import { IItemCardProps } from "@/common/types/Menu";
import ActionContainer from "@/components/menu/ActionContainer";
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
        <div>
          <ActionContainer />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-16 md:gap-y-20 pt-14 pb-6">
          {menuItems.map((item, index) => {
            return <ItemCard key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
const menuItems: IItemCardProps[] = [
  {
    label: "Margherita Pizza",
    description:
      "Classic cheese pizza with fresh basil and tangy tomato sauce.",
    type: "VEG",
    sellingPrice: 199,
    originalPrice: 299,
    image: "/menu.jpg",
    status: "ACTIVE",
  },
  {
    label: "Chicken Biryani",
    description:
      "Fragrant basmati rice cooked with spicy marinated chicken and herbs.",
    type: "NON-VEG",
    sellingPrice: 199,
    originalPrice: 299,
    image: "/menu.jpg",
    status: "INACTIVE",
  },
  {
    label: "Paneer Butter Masala",
    description: "Soft paneer cubes in a rich, creamy tomato-based gravy.",
    type: "VEG",
    sellingPrice: 199,
    originalPrice: 299,
    image: "/menu.jpg",
    status: "INACTIVE",
  },
  {
    label: "Masala Dosa",
    description:
      "Crispy rice crepe filled with spiced potato mash served with chutney and sambar.",
    type: "VEG",
    sellingPrice: 199,
    originalPrice: 299,
    image: "/menu.jpg",
    status: "ACTIVE",
  },
  {
    label: "Mutton Rogan Josh",
    description:
      "Slow-cooked mutton in aromatic Kashmiri spices and yogurt gravy.",
    type: "NON-VEG",
    sellingPrice: 199,
    originalPrice: 299,
    image: "/menu.jpg",
    status: "ACTIVE",
  },
  {
    label: "Chole Bhature",
    description: "Spicy chickpeas served with deep-fried fluffy bread.",
    type: "VEG",
    sellingPrice: 199,
    originalPrice: 299,
    image: "/menu.jpg",
    status: "ACTIVE",
  },
  {
    label: "Grilled Sandwich",
    description: "Toasted sandwich with veggies, cheese, and green chutney.",
    type: "VEG",
    sellingPrice: 199,
    originalPrice: 299,
    image: "/menu.jpg",
    status: "ACTIVE",
  },
  {
    label: "Fish Curry",
    description: "Spicy and tangy fish curry with South Indian flavors.",
    type: "NON-VEG",
    sellingPrice: 199,
    originalPrice: 299,
    image: "/menu.jpg",
    status: "ACTIVE",
  },
  {
    label: "Veg Manchurian",
    description: "Crispy vegetable balls tossed in spicy Indo-Chinese gravy.",
    type: "VEG",
    sellingPrice: 199,
    originalPrice: 299,
    image: "/menu.jpg",
    status: "ACTIVE",
  },
  {
    label: "Tandoori Chicken",
    description:
      "Chicken leg quarters marinated in yogurt and spices, grilled in a tandoor.",
    type: "NON-VEG",
    sellingPrice: 199,
    originalPrice: 299,
    image: "/menu.jpg",
    status: "ACTIVE",
  },
  {
    label: "Rajma Chawal",
    description:
      "Kidney beans cooked in tomato gravy served with steamed rice.",
    type: "VEG",
    sellingPrice: 199,
    originalPrice: 299,
    image: "/menu.jpg",
    status: "ACTIVE",
  },
  {
    label: "Butter Naan",
    description:
      "Soft Indian flatbread brushed with butter, perfect with curries.",
    type: "VEG",
    sellingPrice: 199,
    originalPrice: 299,
    image: "/menu.jpg",
    status: "ACTIVE",
  },
];
