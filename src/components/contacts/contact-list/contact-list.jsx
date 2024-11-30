import { useEffect, useState } from "react";
import ContactItem from "../contact-item/contact-item";
import contactData from "../../../data/users.json"


function ContactList( {className = '', name}) {
    const [contacts, setContacts] = useState([]);

    useEffect(() => { 
        const filteredContacts = name ? 
        contactData.filter((contact) => contact.name.toLowerCase().includes(name.toLowerCase())) : contactData
        setContacts(filteredContacts)
    }, [name]);

    const handleContactDelete = (contact) => {
        const filteredContacts = contacts.filter((c) => c.id !== contact.id);
        setContacts(filteredContacts);
    }

    return (
        <div className={`d-flex flex-wrap gap-3 ${className}`} >
            {contacts.map((contact) => (
                <ContactItem key={contact.id} contact={contact} onDelete={handleContactDelete} />
            ))}
        </div>
    );
}

export default ContactList;