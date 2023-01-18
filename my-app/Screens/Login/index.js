import { View , Text} from "react-native"
import { useDispatch, useSelector } from "react-redux";
const Login = () =>{
    const { cleanedHmObj } = useSelector((state) => state.hmCleaner);
    console.log(cleanedHmObj,"console.log(cleanedHmObj);");
    return (
        <View><Text>Hello guys
            {cleanedHmObj}</Text></View>
    )
} 

export default Login