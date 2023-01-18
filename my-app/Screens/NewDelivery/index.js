import { View , Text} from "react-native"
import { useDispatch, useSelector } from "react-redux";
const NewDelivery = () =>{
    
    const { PickUpAddress } = useSelector((state) => state.pickUp);
    const { DeliveryAddress } = useSelector((state) => state.pickUp);
    console.log(PickUpAddress,"console.log(cleanedHmObj);");

    
    return (
        <View><Text>Hello guys
            {PickUpAddress}</Text>
            
            <Text>vaishnavi kulkarni
            {DeliveryAddress}</Text>
            
            </View>
    )
} 

export default NewDelivery