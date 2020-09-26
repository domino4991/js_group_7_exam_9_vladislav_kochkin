import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getContacts, removeContact, showModalHandler} from "../../store/actions/contactsActions";
import ContactsItems from "../../components/ContactsItems/ContactsItems";
import ContactModal from "../../components/UI/ContactModal/ContactModal";
import {Sugar} from "react-preloaders";

const MainPage = () => {
    const {
        contactsItems,
        showModal,
        contactInfo,
        loading
    } = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    return (
        <section className="Main-page">
            <Sugar customLoading={loading} />
            <ContactModal
                show={showModal}
                contact={contactInfo}
                closed={() => dispatch(showModalHandler(false))}
                clicked={() => dispatch(removeContact(contactInfo.id, contactsItems))}
            />
            <h2>Main page</h2>
            {contactsItems && <ContactsItems
                contacts={contactsItems}
            />}
        </section>
    );
};

export default MainPage;