import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main.jsx';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
    <StatusBar style='inverted' />
      <NativeRouter>
        <Main/>
      </NativeRouter>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
