

function IpDetails({ data }) {
    
    return (
        <div className="mt-6 p-2 border rounded-4xl shadow-lg text-center max-w-5xl mx-auto bg-white">
            <h2 className="text-3xl font-bold mb-4">Ip Address Info</h2>

            <div className="grid grid-cols-6 gap-x-6 text-center">
                <div>
                    <p><strong>Continent:</strong></p>
                    <p>{data.continent}</p>
                </div>
                <div>
                    <p><strong>Country:</strong></p>
                    <p>{data.country}</p>
                </div>
                <div>
                    <p><strong>ISP:</strong></p>
                    <p>{data.connection?.isp}</p>
                </div>
                <div>
                    <p><strong>Organization:</strong></p>
                    <p>{data.connection?.org}</p>
                </div>
                <div>
                    <p><strong>Latitude:</strong></p>
                    <p>{data.latitude}</p>
                </div>
                <div>
                    <p><strong>Longitude:</strong></p>
                    <p>{data.longitude}</p>
                </div>
            </div>
        </div>
    );
}

export default IpDetails