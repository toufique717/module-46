 
const Reusableform = ({formtitle,handlesubmit,children,submitbuttontext='submit'}) => {


    const handlelocalsubmit = e =>
    {
        e.preventDefault();
        const data = 
        {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,

             
        }
        handlesubmit(data);
    }
     
    return (
        <div>

         <form onSubmit={handlelocalsubmit}>

             {children}
                  <input type="text" name="name"></input>
                  <br/>
                  <input type="email" name="email"></input>
                  <br/>
                  <input type="text" name="phone"></input>
                  <br/>
                  <input type="submit" value={submitbuttontext}></input>
                   
            </form>
            
        </div>
    );
};

export default Reusableform;