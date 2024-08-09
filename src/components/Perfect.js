import { FaCloud } from "react-icons/fa";

const Perfect = () => {
    return (
        <div className="weather-icon perfect">
            <div className="small-sun"></div>
            <div className="fog1">
                <FaCloud className="cloud" size={50} />
                <FaCloud className="cloud" size={50} />
                <FaCloud className="cloud" size={50} />
            </div>
        </div>
    )
}

export default Perfect