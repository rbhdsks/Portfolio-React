import Home from "../Components/Home";
import About from "../Components/About"
import LinksExample from "../Components/News";
export default function Main(){
    return(
        <div>
            <LinksExample/>
            <div className="intro">
                <Home/>
                <About/>
            </div>
        </div>
    )
}