import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from "react-native";

const ContactsItem = props => {
    return (
        <TouchableOpacity
            style={styles.contactsItem}
            onPress={props.pressed}
        >
            <View style={styles.contactsInnerItem}>
                <View style={styles.infoBox}>
                    <Image
                        source={{
                            uri: props.photo
                        }}
                        style={styles.infoBoxImg}
                    />
                    <Text style={{textAlign: 'center', flex: 1, fontSize: 18, color: '#eceff1'}}>{props.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    contactsItem: {
        width: '100%',
        padding: 10,
    },
    contactsInnerItem: {
        width: '100%',
        padding: 20,
        backgroundColor: '#263238',
        borderRadius: 10
    },
    infoBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    infoBoxImg: {
        width: 70,
        height: 70,
        marginRight: 20
    }
});

export default ContactsItem;