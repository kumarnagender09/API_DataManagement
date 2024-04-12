import React, {useMemo, useCallback} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Post} from '../models';

//This defines an interface named ListItemProps which specifies the expected properties for the ListItem component:
/*
  item: A Post object containing data for the list item.
  computeDetails: A function that takes a Post object and returns a string with details (presumably calculated based on the Post data).
  onItemClick: A function called when the user clicks the list item, accepting the id of the Post object.
*/
interface ListItemProps {
  item: Post;
  computeDetails: (item: Post) => string;
  onItemClick: (id: number) => void;
}

//This defines a functional component named ListItem using the React.FC type annotation for a function component with props.
//It takes the defined ListItemProps as the type for its props.
const ListItem: React.FC<ListItemProps> = ({
  item,
  computeDetails,
  onItemClick,
}) => {
  //The useMemo hook is used to memoize the result of the computeDetails function.
  //This means the function will only be called again if its dependencies (computeDetails and item) change.
  //This improves performance as the details might not need recalculation for every render.
  const details = useMemo(() => computeDetails(item), [computeDetails, item]);
  //A MAX_DETAILS_LENGTH constant defines the maximum length for displayed details.
  const MAX_DETAILS_LENGTH = 200; // Adjust based on your needs
  //detailsToDisplay uses optional chaining (?.) to handle the case where details might be undefined initially.
  //Then, it slices the details string to fit the maximum length, storing the truncated result.
  const detailsToDisplay = details?.slice(0, MAX_DETAILS_LENGTH);
  //The useCallback hook is used to create a memoized version of the handlePress function.
  //This ensures the function reference doesn't change on every render, preventing unnecessary re-renders of child components that rely on this function (e.g., TouchableOpacity).
  const handlePress = useCallback(() => {
    onItemClick(item.id);
  }, [item.id, onItemClick]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.id}>Id : {item.id}</Text>
        <Text style={styles.title}>Title : {item.title}</Text>
        <Text style={styles.details}>
          Details : {detailsToDisplay}
          {/* Conditional rendering displays "... (see more)" if the details exceed the limit. */}
          {details.length > MAX_DETAILS_LENGTH && '... (see more)'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

//Styles for the UI elements are defined in a separate styles object using StyleSheet.create.
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    padding: 10,
  },
  id: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    flex: 1,
  },
  details: {
    fontStyle: 'italic',
    color: '#808080',
  },
});

export default ListItem;
