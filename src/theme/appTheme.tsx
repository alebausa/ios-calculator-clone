import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  base: {
    backgroundColor: 'black',
    flex: 1,
  },
  calcContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end'
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right'
  },
  prevResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: '#2d2d2d',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    padding: 10,
    fontWeight: '400'
  }
});