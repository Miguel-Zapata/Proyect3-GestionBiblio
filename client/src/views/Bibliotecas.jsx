
import {useEffect, useState} from 'react';
import axios from "axios";
import BiblioList from "../components/BiblioList";


const Bibliotecas = ()=>{

    const [listaBibliotecas, setlistaBibliotecas] = useState([]);

    useEffect(()=>{
        const getData = async ()=>{
            try{
                let response = await axios('/libraries', {
                    headers: {
                        Authorization:
                          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTNjOGQwM2E5OTM4YTRjMjUzZGY0YSIsImlhdCI6MTYzODM1MTMzMSwiZXhwIjoxNjM4NDM3NzMxfQ.vcF_58px2elxQbYsyDvCs9z2AEINWyHJ2DvdWpxMRwc",
                      },
                });
                console.log(response.data);
                setlistaBibliotecas(response.data.libraries);
            }
            catch(err){
                console.log(err);
            }
        }
        getData();
    }, []);

    return (
        <div>

            <div>
             <button>Buscar...</button>
            </div>

            
            {listaBibliotecas.map((biblioteca,i)=> {
            return(
                <div>
                    <BiblioList key={i} biblioteca={biblioteca} />
                </div>
            );
        })}
            
        </div>
    );
};

export default Bibliotecas;