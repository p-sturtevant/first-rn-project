import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ hexCode, colorName }) => {
  const textColor =
    parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white';
  const styles = StyleSheet.create({
    box: {
      padding: 10,
      borderRadius: 3,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    text: {
      fontWeight: 'bold',
      color: textColor,
    },
  });

  const colorStyle = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[styles.box, colorStyle]}>
      <Text style={styles.text}>
        {colorName} {hexCode}
      </Text>
    </View>
  );
};

export default ColorBox;
