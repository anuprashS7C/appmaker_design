import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { useProductVariations } from '@appmaker-xyz/shopify';


export default function ProductVariant(props) {
    const {
        options,
        setOptions,
        variant,
        selectedVariant,
        salePrice,
        regularPrice,
        imageUrl,
        selectedOptions,
        salePercentage,
        onSale,
        regularPriceWithCurrency,
        salePriceWithCurrency,
        isMultiOptions,
        isVariantAvailable,
    } = useProductVariations(props);
    console.log(variant.node.title)

    return (
        <View>
            <View>
                <Text>{variant.node.title}</Text>
            </View>

            
        </View>
    );
}

const styles = StyleSheet.create({})