import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const VirtualizedList = ({ children }) => {
  return (
    <FlatList
      data={[]}
      ListHeaderComponent={
        <>{children}</>
      }
    />
  )
}

export default VirtualizedList

const styles = StyleSheet.create({})