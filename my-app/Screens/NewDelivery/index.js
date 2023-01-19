import { View, Text, Button } from "react-native";
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
    <View style={{ marginTop: 100 }}>
      <Text>{pickUpAddress}</Text>
      <Text>{deliveryAddress}</Text>
      <Button title="Update Pickup Address" onPress={updatePickupAddress} />
      <Button title="Update Delivery Address" onPress={updateDeliveryAddress} />
    </View>
  );
};

export default NewDelivery;
