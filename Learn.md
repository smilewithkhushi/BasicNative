# Greetings from BasicNative!
This repository called BasicNative is designed with beginners learning Expo React Native in mind. Newcomers can use this LEARN.md file as a guide to learn about the resources, the tech stack, and how to get involved with the project.

## Table of Contents: 
1. Overview
2. What is Expo's React Native?
3. Key Insights
4. Getting Started
5. Project Structure
6. Contributing
7. Resources
8. FAQ

## Overview
Greetings from BasicNative! This project aims to teach you how to use Expo to learn React Native. This book will provide you the steps you need to get started with mobile development, regardless of whether you're new to it or want to brush up on your abilities.

## What is Expo's React Native?
A JavaScript framework called React Native is used to create mobile applications with React. Expo is a collection of services and tools based on React Native that facilitate the creation of mobile apps by offering access to several native APIs and streamlining the development process.

The latest stable version of React Native is 0.71.4, which was released on March 29, 2023.

**Some key details about React Native 0.71.4:**

1. Release Date: March 29, 2023
2. Includes Upgrades to React 18.2.0 and Metro 0.73.7
3. Introduces a new "Lean Core" initiative to remove unused native modules
4. Includes various bug fixes and improvements
5. Supports iOS 13+ and Android 5.0+
[Changelog](https://github.com/react-native-community/releases/blob/master/CHANGELOG.md#0714)

## Key Insights
React Native has become a popular choice for building high-performance, cross-platform mobile applications, especially for teams with existing web development expertise.

1. **Cross-Platform Development:** React Native allows developers to build mobile applications for both iOS and Android platforms using a single codebase. This reduces development time and cost compared to building native apps for each platform separately.

2. **Native Performance:** React Native uses native UI components and APIs, which results in applications that feel and perform like native mobile apps. This is a significant improvement over earlier cross-platform frameworks that had issues with performance.

3. **JavaScript/React Ecosystem:** React Native leverages the vast ecosystem of JavaScript and React, allowing developers to utilize a wide range of libraries and tools. This makes it easier for web developers to transition to mobile development using familiar technologies.

4. **Tooling and Ecosystem:** The React Native ecosystem is well-supported by various tools, such as Expo, React Navigation, and numerous third-party libraries. These tools help streamline the development process and provide additional functionality.

5. **Debugging and Testing:** Debugging and testing React Native applications can be more complex compared to traditional native development, as it involves understanding both the JavaScript and native components. However, the community has developed various tools and techniques to address these challenges.

## Getting Started
1. **Install Node.js and npm**: Make sure you have Node.js and npm installed on your system. You can download them from [here](https://nodejs.org/).

2. **Install Expo CLI**: Install Expo CLI globally using npm by running the following command in your terminal:
   ```
   npm install -g expo-cli
   ```

3. **Clone the Repository**: Clone the BasicNative repository to your local machine using Git:
   ```
   git clone https://github.com/your-username/BasicNative.git
   ```

4. **Install Dependencies**: Navigate to the project directory and install dependencies using npm or yarn:
   ```
   cd BasicNative
   npm install
   ```

5. **Start the Development Server**: Start the Expo development server by running:
   ```
   expo start
   ```

6. **Explore and Learn**: Explore the project structure, experiment with the code, and start learning React Native with Expo!

## Project Structure
Understanding the project structure will help you navigate and contribute more effectively. Here is a brief overview:

```
BasicNative/
├── assets/                         # Image, font, and other static resources        
├── output/                         # output screens after all changes
├── src/                   
├── images/
├── screens/                        # Screen components for different app views
│   ├── BasicButtons/
│   ├── BookFinder/
│   ├── Calculator/
│   ├── Gallery/
│   ├── Home/
│   ├── RockPaperScissor/
│   └── ToDoList/
├── App.js                         # Main entry point of the application
├── app.json                       # Configuration file for Expo
├── package.json                   # Project metadata and dependencies
├── Learn.md                       # More about React Native
└── README.md                      # Project overview and setup instructions        

```

## Contributing
We welcome contributions from all developers, especially beginners who are looking to learn and improve their skills. Here are some ways you can contribute to the BasicNative project:

- **Documentation enhancement**: Contribute to the documentation of the project in places you feel the project is lacking. You can open a new issue [create a new issue](https://github.com/your-username/BasicNative/issues/new) on GitHub.

- **Report Bugs**: If you encounter any bugs or issues while using BasicNative, please [create a new issue](https://github.com/your-username/BasicNative/issues/new) on GitHub.

- **Feature Requests**: Have an idea for a new feature or improvement? Feel free to [open a feature request](https://github.com/your-username/BasicNative/issues/new) on GitHub.

- **Submit Pull Requests**: Fix bugs, implement new features, or improve documentation by submitting pull requests. Make sure to follow the contribution guidelines.

## Resources

Here are some helpful resources to learn more about React Native with Expo:

- [React Native Documentation](https://reactnative.dev/docs/getting-started): Official documentation for React Native.
- [Expo Documentation](https://docs.expo.dev/): Official documentation for Expo.
- [Expo Snack](https://snack.expo.dev/): Online editor for experimenting with React Native code.
- [React Native School](https://reactnativeschool.com/): Tutorials and courses for learning React Native.
- [Expo Forums](https://forums.expo.dev/): Community forums for asking questions and sharing knowledge.

## FAQ
How do I run the app on my device?
You can use the Expo Go app available on the iOS App Store and Google Play Store. Scan the QR code generated by expo start to run the app on your device.

How do I debug my application?
You can use the built-in debugging tools in your browser or the React Native Debugger. Check the [React Native Debugging Guide](https://reactnative.dev/docs/debugging) for more details.

Can I use custom native modules with Expo?
Expo supports many native modules, but if you need to use custom native code, you might need to eject from the managed workflow. Refer to the [Expo Ejecting Guide](https://medium.com/@farazpatankar/ejecting-from-expo-11e9f1f4f02b) for more information.

All the best! 
Happy coding! 🚀


