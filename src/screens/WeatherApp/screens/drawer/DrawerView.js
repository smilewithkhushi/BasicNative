// import { StyleSheet, View } from 'react-native'
// import React from 'react'
// import { useDrawerProgress } from '@react-navigation/drawer'
// import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';

// const DrawerView = ({ children, style }) => {

//   const drawerProgress = useDrawerProgress();

//   const viewStyles = useAnimatedStyle(() => {
//     const scale = interpolate(
//       drawerProgress.value,
//       [0, 1],
//       [1, 0.8]
//     )

//     const borderRadius = interpolate(
//       drawerProgress.value,
//       [0, 1],
//       [0, 40],
//     )
//     return {
//       transform: [{ scale }], borderRadius,
//     }
//   })
//   return (
//     <Animated.View style={[styles.container, style, viewStyles]}>
//       {children}
//     </Animated.View>
//   )
// }

// export default DrawerView

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// // })