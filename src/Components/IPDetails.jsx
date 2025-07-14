// My IP Address - 49.42.215.101

function IpDetails({ data }) {
    
    return (
        <div className="mt-6 p-6 border rounded shadow-md text-center max-w-2xl mx-auto bg-white">
            <h2 className="text-2xl font font-bold mb-4">Ip Address Info</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <p><strong>IP Address:</strong> {data.ip}</p>
                <p><strong>Continent:</strong> {data.continent}</p>
                <p><strong>Country:</strong> {data.country}</p>
                <p><strong>Postal Code:</strong> {data.postal}</p>
                <p><strong>Timezone:</strong> {data.timezone?.id} ({data.timezone?.utc})</p>
                <p><strong>Current Time:</strong> {data.timezone?.current_time}</p>
                <p><strong>ISP:</strong> {data.connection?.isp}</p>
                <p><strong>Organization:</strong> {data.connection?.org}</p>
                <p><strong>Latitude:</strong> {data.latitude}</p>
                <p><strong>Longitude:</strong> {data.longitude}</p>
            </div>
        </div>
    );
}

export default IpDetails