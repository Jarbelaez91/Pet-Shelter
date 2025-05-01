import NewDonations from "./NewDonations";
import NewMessages from "./NewMessages";

function Admin (){

    return (
        <div>
            <h1>
                <NewMessages/>
            </h1>
            <h1>
                <NewDonations/>
            </h1>
            <h1>
                Our current Pets
            </h1>
        </div>
    )
} 

export default Admin;