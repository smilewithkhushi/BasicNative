// import { createDrawerNavigator } from '@react-navigation/drawer'
// import React from 'react'
// import { StyleSheet } from 'react-native'

// import { colors } from './constant';
// import CustomDrawer from './CustomDrawer';
// import { DrawerMenu } from './arrays';

// const Drawer = createDrawerNavigator();

// const DrawerNav2 = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         drawerStyle: styles.drawerStyles,
//         drawerType: 'slide',
//         overlayColor: 'transparent',
//         swipeEdgeWidth: Platform.OS === 'android' && 180,
//         sceneContainerStyle: styles.sceneStyles,
//         headerShown: false,
//       }}
//       drawerContent={(props) => <CustomDrawer {...props} />}
//     >
//       {DrawerMenu.map((_, i) => (
//         <Drawer.Screen key={i} name={_.route} component={_.component}
//           options={{
//             item: _,
//           }}
//         />
//       ))}
//     </Drawer.Navigator>
//   )
// }

// export default DrawerNav2

// const styles = StyleSheet.create({
//   drawerStyles: {
//     width: 220,
//     backgroundColor: colors.sceneBg,
//     paddingTop: 40,
//   },
//   sceneStyles: {
//     backgroundColor: colors.sceneBg,
//   },
// })