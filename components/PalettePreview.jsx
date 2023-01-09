import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

const PalettePreview = ({ palette, onPress }) => {
  const styles = StyleSheet.create({
    text: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 10,
    },
    box: {
      height: 30,
      width: 30,
      marginRight: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 1,
      elevation: 2,
    },
    list: {
      marginBottom: 20,
      flexDirection: 'row',
    },
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{palette.paletteName}</Text>
      <FlatList
        style={styles.list}
        data={palette.colors.slice(0, 5)}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.hexCode }]} />
        )}
      />
    </TouchableOpacity>
  );
};

export default PalettePreview;
