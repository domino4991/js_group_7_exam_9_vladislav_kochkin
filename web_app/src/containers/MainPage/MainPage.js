import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getContacts, showModalHandler} from "../../store/actions/contactsActions";
import ContactsItems from "../../components/ContactsItems/ContactsItems";
import ContactModal from "../../components/UI/ContactModal/ContactModal";

const MainPage = () => {
    const {contactsItems, showModal, contactInfo} = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    return (
        <section className="Main-page">
            {showModal && <ContactModal
                show={showModal}
                contact={contactInfo}
                closed={() => dispatch(showModalHandler(false))}
            />}
            <h2>Main page</h2>
            {contactsItems && <ContactsItems
                contacts={contactsItems}
            />}
        </section>
    );
};

export default MainPage;