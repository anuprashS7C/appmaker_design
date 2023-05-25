import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCartProduct } from '@appmaker-xyz/shopify';

export default function CartProduct() {
    const {
        title,
        imageUri,
        regularPrice,
        isFreeGift,
        onSale,
        quantity,
        onRemoveItem,
        removeLoading,   
        decreaseQuantity,
        openProduct,
        currencyHelper,
      } = useCartProduct(props);
  return (
    <View>
      <Text>jgtyf</Text>
    </View>
  )
}

const styles = StyleSheet.create({})