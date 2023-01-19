import {
    Text,
    View,
    Image,
    TouchableOpacity,
    OTPInputView,
    TextInput,
  } from "react-native";
  
  import styles from "./styles";
  // import assets from "../../assets"
  
  // import { ScrollView } from "react-native-gesture-handler";
  
  const Verification = () => {
    return (
      // <ScrollView>
      <View style={styles.Container}>
        {/* <View> 
           <Image
              // style={[styles.imagestyle]}
              source={require("assets/otp1.png")}
            ></Image>
          </View>  */}
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
          }}
        >
          
          <Text style={styles.title}>OTP Verification</Text>
        </View>
  
        <View style={{ marginTop: 15 }}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text>Enter the OTP sent to </Text>
            <Text style={[styles.promostyle]}>+91-9876543210</Text>
          </View>
  
          
          
        </View>
  
        <View style={[styles.discountstyle]}>
          <TextInput>458799</TextInput>
          
        </View>
        <View style={{ flexDirection: "row", marginLeft: 25 }}>
          <Text>Don't recive the otp?</Text>
          <Text style={{ color: "red" }}>Resend OTP</Text>
        </View>
  
        <TouchableOpacity style={[styles.voucherstyle]}>
          <View>
            <Text style={{ color: "#ffffff", fontSize: 15, fontWeight: "bold" }}>
              Verify $ PROCEED
            </Text>
          </View>
        </TouchableOpacity>
  
        {/* <Text style={styles.title}>Verify the Authorisation Code</Text>
          <Text style={styles.subTitle}>Sent to 7687653902</Text> */}
  
        {/* <TextInput
          style={{ width: "80%", height: 200 }}
          pinCount={4}
          //   code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          // onCodeFilled = {(code => {
          //     console.log(`Code is ${code}, you are good to go!`)
          // })}
          placeholderCharacter={"*"}
          placeholderTextColor={"red"}
          selectionColor={"#03DAC6"}
        /> */}
      </View>
      // </ScrollView>
    );
  };
  
  export default Verification;
  