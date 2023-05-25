import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCart } from '@appmaker-xyz/shopify';


export default function CustomCart() {
    const { cart, setCanCheckout, totalQuantity, cartTotalPrice, cartTotalPricelwithCurrency, cartTotalSavings , shippingFeeWithCurrency, cartTotalPayableWithCurrency, cartTotalSavingsWithCurrency} = useCart(); 
  return (
    <View style={styles.container}>
      <Text style={styles.priceDetail}>Price Details</Text>

      <View>
        <Text>cart total price: {cartTotalPricelwithCurrency}</Text>
      </View>

      <View>
        <Text>cart total saving: {cartTotalSavingsWithCurrency}</Text>
      </View>

      <View>
        <Text>shipping fee: {shippingFeeWithCurrency}</Text>
      </View>

      <View>
        <Text>Total Payable: {cartTotalPayableWithCurrency}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        padding: 8
    },
    priceDetail:{
      fontSize:17,
      marginBottom:2,
    },
})