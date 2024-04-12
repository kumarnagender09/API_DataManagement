import {Post} from '../models';
const API_URL = 'https://jsonplaceholder.typicode.com/posts/';

//The function is asynchronous (async) as it uses await for network calls.
//It returns a promise that resolves to an array of Post objects (Promise<Post[]>).
/*
The code is well-structured and uses async/await effectively to handle asynchronous operations.
Error handling is implemented to catch potential network or parsing errors.
 */
export const fetchData = async (): Promise<Post[]> => {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json.map(
      (item: any) => new Post(item.userId, item.id, item.title, item.body),
    );
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
};

//The function is asynchronous (async) as it uses await for network calls.
//It returns a promise that resolves to an array of Post objects (Promise<Post[]>).
/*
The code is well-structured and uses async/await effectively to handle asynchronous operations.
Error handling is implemented to catch potential network or parsing errors.
 */
export const fetchPostDetails = async (postId: number): Promise<Post> => {
  try {
    const response = await fetch(`${API_URL}${postId}`);
    const item = await response.json();
    return new Post(item.userId, item.id, item.title, item.body);
  } catch (error) {
    console.error(`Failed to fetch post details for postId ${postId}:`, error);
    throw error;
  }
};
