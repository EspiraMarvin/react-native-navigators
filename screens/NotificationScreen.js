import { View, Text, StyleSheet } from 'react-native';

function NotificationScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"NotificationScreen"</Text> screen!
      </Text>
    </View>
  );
}

export default NotificationScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});
