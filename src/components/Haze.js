import '../css/haze.css'
import { FaCloud } from "react-icons/fa";

const Haze = () => {
    return (
        <div className="weather-icon haze">
            <div className='fog layer1'>
                <div className='fog-particle size3'></div>
                <div className='fog-particle size1'></div>
                <div className='fog-particle size2'></div>
            </div>
            <div className='building-crop'>
                <div className='buildings'>
                    <div className='building bsize3'></div>
                    <div className='building bsize1'></div>
                    <div className='building bsize2'></div>
                    <div className='building bsize1'></div>
                    <div className='building bsize3'></div>
                    <div className='building bsize2'></div>
                    <div className='building bsize4'></div>
                </div>
            </div>
            <div className='fog layer2'>
                <div className='fog-particle size1'></div>
                <div className='fog-particle size3'></div>
            </div>
            <div className='fog layer3'>
                <div className='fog-particle size2'></div>
                <div className='fog-particle size3'></div>
                <div className='fog-particle size2'></div>
            </div>
        </div>
    )
}

export default Haze;