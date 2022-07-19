import {MutatingDots} from  "react-loader-spinner"
import "./Loader.css"

const Loader=()=>{
    return(
    <div className="loader flex-row">
        <MutatingDots ariaLabel="loading-indicator" />
    </div>
    )
}

export default Loader;