# API_DataManagement
This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
=======================================================
# Problem Description:
=======================================================


Create a simple application that fetches data from a public API endpoint and displays it in a list format. However, the API response contains a large dataset, and each item in the list requires heavy computation to display additional details. Your task is to optimize the application using React Native hooks and ensure efficient rendering and data management.

<div style="display: flex;">
    <img src="Simulator Screenshot - iPhone Xs - 2024-04-12 at 16.20.22.png" alt="alt text" width="300">
    <img src="Simulator Screenshot - iPhone Xs - 2024-04-12 at 16.20.31.png" alt="alt text" width="300">
</div>

## Requirements:

### 1. Data Fetching and Rendering:

- Fetch data from the provided API endpoint `https://jsonplaceholder.typicode.com/posts` when the component mounts using the `useEffect` hook.

- Display the fetched data in a FlatList component.

- Each item in the list should display the fetched data, including `id` and `title` fields.

### 2. Heavy Computation Optimization:

- Each item in the list requires heavy computation to display additional details. Implement a heavy computation function using the `useMemo` hook to optimize performance.

- The heavy computation function should take an item's data as input and return computed details, such as complex calculations or transformations.

- Log the time taken for the heavy computation function to run on each render.

### 3. Callback Memoization:

- Create a child component that displays details of an item when clicked. Ensure that the child component retrieves data from the API endpoint https://jsonplaceholder.typicode.com/posts/{postId} by fetching the post details using the post's ID. Display the same content as shown on the list page for the selected item.

- Pass a callback function from the parent component to the child component using props.

- Memoize the callback function using the `useCallback` hook to prevent unnecessary re-renders.

- Log a message in the child component when it re-renders due to changes in props.

### Styling:

Apply basic styling to the counter and buttons to make them clearly visible and distinct.

### Purpose:

[Evaluation Criteria ]:

- Accuracy and completeness of implementation of all requirements.

- Proper usage of useEffect, useMem, and useCallback hooks.

- Efficiency of data fetching, heavy computation, and rendering.

- Proper handling of state management and updates.

- Clarity, readability, and organization of code.

[Ref API Documentation: JSONPlaceholder API Documentation: JSONPlaceholder API]
