// My IP Address - 49.42.215.101

function IpDetails({ data }) {
    
    return (
        <div className="mt-6 p-2 border rounded-full shadow-lg text-center max-w-5xl mx-auto bg-white">
            <h2 className="text-3xl font-bold mb-4">Ip Address Info</h2>

            <div className="grid grid-cols-6 gap-x-6">
                <p><strong>Continent:</strong> {data.continent}</p>
                <p><strong>Country:</strong> {data.country}</p>
                <p><strong>ISP:</strong> {data.connection?.isp}</p>
                <p><strong>Organization:</strong> {data.connection?.org}</p>
                <p><strong>Latitude:</strong> {data.latitude}</p>
                <p><strong>Longitude:</strong> {data.longitude}</p>
            </div>
        </div>
    );
}

export default IpDetails