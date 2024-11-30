import { useEffect, useState } from "react";
import ContactItem from "../contact-item/contact-item";
import contactData from "../../../data/users.json"


function ContactList() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => { 
        setContacts(contactData)
    }, []);


    return (
        <div className="d-flex flex-wrap gap-3">
            <h1>Contacts List</h1>
            <div>
                {contacts.map((contact) => (
                    <ContactItem key={contact.id} contact={contact} />
                ))}
            </div>
        </div>
    );
}

export default ContactList;