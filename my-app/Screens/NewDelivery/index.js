// import { View , Text} from "react-native"
// import { useDispatch, useSelector } from "react-redux";
// const NewDelivery = () =>{
    
//     const { PickUpAddress } = useSelector((state) => state.pickUp);
//     const { DeliveryAddress } = useSelector((state) => state.pickUp);
//     console.log(PickUpAddress,"console.log(cleanedHmObj);");

    
//     return (
//         <View><Text>Hello guys
//             {PickUpAddress}</Text>
            
//             <Text>vaishnavi kulkarni
//             {DeliveryAddress}</Text>
            
//             </View>
//     )
// } 

// export default NewDelivery

import { Text, View,TextInput, Image, TouchableOpacity } from "react-native";
// import React, { useRef } from "react";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";

const NewDelivery  = () => {
  const { PickUpAddress } = useSelector((state) => state.pickUp);
    const { DeliveryAddress } = useSelector((state) => state.pickUp);
  //   const draftButtonRef = useRef();
  return (
    <View>
      <View style={[styles.includestyle]}>
        {/* <Image
            style={[styles.imagestyle]}
            source={require("assets/eye1.png")}
          /> */}

        <Text style={{ color: "#A9A9A9" }}>Pickup address*</Text>
        <TextInput style={{ fontWeight: "bold" }}>Search pickup location { PickUpAddress }</TextInput>
      </View>

      <View style={[styles.includestyle]}>
        {/* <Image
            style={[styles.imagestyle]}
            source={require("assets/eye1.png")}
          /> */}

        <Text style={{ color: "#A9A9A9" }}>Delivery address*</Text>
        <TextInput style={{ fontWeight: "bold" }}>Search delivery location { DeliveryAddress }</TextInput>
      </View>

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

export default NewDelivery ;
