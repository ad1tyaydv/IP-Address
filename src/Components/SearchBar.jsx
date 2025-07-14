import { IoMdSearch } from "react-icons/io";
import { useState } from "react";

function SearchBox({onSearch}) {
    const [ ipInput, setIpInput ] = useState("");

    const handleClick = () => {
        onSearch(ipInput);
    }
    
    return(
        <div className="bg-white rounded-full py-3 flex justify-center gap-x-4">
        <input className="border-3 rounded-2xl text-xl px-15 py-2"
            type="text"
            placeholder="URL or Domain Name"
            value={ipInput}
            onChange={(e) => setIpInput(e.target.value)}
        />

        <button
            className="bg-blue-700 text-white text-xl border-2 border-black rounded-full px-5 py-2 hover: cursor-pointer flex items-center justify-center"
            onClick={handleClick}
        >
            <span><IoMdSearch className="text-2xl"/></span>
        </button>
        </div>
    );
}

export default SearchBox