import LogoIcon from "../../icons/LogoIcon"
import HeaderItem from "./HeaderItem"
import { useState } from "react"
import { Link } from "react-router-dom"
import SearchBar from "./Searchbar"
import { useCartContext } from "../../context/CartContext"


export default function Header() {
    const [currentMenuItem, setCurrentMenuItem] = useState<string | null>(null)
    const handleItemClick = (item: string) => {
        setCurrentMenuItem(prevItem => (prevItem === item ? null : item));
    };
    const menuItemsLeft = [
        { path: "/all", text: "shop", key: "shop" },
        { path: "/search", text: "search", key: "search" },
    ];
    const menuItemsRight = [
        { path: "/cart", text: "cart", key: "cart" },
        { path: "#", text: "account", key: "account" },
    ];

    const { itemCount } = useCartContext()

    return (
        <div className="flex justify-between
        border-b-[1px] border-zinc-950
        ">
            <div id="left-content" className="flex">
                <Link to="/" className="border-r-[1px] border-zinc-950 px-5 py-3">
                    <LogoIcon size="50px" />
                </Link>
                {menuItemsLeft.map((item) => (
                    <Link to={item.path} key={item.key} className="border-r-[1px] border-zinc-950 ">
                        <HeaderItem textContent={item.text} onClick={() => handleItemClick(item.key)}
                            isCurrent={currentMenuItem === item.key} />
                    </Link>
                ))
                }

            </div>
            {currentMenuItem === "search" && <div className="items-center flex">
                <SearchBar />
            </div>}


            <div id="right-content" className="flex">
                {menuItemsRight.map((item) => (
                    <Link to={item.path} key={item.key} className="border-l-[1px] border-zinc-950 ">
                        <HeaderItem textContent={item.text === "cart" ? `${item.text}(${itemCount})` : item.text} onClick={() => handleItemClick(item.key)}
                            isCurrent={currentMenuItem === item.key} />
                    </Link>
                ))
                }

            </div>
        </div>
    )
} 