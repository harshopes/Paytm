import { useNavigate } from "react-router-dom";

export const Appbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token"); // Clear the token from localStorage
        navigate("/signup"); // Navigate to the signup page
    };

    return <div className="shadow h-14 flex justify-between">
        <div className="font-semibold flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex justify-center mt-1 mr-2">
                <button
                    onClick={handleLogout}
                    className="w-full text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                    Logout
                </button>
            </div>
        </div>
    </div>
}