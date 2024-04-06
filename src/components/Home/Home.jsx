import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2 className="text-3xl">This is Home for: {user?.email}</h2>
        </div>
    );
};

export default Home;