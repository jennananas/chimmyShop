import LogoIcon from "../../icons/LogoIcon";
import HeaderItem from "./HeaderItem";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import { useCartContext } from "../../context/CartContext";
import { useMenuContext } from "../../context/MenuContext";

export default function Header() {
    const { selectedItem, setSelectedItem } = useMenuContext();
    const { itemCount } = useCartContext();

    const handleItemClick = (item: { path?: string; text: string; key?: string; }) => {
        setSelectedItem(item?.text);
    };

    const menuItemsLeft = [
        { path: "/shop", text: "shop", key: "shop" },
        { path: "/search", text: "search", key: "search" },
    ];

    const menuItemsRight = [
        { path: "/cart", text: "cart", key: "cart" },
        { path: "/signin", text: "account", key: "account" },
    ];



    return (
        <div>
            <div className="flex md:justify-between border-b-[1px] border-zinc-950 overflow-x-auto">
                <div id="left-content" className="flex">
                    <Link to="/" className="md:border-r-[1px] border-zinc-950 md:px-5 md:py-3 p-3" onClick={() => setSelectedItem("")}>
                        <LogoIcon className="w-[32px] md:w-[50px]" />
                    </Link>
                    {menuItemsLeft.map((item) => (
                        <Link
                            to={item.path}
                            key={item.key}
                            className={` border-zinc-950 border-l-[1px] md:border-r-[1px] md:border-l-0
                        ${selectedItem === item.text ? 'bg-zinc-800 text-zinc-50' : 'bg-zinc-0 text-zinc-800'}`}
                            onClick={() => handleItemClick(item)}
                        >
                            <HeaderItem textContent={item.text} />
                        </Link>
                    ))}
                </div>
                {selectedItem === "search" && (
                    <div className="items-center lg:flex hidden">
                        <SearchBar />
                    </div>
                )}


                <div id="right-content" className="flex ">
                    {menuItemsRight.map((item) => (
                        <Link
                            to={item.path}
                            key={item.key}
                            className={`border-l-[1px] border-zinc-950 
                    ${selectedItem === item.text ? 'bg-zinc-800 text-zinc-50' : 'bg-zinc-0 text-zinc-800'}`}
                            onClick={() => handleItemClick(item)}
                        >
                            <HeaderItem
                                textContent={item.text === "cart" ? `${item.text}(${itemCount})` : item.text}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
