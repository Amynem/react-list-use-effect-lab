import { PageLayout } from "../components/layouts";
import { ContactList} from "../components/contacts";
import { useState } from "react";


function Home() {
    const [ searchName, setSearchName] = useState("");

    const onSearch = (value) => {
        setSearchName(value);
    };
 
    return (
    <PageLayout>
        <h1> Contact List </h1>
        <input
      value={searchName}
      onChange={(event) => {
        onSearch(event.target.value);
      }}
      id="search"
      type="text"
      placeholder="Search"
      className="form-control mb-3"
    />

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quos totam quis commodi optio sint temporibus odit sed inventore nisi dolorem maxime quaerat labore aliquam, consectetur aspernatur repellendus tempore ullam.</p>
        <ContactList name={searchName}/>
    </PageLayout>
    );
    
}

export default Home;
