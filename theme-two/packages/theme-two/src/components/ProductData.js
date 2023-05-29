import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useProductDetail } from '@appmaker-xyz/shopify';

export default function ProductData(props) {
  const { title , salePrice, reviews_count, average_rating, regularPrice, salePercentage, tags} = useProductDetail(props);

  console.log(useProductDetail.title);
  return (
    
    <View style={styles.container}> 
      <View>
        <Text style={styles.titleText}>{title}</Text>
      </View>

      <View style={styles.priceSection}>
        <View style={styles.saleP}>
          <Text>{salePrice}</Text>
        </View>

        <View style={styles.regularP}> 
          <Text>Rs. 2000</Text>
        </View>
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#FFFFFF',
    padding: 10
  },
  reviewsSection:{
    flex:1,
    flexDirection:'row'
  },
  stars:{
    margin: 4
  },
  ratingPro:{
    margin:4
  },
  noOfRev:{
    margin:4
  },
  priceSection:{
    flex:1,
    flexDirection:'row'
  },
  saleP:{
    margin:2
  },
  
});
