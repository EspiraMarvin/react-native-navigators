import { View, Text, StyleSheet } from 'react-native';

function SettingScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"SettingScreen"</Text> screen!
      </Text>
    </View>
  );
}

export default SettingScreen;

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
