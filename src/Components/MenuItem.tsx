import { MenuItem as MenuItemOff } from "../types";

interface MenuItemProps {
  item: MenuItemOff;
  addItem: (item: MenuItemOff) => void;
}

export const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <button
      className="border-2 rounded-2xl border-indigo-400 hover:bg-indigo-400 w-full p-3 flex justify-between"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};
