import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useProductDetail } from '@appmaker-xyz/shopify';

export default function ProductDesc(props) {

  const { descriptionHtml, description } = useProductDetail(props);
  
  return (
    <View style={styles.descStyle}>
      <Text>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  descStyle:{
    margin:8
  }
})