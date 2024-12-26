import { useEffect, useRef } from "react";


const Reform = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);


    useEffect(()=>
        {
            nameRef.current.focus();
        },[])

    const handlesubmit = e =>
    {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(phoneRef.current.value);

         

    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                  <input ref={nameRef} type="text" name="name"></input>
                  <br/>
                  <input ref={emailRef} type="email" name="email"></input>
                  <br/>
                  <input  ref={phoneRef} type="text" name="phone"></input>
                  <br/>
                  <input type="submit" value="submit"></input>
                   
            </form>
        </div>
    );
};

export default Reform;