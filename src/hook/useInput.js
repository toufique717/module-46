import { useState } from "react"

const useInputState = (defaultvalue=null) =>
{
    const[value,setValue] = useState(defaultvalue);
    const handlechange = e =>
    {
        setValue(e.target.value);
    }

    return[value,handlechange];
}

export default useInputState;