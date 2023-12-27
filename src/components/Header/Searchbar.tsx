import SearchIcon from "../../icons/SearchIcon"

export default function SearchBar() {
    return (
        <div className="flex justify-center items-center">
            <div className="relative w-96">
                <input type="search" name="" id="" className="h-12 w-full rounded px-3 border" placeholder="Search products..." />
                <span className="absolute inset-y-0 right-2 flex items-center pl-3">
                    <SearchIcon />
                </span>
            </div>

        </div>
    )
}