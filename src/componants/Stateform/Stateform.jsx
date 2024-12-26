import { useState } from "react";

 

const Stateform = () => {

    const[email,setemail] = useState(null);
    const[error,seterror] = useState('');

    const handlesubmit = e =>
    {
              e.preventDefault();
              //console.log(email)

              if(email.length <4)
              {
                seterror('email should be minimum 4')
              }

              else
              {
                seterror('');
                console.log(email)

              }
    }

    const handleemailchange = e =>
    {
          console.log(e.target.value);
          setemail(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                  <input type="text" name="name"></input>
                  <br/>
                  <input 

                  onChange={handleemailchange}

                   
                  
                  type="email" name="email"></input>
                  <br/>
                  <input type="password" name="password"></input>
                  <br/>
                  <input type="submit" value="submit"></input>
                   {console.log(error)}
            </form>
        </div>
    );
};

export default Stateform;