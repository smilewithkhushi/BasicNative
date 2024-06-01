import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Icons = ({ name }) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-o" size={50} color="#f87171" />;
    case 'cross':
      return <Icon name="times" size={50} color="#65a30d" />;
    default:
      return <Icon name="times" size={1} color="black" />;
  }
};

export default Icons;

const styles = StyleSheet.create({});
