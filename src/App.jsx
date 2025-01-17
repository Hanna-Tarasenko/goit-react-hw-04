import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSearch = (value) => {
    setSearchParam(value);
  };

  const foundContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchParam.toLowerCase())
  );

  const onAddContact = (newContact) => {
    const contactWithID = { ...newContact, id: nanoid() };
    setContacts((prevContacts) => [...prevContacts, contactWithID]);
  };

  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox searchParam={searchParam} handleSearch={handleSearch} />
      <ContactList
        contacts={foundContacts}
        onDeleteContact={onDeleteContact}
      />{" "}
    </div>
  );
};

export default App;
