import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fetchPostDetails} from '../utils/api';
import {Post} from '../models/Post';
import {DetailsScreenRouteProp} from '../models';

interface DetailsScreenProps {
  route: DetailsScreenRouteProp;
}
//This defines a functional component named DetailsScreen using the React.FC type annotation. It takes props conforming to the DetailsScreenProps interface.
const DetailsScreen: React.FC<DetailsScreenProps> = ({route}) => {
  //The component extracts the postId parameter from the route.params object using destructuring, thanks to the type information provided by DetailsScreenRouteProp.
  const {postId} = route.params;
  //It uses the useState hook to manage the state of the post details. The state variable postDetails can be either a Post object or null depending on whether the details have been fetched.
  const [postDetails, setPostDetails] = useState<Post | null>(null);

  //The useEffect hook is used to fetch post details when the component mounts or the postId prop changes (due to the dependency array [postId]).
  //Inside the effect:
  /**
   The fetchPostDetails function is called with the postId.
   On successful response, it updates the postDetails state using setPostDetails.
   In case of errors, it logs the error to the console.
   */
  useEffect(() => {
    fetchPostDetails(postId)
      .then(response => setPostDetails(response))
      .catch(error => console.error(error));
  }, [postId]);

  //The component checks if the postDetails state is still null (meaning details haven't been fetched yet).
  //If null, it returns null to prevent rendering any content until details are available.
  //If postDetails is not null, it renders for displaying the details.
  if (!postDetails) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{postDetails.title}</Text>
      <Text style={styles.body}>{postDetails.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5', // Light background for readability
    padding: 20,
  },
  title: {
    fontSize: 20, // Adjusted slightly for better hierarchy
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    lineHeight: 20, // Adjust line height for better readability
  },
});

export default DetailsScreen;
