import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter(prevState => prevState + 1)
  }
  const decrement = () => {
    setCounter(prevState => prevState - 1)
  }
  const reset = () => {
    setCounter(0)
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{counter}</Text>
      <View style={{flexDirection: 'row', marginTop: 20}}>
      <TouchableOpacity onPress={increment} style={{padding: 10, backgroundColor: 'blue', borderRadius: 15, marginRight: 10}}><Text style={{fontSize: 18 ,color: '#fff'}}>Increment</Text></TouchableOpacity>
      <TouchableOpacity disabled={counter === 0 ? true : false} onPress={decrement} style={{padding: 10, backgroundColor: 'red', borderRadius: 15}}><Text style={{fontSize: 18 ,color: '#fff'}}>Decrement</Text></TouchableOpacity>
      </View>
      <TouchableOpacity disabled={counter === 0 ? true : false} onPress={reset} style={{marginTop: 20, justifyContent: 'center', alignItems: 'center' ,padding: 10, backgroundColor: 'green', borderRadius: 15}}><Text style={{fontSize: 18 ,color: '#fff'}}>Decrement</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
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
