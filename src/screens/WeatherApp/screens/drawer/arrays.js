import { Icons } from "../../components/Icons";

import { colors } from "./constant";


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
  { hour: '10 AM' },
  { hour: '11 AM' },
  { hour: '12 PM' },
  { hour: '01 PM' },
  { hour: '02 PM' },
  { hour: '03 PM' },
  { hour: '04 PM' },
  { hour: '05 PM' },
  { hour: '06 PM' },
  { hour: '07 PM' },
  { hour: '08 PM' },
  { hour: '09 PM' },
  { hour: '10 PM' },
  { hour: '11 PM' },
  { hour: '12 AM' },
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