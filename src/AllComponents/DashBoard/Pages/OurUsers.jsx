
const OurUsers = () => {
    return (
        <div className="container mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6">Who Uses Our Website?</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Developers</h3>
                    <p>Find resources, tutorials, and tools to enhance your development skills.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Corporate Professionals</h3>
                    <p>Access valuable information and insights relevant to your corporate environment.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Bankers</h3>
                    <p>Stay updated with the latest trends and news in the banking industry.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Students</h3>
                    <p>Discover educational content and resources to support your studies.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Entrepreneurs</h3>
                    <p>Gain insights and advice to help grow your business.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Designers</h3>
                    <p>Explore design inspiration and tools for creative projects.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Freelancers</h3>
                    <p>Access resources and tips for successful freelancing.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Tech Enthusiasts</h3>
                    <p>Stay informed about the latest tech trends and innovations.</p>
                </div>
            </div>
        </div>
    );
};

export default OurUsers;
