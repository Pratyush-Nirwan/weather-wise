import { FaCloud } from "react-icons/fa";

const Rain = () => {
    return (
        <div className="weather-icon rain">
            <div className="flash"></div>
            <FaCloud className="cloud" size={50} />
            <div className="rain-drops">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Rain