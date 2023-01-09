import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  SectionList,
  RefreshControl,
  FlatList,
} from 'react-native';
import PalettePreview from '../components/PalettePreview';
import axios from 'axios';

const Home = ({ navigation }) => {
  const [colorPalette, setColorPalette] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchPalette();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  });

  const handleFetchPalette = useCallback(() => {
    axios
      .get('https://color-palette-api.kadikraman.now.sh/palettes')
      .then((res) => setColorPalette(res.data));
  });
  useEffect(() => {
    handleFetchPalette();
  }, []);

  const styles = StyleSheet.create({
    list: {
      flex: 1,
      padding: 10,
      backgroundColor: 'white',
    },
    button: {
      height: 50,
      backgroundColor: 'white',
      padding: 10,
    },
    buttonText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'teal',
    },
  });
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddNewPalette')}
      >
        <Text style={styles.buttonText}>Add a color scheme</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.list}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        data={colorPalette}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PalettePreview
            onPress={() => navigation.navigate('ColorPalette', item)}
            palette={item}
          />
        )}
      />
    </>
  );
};

export default Home;
