// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useRef } from 'react'
// import { useDrawerProgress } from '@react-navigation/drawer'
// import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
// import DrawerItemList from './DrawerItemList'
// import Icon, { Icons } from '../../components/Icons'
// import { colors, constant } from './constant'


// const CustomDrawer1 = (props) => {
//   const scrollRef = useRef(null)

//   const drawerProgress = useDrawerProgress();

//   const viewStyles = useAnimatedStyle(() => {
//     const translateX = interpolate(
//       drawerProgress.value,
//       [0, 1],
//       [-200, 0],
//     )
//     return {
//       transform: [{ translateX }]
//     }
//   })

//   const viewStyles2 = (type) => useAnimatedStyle(() => {
//     const val = type === 'top' ? -100 : 100;
//     const translateY = interpolate(
//       drawerProgress.value,
//       [0, 1],
//       [val, 0],
//     )
//     const opacity = interpolate(
//       drawerProgress.value,
//       [0, 1],
//       [0, 1],
//     )
//     return {
//       transform: [{ translateY }], opacity
//     }
//   })

//   return (
//     <View style={styles.container}>
//       {/* header */}
//       <Animated.View style={[styles.row, styles.view, styles.marginTop, viewStyles2('top')]}>
//         <View style={styles.iconContainer}>
//           <Icon name="logo-electron" type={Icons.Ionicons} size={30} />
//         </View>
//         <Text style={styles.headerTitle}>Hello there👋</Text>
//       </Animated.View>
//       {/* Drawer List Item */}
//       <Animated.ScrollView
//         ref={scrollRef}
//         {...props}
//         showsVerticalScrollIndicator={false}
//         style={[styles.marginVertical, viewStyles]}>
//         <DrawerItemList {...props} styles={styles} />
//       </Animated.ScrollView>
//       {/* footer */}
//       <TouchableOpacity>
//         <Animated.View
//           style={[styles.row, styles.view, styles.marginBottom, viewStyles2('bottom')]}>
//           <Image style={styles.profile} source={require('../../assets/images/avatar.png')} />
//           <View style={styles.textContainer}>
//             <Text style={styles.headerTitle}>Kelsey Van</Text>
//             <Text style={styles.text}>Software Engineer</Text>
//           </View>
//         </Animated.View>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default CustomDrawer1

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   view: {
//     borderRadius: constant.borderRadius,
//     marginHorizontal: constant.SPACING / 2,
//     padding: constant.SPACING / 1.5,
//   },
//   marginTop: {
//     marginTop: constant.SPACING / 2,
//   },
//   marginBottom: {
//     marginBottom: constant.SPACING / 2,
//   },
//   marginVertical: {
//     marginVertical: constant.SPACING / 2,
//   },
//   drawerItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRadius: constant.borderRadius,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   label: {
//     fontSize: constant.textFontSize,
//     color: colors.white,
//     paddingHorizontal: constant.SPACING,
//   },
//   notificationBadge: {
//     paddingVertical: constant.SPACING / 5,
//     paddingHorizontal: constant.SPACING / 2,
//     borderRadius: constant.borderRadius / 2,
//   },
//   iconContainer: {
//     padding: constant.SPACING / 2.4,
//     borderRadius: constant.borderRadius,
//     margin: constant.SPACING / 2,
//     backgroundColor: colors.primary,
//   },
//   separator: {
//     width: '100%',
//     height: 1,
//     backgroundColor: colors.darkGray,
//     marginVertical: constant.SPACING / 2,
//   },
//   headerTitle: {
//     fontSize: constant.titleFontSize,
//     color: colors.white,
//   },
//   profile: {
//     marginVertical: constant.SPACING / 2,
//     marginRight: constant.SPACING,
//     marginLeft: constant.SPACING / 2,
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: colors.light,
//   },
//   text: {
//     color: colors.white,
//   },
// })