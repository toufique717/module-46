import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './grandfather.css'

export const AssetContext = createContext('gold');

 

const Grandfather = () => {
    return (
         
        <div className="grandfather">

           <h1>Grandfather</h1>
              <AssetContext.Provider value="gold">
              <div className="flex">
             
             <Father></Father>
             <Uncle></Uncle>
             <Aunty></Aunty>
            </div>
              </AssetContext.Provider>
        </div>
    );
};

export default Grandfather;