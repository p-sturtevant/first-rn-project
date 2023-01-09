import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  SectionList,
  FlatList,
} from 'react-native';
import PalettePreview from '../components/PalettePreview';
const Home = ({ navigation }) => {
  const COLOR_PALETTES = [
    {
      paletteName: 'Solarized',
      colors: [
        { colorName: 'Base03', hexCode: '#002b36' },
        { colorName: 'Base02', hexCode: '#073642' },
        { colorName: 'Base01', hexCode: '#586e75' },
        { colorName: 'Base00', hexCode: '#657b83' },
        { colorName: 'Base0', hexCode: '#839496' },
        { colorName: 'Base1', hexCode: '#93a1a1' },
        { colorName: 'Base2', hexCode: '#eee8d5' },
        { colorName: 'Base3', hexCode: '#fdf6e3' },
        { colorName: 'Yellow', hexCode: '#b58900' },
        { colorName: 'Orange', hexCode: '#cb4b16' },
        { colorName: 'Red', hexCode: '#dc322f' },
        { colorName: 'Magenta', hexCode: '#d33682' },
        { colorName: 'Violet', hexCode: '#6c71c4' },
        { colorName: 'Blue', hexCode: '#268bd2' },
        { colorName: 'Cyan', hexCode: '#2aa198' },
        { colorName: 'Green', hexCode: '#859900' },
      ],
    },

    {
      paletteName: 'Rainbow',
      colors: [
        { colorName: 'Red', hexCode: '#FF0000' },
        { colorName: 'Orange', hexCode: '#FF7F00' },
        { colorName: 'Yellow', hexCode: '#FFFF00' },
        { colorName: 'Green', hexCode: '#00FF00' },
        { colorName: 'Violet', hexCode: '#8B00FF' },
      ],
    },
    {
      paletteName: 'Frontend Masters',
      colors: [
        { colorName: 'Red', hexCode: '#c02d28' },
        { colorName: 'Black', hexCode: '#3e3e3e' },
        { colorName: 'Grey', hexCode: '#8a8a8a' },
        { colorName: 'White', hexCode: '#ffffff' },
        { colorName: 'Orange', hexCode: '#e66225' },
      ],
    },
  ];

  const styles = StyleSheet.create({
    heading: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    container: {
      paddingTop: 50,
      paddingHorizontal: 10,
      backgroundColor: 'white',
      minHeight: '100%',
    },
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={COLOR_PALETTES}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            onPress={() => navigation.navigate('ColorPalette', item)}
            palette={item}
          />
        )}
      />
    </View>
  );
};

export default Home;
