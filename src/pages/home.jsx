import { PageLayout } from "../components/layouts";
import { ContactList} from "../components/contacts";


function Home() {
    return (
    <PageLayout>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quos totam quis commodi optio sint temporibus odit sed inventore nisi dolorem maxime quaerat labore aliquam, consectetur aspernatur repellendus tempore ullam.</p>
        <ContactList/>
    </PageLayout>
    );
    
}

export default Home;
