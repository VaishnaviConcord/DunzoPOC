import { StyleSheet } from "react-native";

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
    textAlign: "left",
    fontSize: 20,
    marginStart: 20,
    fontWeight: "bold",
    marginLeft: 120,
    marginTop:50
  },

  imagestyle: {
    marginLeft: 210,
    marginTop: 5,
    width: 20,
    height: 20,
  },

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
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});

export default styles;
