import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: '#fefefe',
  },

  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#fefefe',
  },

  top: {
 //   flex: 0.5,
   // justifyContent: "center",
    marginTop: 5,
  },

  middle: {
 //   flex: 0.7,
  },

  bottom: {
 //   flex: 0.3,
    justifyContent: "center",
  },

  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "salmon",
    alignSelf: "center",
    marginBottom: 60,
    minWidth: "90%",
  },

  tituloApp: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: "bold",
 //   color: 'white',
    fontFamily: "Cochin",
    padding: 10,
  },

  textLabel: {
    paddingBottom: 5,
 //   color: "white",
    fontFamily: "Cochin",
  },

  input: {
    height: 45,
    borderWidth: 1,
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
