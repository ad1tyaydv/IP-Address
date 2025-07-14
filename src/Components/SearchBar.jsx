import { useState } from "react";

function SearchBox({onSearch}) {
    const [ ipInput, setIpInput ] = useState("");

    const handleClick = () => {
        onSearch(ipInput);
    }
    
    return(
        <div className="flex justify-center">
            <input className="text-blue-900 border-2 text-2xl p-2"
                type="text"
                value={ipInput}
                onChange={(e) => setIpInput(e.target.value)}
            />

            <button
                className="text-red-500 border-2 px-5 py-1 hover:text-red-900"
                onClick={handleClick}
            >
                Search
            </button>
        </div>
    );
}

export default SearchBox