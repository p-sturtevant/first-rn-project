import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import React from 'react';
import ColorBox from './components/ColorBox';
const App = () => {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      paddingHorizontal: 10,
    },
    heading: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
  });
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colors
        </Text>
        <ColorBox hexCode="#2aa198" colorName="Cyan" />
        <ColorBox hexCode="#268bd2" colorName="Blue" />
        <ColorBox hexCode="#d33682" colorName="Magenta" />
        <ColorBox hexCode="#cb4b16" colorName="Orange" />
      </View>
    </SafeAreaView>
  );
};

export default App;
