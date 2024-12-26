 

const Simpleform = () => {

    const handlesubmit = e =>
    {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);

         console.log('clicked');
    }
    return (
        <div>

            <form onSubmit={handlesubmit}>
                  <input type="text" name="name"></input>
                  <br/>
                  <input type="email" name="email"></input>
                  <br/>
                  <input type="text" name="phone"></input>
                  <br/>
                  <input type="submit" value="submit"></input>
                   
            </form>
            
        </div>
    );
};

export default Simpleform;