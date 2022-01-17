
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Amplify from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)
import Home from './src/Home';
import { withAuthenticator } from 'aws-amplify-react-native'
import { Auth } from 'aws-amplify'

async function signOut() {
  try {
    await Auth.signOut({ global: true });
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Home />
      <button onClick={signOut}>sign out</button>
    </View>
  );
}

export default withAuthenticator(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
