import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000000c0",
    color: "white",
  },

  top: {
    flex: 0.2,
    justifyContent: "center"
  },

  middle: {
    flex: 0.60,
  },

  bottom: {
    flex: 0.20,
    justifyContent: "center",
  },

  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "center",
    marginHorizontal: "9%",
    marginBottom: 60,
    minWidth: "90%",
  },

  tituloApp: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: "bold",
    color: 'white',
    fontFamily: "Cochin",
    padding: 20,
  },

  textLabel: {
    paddingBottom: 5,
    color: "white",
    fontFamily: "Cochin",
  },

  input: {
    height: 45,
    color: "white",
    borderWidth: 1,
    borderColor: 'white',
    fontSize: 18,
    padding: 10,
  },

  texto: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
  },

  textoErro: {
    fontSize: 16,
    color: 'red',
    marginBottom: 5,
  },  

  image: {
    flex: 1,
  },

  baseText: {
    fontFamily: "Cochin"
  }
});

export { styles };
