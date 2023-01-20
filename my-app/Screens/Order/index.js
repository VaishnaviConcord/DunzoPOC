import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/EvilIcons";

const Order = () => {
    return (
        <>
            <View style={
                styles.header
            }>
                <Text style={
                    styles.headerTitle
                }>Orders
                </Text>
                <View style={
                    styles.bottomContainer
                }>
                    <View style={
                        styles.bottomContainerTitle
                    }></View>
                    <Text style={
                        styles.bottomContainerHeaderText
                    }>Send packages</Text>
                    <Text style={
                        styles.orderDate
                    }>Jan 16, 11:10 am</Text>

                    <View style={
                        styles.homeView
                    }>
                        <Icon name="arrow-up"
                            size={25}
                            style={
                                styles.iconArrowUp
                            }/>
                        <Text style={
                            styles.homeText
                        }>HOME</Text>
                        <View style={
                            {}
                        }></View>
                        <Icon name="arrow-down"
                            size={25}
                            style={
                                styles.iconArrowDown
                            }/>
                        <Text style={
                            styles.officeText
                        }>OFFICE</Text>
                    </View>
                    <View style={
                        styles.buttonView
                    }>
                        <Text style={
                            styles.orderPicupAddress
                        }>D1 304, 3rd floor,cit...</Text>
                        <Text style={
                            styles.orderplacedAddress
                        }>swiftwin technology...</Text>
                    </View>
                    <TouchableOpacity style={
                        styles.button
                    }>
                        <Text style={
                            styles.buttonText
                        }>Repeat Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    header: {
        height: 300,
        backgroundColor: "#FC8019"

    },
    headerTitle: {
        color: "#FFFFFF",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 100,
        marginLeft: 20
    },
    bottomContainer: {
        backgroundColor: "#FFFFFF",
        marginTop: 15,
        height: 650,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    bottomContainerTitle: {
        backgroundColor: "#F5F5F5",
        height: 25,
        width: 360,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    bottomContainerHeaderText: {
        fontSize: 15,
        marginLeft: 20,
        marginTop: 50,
        fontWeight: 'bold'
    },
    orderDate: {
        fontSize: 12,
        color: "#C4C4C4",
        marginLeft: 20
    },
    iconArrowUp: {
        marginLeft: 40,
        color: "#C4C4C4"
    },
    homeText: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    iconArrowDown: {
        marginLeft: 70,
        color: "#C4C4C4"
    },
    officeText: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    orderPicupAddress: {
        marginLeft: 75,
        fontSize: 12,
        color: "#C4C4C4"
    },
    orderplacedAddress: {
        marginLeft: 35,
        fontSize: 12,
        color: "#C4C4C4"
    },
    buttonView: {
        flexDirection: "row"
    },
    button: {
        borderRadius: 25,
        padding: 10,
        marginLeft: 230,
        marginTop: 30,
        width: 100,
        backgroundColor: "#FC8019"
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 12,
        textAlign: "center",
        fontWeight: "bold"
    },
    homeView: {
        flexDirection: "row",
        marginTop: 30
    }
})
export default Order
