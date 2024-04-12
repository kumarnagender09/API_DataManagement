# API_DataManagement
Problem Description:

Create a simple application that fetches data from a public API endpoint and displays it in a list format. However, the API response contains a large dataset, and each item in the list requires heavy computation to display additional details. Your task is to optimize the application using React Native hooks and ensure efficient rendering and data management.

Requirements:

1. Data Fetching and Rendering:

- Fetch data from the provided API endpoint `https://jsonplaceholder.typicode.com/posts` when the component mounts using the `useEffect` hook.

- Display the fetched data in a FlatList component.

- Each item in the list should display the fetched data, including `id` and `title` fields.

2. Heavy Computation Optimization:

- Each item in the list requires heavy computation to display additional details. Implement a heavy computation function using the `useMemo` hook to optimize performance.

- The heavy computation function should take an item's data as input and return computed details, such as complex calculations or transformations.

- Log the time taken for the heavy computation function to run on each render.

3. Callback Memoization:

- Create a child component that displays details of an item when clicked. Ensure that the child component retrieves data from the API endpoint https://jsonplaceholder.typicode.com/posts/{postId} by fetching the post details using the post's ID. Display the same content as shown on the list page for the selected item.

- Pass a callback function from the parent component to the child component using props.

- Memoize the callback function using the `useCallback` hook to prevent unnecessary re-renders.

- Log a message in the child component when it re-renders due to changes in props.

Styling:

Apply basic styling to the counter and buttons to make them clearly visible and distinct.

Purpose:

Evaluation Criteria:

- Accuracy and completeness of implementation of all requirements.

- Proper usage of useEffect, useMem, and useCallback hooks.

- Efficiency of data fetching, heavy computation, and rendering.

- Proper handling of state management and updates.

- Clarity, readability, and organization of code.

Ref API Documentation: JSONPlaceholder API Documentation: JSONPlaceholder API
