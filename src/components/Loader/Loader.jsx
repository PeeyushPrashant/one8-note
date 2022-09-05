import {ThreeCircles} from "react-loader-spinner"
import "./Loader.css"

const Loader=()=>{
    return(
    <div className="loader flex-row">
        <ThreeCircles color="#e75a4b" outerCircleColor="green" />
    </div>
    )
}

export default Loader;