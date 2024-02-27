import { Link } from "lucide-react";

const Home = () => {
    return (
        <div className="w-full h-full flex bg-transparent">
            <Link to="/createvideo" className="w-48 h-32 bg-black">
                Create
            </Link>
            <img src="./Home.png" className="absolute"></img>
        </div>
    );
};

export default Home;
