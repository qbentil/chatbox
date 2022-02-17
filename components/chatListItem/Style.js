import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-between',
    padding: 10,
  },
  lefContainer: {
    flexDirection: 'row',
  },
  midContainer: {
    justifyContent: 'space-around'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
    backgroundColor: 'gray'
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: -10
  },
  lastMessage: {
    fontSize: 16,
    color: 'grey',
    marginTop: -15
  },
  time: {
    fontSize: 14,
    color: 'grey',
    marginTop: 6
  },
});

export default Style;