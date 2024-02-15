import "./space.css";
import {useState} from "react";
import axios from "axios";

export default function Space(){
    
    const [data, setData] = useState([]);
    const [nome, setNome] = useState('');

    const pesquisar = async () => {
        try{
            const res = await axios.get(`https://images-api.nasa.gov/search?q=${nome}`)
            //console.log(res.data)
            setData(res.data.collection.items)
        }catch(error){
            console.error("Erro ao buscar dados",error)
        }
    }

    return(
        <div>
            <h1>Imagem da NASA</h1>
            <div className="cont">
                <input type="text" 
                className="input"
                    placeholder="Digite...."
                    value={nome}
                    onChange={(e) => setNome(e.target.value)} />
                <button onClick={pesquisar}>Pesquisar</button>
            </div>
            <div className="modal">
                {
                    data.length > 0 && (
                        <div>
                            <div>
                                {(data.map((item, index)=> {
                                    if (item.links && item.links.length > 0 && item.links[0].href) {
                                        return(
                                            <div key={index}>
                                                <img src={item.links[0].href} />
                                            </div>
                                        )
                                    }
                                }))}
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
}