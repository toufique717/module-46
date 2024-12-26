import useInputState from "../../hook/useInput";

 ;

const Hookform = () => {


    const [name,handlechangename]=useInputState('Toufique Hossain')

    const handlesubmit = e =>

       
    {
        e.preventdefault();
        console.log('form data',name);
    }
    return (
        <div>

          <form onSubmit={handlesubmit}>
                  <input value={name} onChange={handlechangename} type="text" name="name"></input>
                  <br/>
                  <input type="email" name="email"></input>
                  <br/>
                  <input type="password" name="password"></input>
                  <br/>
                  <input type="submit" value="submit"></input>
                   
            </form>
            
        </div>
    );
};

export default Hookform;