//Defining a type alias like RootStackParamList is a good practice for maintaining type safety and improving code readability in React Navigation projects.
export type RootStackParamList = {
  Home: undefined;
  Details: {postId: number};
};
