import { View , Text} from "react-native"
import { useDispatch, useSelector } from "react-redux";
const NewDelivery = () =>{
    
    const { pickUpAddress , deliveryAddress} = useSelector((state) => state.currentOrder);
        
    return (
        <View style={{marginTop:100}}><Text>Hello guys
            {pickUpAddress}</Text>
            
            <Text>vaishnavi kulkarni
            {deliveryAddress}</Text>
            
            </View>
    )
} 

export default NewDelivery