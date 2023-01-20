import { Text, View,TextInput, Image,Button } from "react-native";

import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setPickupAddress , setDeliveryAddress} from "../../store/reducers/currentOrder";


const NewDelivery = () => {
  const { pickUpAddress, deliveryAddress } = useSelector(
        (state) => state.currentOrder
      );
    
      const dispatch = useDispatch()
      const updatePickupAddress = () => {
        dispatch(setPickupAddress("planet earth"))
      };
      const updateDeliveryAddress = () => {
        dispatch(setDeliveryAddress("planet mars"))
      };
  
  return (
    <View>
      <View style={[styles.includestyle]}>
        {/* <Image
            style={[styles.imagestyle]}
            source={require("assets/eye1.png")}
          /> */}

        <Text style={{ color: "#A9A9A9" }}>Pickup address*</Text>
        <TextInput style={{ fontWeight: "bold" }}>Search pickup location { pickUpAddress }</TextInput>
        <Button title="Update Pickup Address" onPress={updatePickupAddress} />
      </View>

      <View style={[styles.includestyle]}>
        {/* <Image
            style={[styles.imagestyle]}
            source={require("assets/eye1.png")}
          /> */}

        <Text style={{ color: "#A9A9A9" }}>Delivery address*</Text>
        <TextInput style={{ fontWeight: "bold" }}>Search delivery location { deliveryAddress }</TextInput>
        <Button title="Update Delivery Address" onPress={updateDeliveryAddress}/>
      </View>

      {/* <Button title="Update Pickup Address" onPress={updatePickupAddress} />
       <Button title="Update Delivery Address" onPress={updateDeliveryAddress}/> */}

      <View style={[styles.includestyle]}>
        {/* <Image
            style={[styles.imagestyle]}
            source={require("assets/eye1.png")}
          /> */}

        <Text style={{ color: "#A9A9A9" }}>Select Package contents*</Text>
        <TextInput style={{ fontWeight: "bold" }}>e.g.Food,Document</TextInput>
      </View>

      <View style={styles.buttonText}>
        {/* <Text>Cancel</Text> */}
        <Text>Done</Text>
      </View>
    </View>
  );
};

export default NewDelivery;

