import { useEffect, useState } from "react";
import SearchBox from "./Components/SearchBar";
import axios from "axios";
import IpDetails from "./Components/IPDetails";
import MapComponent from "./Components/MapComponent";


function App() {
  const [ IpData, setIpData ] = useState(null);
  
  const fetchIpData = async (ip) => {
    try {
      const res = await axios.get(`https://ipwho.is/${ip}`);
      if(res.data.success) {
        setIpData(res.data);
      } else {
        alert("Invalid IP address or domain!");
      }
    } catch(error) {
      console.error("Failed to fetch IP data", error);
    }
  };

    useEffect(() => {
      fetchIpData("");
    }, []);

  return(
    <div className="p-4">
      <SearchBox onSearch={fetchIpData} />
      {IpData && (
        <>
          <IpDetails data={IpData} />
          <MapComponent
            latitude={IpData.latitude}
            longitude={IpData.longitude}
            city={IpData.city}
          />
        </>
      )}
    </div>
  );
}

export default App;