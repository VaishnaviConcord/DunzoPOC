import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  
  Container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promostyle: {
    // marginLeft: 1,
    // marginTop: 1,
    fontSize: 15,
    fontWeight: "bold",
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    marginStart: 20,
    fontWeight:'bold',
    marginLeft: 120,
    marginTop:50
},
// subTitle: {
//     textAlign: 'left',
//     fontSize: 16,
//     marginStart: 20,
//     marginTop: 10
// },
//   includestyle: {
//     fontSize: 10,
//     marginTop: 20,
//     marginLeft: 10,
//     color: "#A9A9A9",
//   },
  // TextStyle: {
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 10,
  //   height: 40,
  //   backgroundColor: "#E5E4E2",
  //   borderRadius: 8,
  //   padding: 10,
  //   marginHorizontal: 20,
  //   width: 335,
  // },
  imagestyle: {
    marginLeft: 210,
    marginTop: 5,
    width: 20,
    height: 20,
  },
  // button: {
  //   marginTop: 20,
  //   textAlign: "center",
  //   // backgroundColor: "#604099",
  //   width: 180,
  //   padding: 19,
  //   borderRadius: 28,
  //   marginLeft: 100,
  // },
  discountstyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    height: 70,
    borderColor: "#e8e8e8",
    borderBottomWidth: 3,
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 10,
    width: 360,
  },
  
  voucherstyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    height: 70,
    backgroundColor: "#FC8019",
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 20,
    width: 340,
    color: "#ffffff",
  },
  
})

export default styles
