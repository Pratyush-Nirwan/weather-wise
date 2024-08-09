import { FaCloud } from "react-icons/fa";
import css from '../css/Clouds.module.css';

const Clouds = () => {
    return (
        <div className="weather-icon perfect">
            <div className="small-sun"></div>
            <div className="fog1">
                <FaCloud className={`${css.cloud} + ${css.c1}`} size={50} />
                <FaCloud className={`${css.cloud} + ${css.c2}`} size={50} />
                <FaCloud className={`${css.cloud} + ${css.c3}`} size={50} />
            </div>
        </div>
    )
}

export default Clouds