import { Text,TextInput, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

// import { ScrollView } from "react-native-gesture-handler";

const GetOTP = () => {
 
  return (
    // <ScrollView>
    <View style={styles.Container} behavior="padding">
        {/* <View>
        <Image
            // style={[styles.imagestyle]}
            source={require("assets/otp.png")}
          />
        </View> */}
      <View>
        
          {/* <Text
            style={{
              fontWeight: "bold",
              marginLeft: 130,
            }}
          >
           OTP Verification
          </Text> */}
          <Text style={styles.title}>OTP Verification</Text>

          
        
      </View>

      <View style={{ marginTop: 15, }}>
        <View style={{ flexDirection: "row" ,justifyContent: "center",}}>
        <Text>
            We will send you an
          </Text>
          <Text style={[styles.promostyle]}>One Time Password</Text>

          <Text >
            on this mobile number
          </Text>
        </View>

       {/* <View style={{margin:10}}>
          <CustomInputWithIcon
                 
                label="Password*"
                placeholder="Enter password"
                type={isShowPassword ? "text" : "password"}
                suffix={
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require("assets/cancel.png")}
                  />
                }
                onSuffixClick={onSuffixClick}
              />
      
      </View> */}
        {/* <TouchableOpacity style={[styles.button]}>
          <Text
            style={{
              textAlign: "center",
              color: "#ffffff",
            }}
          >
            Apply
          </Text>
        </TouchableOpacity> */}
      </View>

      <View style={[styles.discountstyle]}>
        <View>
          <Text >Enter Mobile Number</Text>
          <TextInput style={{ fontWeight: "bold" }}>+91-9876543210</TextInput>
        </View>

       
      </View>

      
      <TouchableOpacity style={[styles.voucherstyle]}>
        <View>
         
          <Text style={{ color: "#ffffff",fontSize: 15,fontWeight: "bold" }}>GET OTP</Text>
        </View>
       
        
            
        
      </TouchableOpacity>

      {/* <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>
                Don't have an account?
              </Text>
              <Text
                style={{ textDecorationLine: "underline", fontWeight: "bold" }}
              >
                Sign up.
              </Text>
            </View> */}


{/* <Text style={styles.title}>Verify the Authorisation Code</Text>
        <Text style={styles.subTitle}>Sent to 7687653902</Text> */}
    </View>
    // </ScrollView>
  );
};

export default GetOTP;
