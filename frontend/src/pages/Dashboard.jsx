import axios from "axios"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useEffect, useState } from "react"

export const Dashboard = () => {
    const [balance, setBalance] = useState(0)
    const token = localStorage.getItem("token");
    // console.log(token);
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(response => {
            setBalance(response.data.balance);
        })
    }, [token])
    // console.log(balance)

    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}