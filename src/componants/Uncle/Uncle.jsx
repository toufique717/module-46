import Cousin from "../../Cousin/Cousin";

 

const Uncle = () => {
    return (
        <div>
            <h1>Uncle</h1>
             <div className="flex">
             <Cousin name={'Toufique'}></Cousin>
             <Cousin name={'Hossain'}></Cousin>
             </div>
        </div>
    );
};

export default Uncle;