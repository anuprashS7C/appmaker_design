import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useProductDetail } from '@appmaker-xyz/shopify';

export default function ProductDesc(props) {

  const { descriptionHtml, description } = useProductDetail(props);
  
  return (
    <View style={styles.descStyle}>
      <View>
        <Text>What it is</Text>
      </View>

      <View>
        <Text>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  descStyle:{
    margin:10,
    // flex:1,
    // justifyContent: 'center',
    // alignItems:'center',
  },
  abtText: {
    fontSize:17,
    fontWeight: '400',
  }
})