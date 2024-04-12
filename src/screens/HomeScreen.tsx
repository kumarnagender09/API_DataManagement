import React, {useEffect, useState, useCallback} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import ListItem from '../components/ListItem';
import {fetchData} from '../utils/api';
import {useNavigation} from '@react-navigation/native';
import useHeavyComputation from '../hooks/useHeavyComputation';
import {Post} from '../models/Post';

//This defines a functional component named HomeScreen using the React.FC type annotation.
const HomeScreen: React.FC = () => {
  //The component uses the useState hook to manage an array of Post objects (data) which will store the fetched post data.
  const [data, setData] = useState<Post[]>([]);
  //It uses the useNavigation hook to access navigation functionalities within the component.
  const navigation = useNavigation();
  //It retrieves the computeDetails function from the useHeavyComputation custom hook.
  //This function will likely be used in the ListItem component to perform calculations on the post data.
  const computeDetails = useHeavyComputation();

  //The useEffect hook is used with an empty dependency array ([]). This ensures the effect runs only once after the component mounts.
  //Inside the effect:
  /**
   The fetchData function is called to retrieve data from the API.
   On successful response, it uses setData to update the component's state with the fetched posts.
   In case of errors, it logs the error to the console using console.error.
   */
  useEffect(() => {
    fetchData()
      .then(response => {
        setData(response);
      })
      .catch(error => console.error(error));
  }, []);

  //The useCallback hook is used to create a memoized version of the handleItemClick function.
  //This ensures the function reference doesn't change on every render, preventing unnecessary re-renders of child components like ListItem.
  //The function takes an itemId (number) and uses navigation.navigate to navigate to the 'Details' screen, passing the postId as a parameter.
  const handleItemClick = useCallback(
    (itemId: number) => {
      navigation.navigate('Details', {postId: itemId});
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ListItem
            item={item}
            computeDetails={computeDetails}
            onItemClick={handleItemClick}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
  },
});

export default HomeScreen;
