import { Icons } from "../../components/Icons";
import DrawerScreen from "../DrawerScreen";
import { colors } from "./constant";

// export const DrawerMenu = [
//   { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: DrawerScreen, color: colors.icon1, },
//   { route: 'Inbox', label: 'My Inbox', type: Icons.Feather, icon: 'inbox', component: DrawerScreen, color: colors.icon2, },
//   { route: 'Calendar', label: 'My Calendar', type: Icons.Feather, icon: 'calendar', component: DrawerScreen, color: colors.icon3, },
//   { route: 'Documents', label: 'My Documents', type: Icons.Feather, icon: 'layers', component: DrawerScreen, color: colors.icon4, },
//   { route: 'Activity', label: 'My Activity', type: Icons.Feather, icon: 'pie-chart', component: DrawerScreen, color: colors.primary, },
//   { route: 'Settings', label: 'Settings', type: Icons.Feather, icon: 'settings', component: DrawerScreen, color: colors.important, },
// ];


export const icons = {
  cloudSun: 'cloud-sun',
  cloudMeatball: 'cloud-meatball',
  cloudMoonRain: 'cloud-moon-rain',
  cloudMoon: 'cloud-moon',
  cloudRain: 'cloud-rain',
  cloudShowersHeavy: 'cloud-showers-heavy',
  cloudSunRain: 'cloud-sun-rain',
  cloudUploadAlt: 'cloud-upload-alt',
  cloud: 'cloud',
  sun: 'sun',
  moon: 'moon',
}

export const hours = [
  { hour: '10 AM', icon: icons.cloudSun, temp: 18 },
  { hour: '11 AM', icon: icons.sun, temp: 21 },
  { hour: '12 PM', icon: icons.cloudSunRain, temp: 16 },
  { hour: '01 PM', icon: icons.cloudSunRain, temp: 19 },
  { hour: '02 PM', icon: icons.cloudSun, temp: 21 },
  { hour: '03 PM', icon: icons.sun, temp: 24 },
  { hour: '04 PM', icon: icons.cloudSun, temp: 19 },
  { hour: '05 PM', icon: icons.cloudSun, temp: 22 },
  { hour: '06 PM', icon: icons.cloud, temp: 20 },
  { hour: '07 PM', icon: icons.cloud, temp: 17 },
  { hour: '08 PM', icon: icons.cloudMoon, temp: 15 },
  { hour: '09 PM', icon: icons.cloudMoonRain, temp: 14 },
  { hour: '10 PM', icon: icons.cloudMoonRain, temp: 14 },
  { hour: '11 PM', icon: icons.cloudMoon, temp: 10 },
  { hour: '12 AM', icon: icons.cloudMoon, temp: 8 },
];

export const days = [
  { day: 'Monday', icon: icons.cloudSun, maxTemp: 18, minTemp: 10 },
  { day: 'Tuesday', icon: icons.sun, maxTemp: 21, minTemp: 16 },
  { day: 'Wednesday', icon: icons.cloudSunRain, maxTemp: 16, minTemp: 10 },
  { day: 'Thursday', icon: icons.cloudSunRain, maxTemp: 19, minTemp: 9 },
  { day: 'Friday', icon: icons.cloudSun, maxTemp: 21, minTemp: 15 },
  { day: 'Saturday', icon: icons.sun, maxTemp: 24, minTemp: 18 },
  { day: 'Sunday', icon: icons.sun, maxTemp: 26, minTemp: 16 },
];