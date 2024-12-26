import { useContext } from "react";
import { AssetContext } from "../componants/Grandfather/Grandfather";

 

const Girlfriend = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h4>girlfriend</h4>
            <h1>{gift}</h1>
        </div>
    );
};

export default Girlfriend;