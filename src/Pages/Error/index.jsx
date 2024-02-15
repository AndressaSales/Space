import nasa from "./img/nasa.png";
import {Link} from "react-router-dom";
import "./error.css";
export default function Error(){
    return(
        <div className="cont-nasa">
            <img src={nasa} alt="nasa" />
            <h2>ERROR</h2>
            <Link to={"/"}>
                Voltar para o Space
            </Link>
        </div>
    );
}