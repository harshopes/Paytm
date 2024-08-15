
import { useNavigate, useLocation } from 'react-router-dom';

export default function Confirmation() {
    const location = useLocation();
    const { amount, name } = location.state || {}; // Destructure state from location
    const navigate = useNavigate();
    return <div class="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div
                class="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
            >
                <div class="flex flex-col space-y-1.5 p-6">
                    <h2 class="text-3xl font-bold text-center">Confirmation</h2>
                </div>
                <div class="p-6">

                    <span class="text-xl text-black">Rs {amount} send to {name}</span>

                    <div class="flex items-center space-x-4">
                        <h3 class="text-2xl font-semibold">{"Transfer Successful"}</h3>
                    </div>
                    <div class="space-y-4">
                        <div class="space-y-2">
                        </div>
                        <button onClick={() => {
                            navigate("/dashboard")
                        }} class="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                            Go to dashboard
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}