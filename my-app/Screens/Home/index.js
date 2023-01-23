import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

const Home = () => {
  return (
      <>
          <View style={
              styles.container
          }>
              <Image
            style={styles.imageStyles}
            source={require("../../assets/home.jpg")}
          />
              <View style={styles.iconRow}>
                  <Icon name="user"
                      size={35}
                      />                   
              </View>
              <View style={styles.iconRowText}><Text style={styles.iconText}>USER</Text></View>

          </View>
      </>
  );
}
const styles = StyleSheet.create({
  container: {
      width: 500,
      height: 700,
      backgroundColor: "#FFFFFF"
  },
  imageStyles: {
      width: 350,
      height: 270,
      marginTop: 50
  },
  iconRow:{
      flexDirection:"row",
      marginTop:200,
      marginLeft:50,
      marginRight:50
  },
  iconRowText:{
    flexDirection:"row",
  },
  iconText:{
 marginLeft:49,
 fontSize:13,
 fontWeight:"bold"
  }
})
export default Home
