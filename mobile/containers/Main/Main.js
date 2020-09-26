import React, {useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Modal, Image, Linking, TouchableOpacity } from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import ContactsItem from "../../components/ContactsItem";
import {closeModalHandler, getContactId, getContacts} from "../../store/actions";

const Main = () => {
    const {
        contactsItems,
        showModal,
        contactInfo,
        error
    } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    return (
        <View style={styles.container}>
            {error ? <Text>{error.message}</Text> :
                (
                    <>
                        <Modal
                            animationType="fade"
                            visible={showModal}
                        >
                            <View style={styles.centeredView}>

                                <View style={styles.modalView}>
                                    <View style={styles.modalContent}>
                                        {
                                            contactInfo &&
                                            <>
                                                <Text style={{
                                                    fontSize: 30,
                                                    fontWeight: 'bold'
                                                }}>{contactInfo.name}</Text>
                                                <Image
                                                    source={{
                                                        uri: contactInfo.photo
                                                    }}
                                                    style={styles.modalImg}
                                                />
                                                <Text
                                                    onPress={() => Linking.openURL(`tel:${contactInfo.phone}`)}
                                                    style={{
                                                        marginBottom: 20,
                                                        fontSize: 20
                                                    }}
                                                >
                                                    Phone: {contactInfo.phone}
                                                </Text>
                                                <Text
                                                    onPress={() => Linking.openURL(`mailto:${contactInfo.email}`)}
                                                    style={{
                                                        marginBottom: 20,
                                                        fontSize: 20
                                                    }}
                                                >
                                                    Email: {contactInfo.email}
                                                </Text>
                                            </>
                                        }
                                    </View>
                                    <TouchableOpacity
                                        style={styles.modalBtn}
                                        onPress={() => dispatch(closeModalHandler())}
                                    >
                                        <Text>Back to list</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                        <Text style={{fontSize: 20, paddingTop: 20, paddingBottom: 20}}>Contacts list</Text>
                        <ScrollView style={styles.scrollContainer}>
                        {contactsItems && Object.keys(contactsItems).map(item => <ContactsItem
                            key={item}
                            name={contactsItems[item].name}
                            photo={contactsItems[item].photo}
                            pressed={() => dispatch(getContactId(item))}
                        />)}
                        </ScrollView>
                    </>
                )
            }

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        paddingTop: 40
    },
    scrollContainer: {
        width: '100%',
    },
    centeredView: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: '#212121',
    },
    modalView: {
        width: '100%',
        alignItems: 'center',
    },
    modalContent: {
        height: '90%',
        width: '95%',
        alignItems: 'center',
    },
    modalImg: {
        width: 200,
        height: 200,
        marginTop: 50,
        marginBottom: 50
    },
    modalBtn: {
        padding: 20,
        width: '95%',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#43a047'
    }
});

export default Main;