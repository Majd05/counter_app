import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [ counter, setCounter ] = useState(0);
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.header}>React Native Counter App</Text>
      <View style={styles.bodyContainer}>
        <Text style={styles.counterOutput}>{counter}</Text>
        <View style={styles.buttonsContainer}>
          <Button title="+" onPress={ ()=> setCounter( counter + 1 ) } />
          <Button title="-" disabled={counter === 0 ? true : false} onPress={ ()=> setCounter( counter - 1 ) } />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#fff',
    padding: 5,
    flex: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  bodyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  counterOutput: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    width: '50%',
    height: 80,
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
  
});