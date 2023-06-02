import React from 'react';
import { StyleSheet, View , Text, Image} from 'react-native';
// import NewSwiper from '/NewSwiper';
import {
  useProductImages,
} from '@appmaker-xyz/shopify';
// import { color } from '../../Styles/index';
import { useCartProduct } from '@appmaker-xyz/shopify';


export default function PrdImage(props) {
  const {attributes} = props;

  const {
    onAction,
    index,
    imageList,
    customDotColor,
    imageRatio,
    swiperRef,
    openImage
  } = useProductImages(props);
  // console.log('imageList: ',imageList);
  const firstImage = imageList[0]; // Access the first object in the array

  return (
    <View>
      <View>
        <Image
          source={{ uri: firstImage.uri }}
          style={{ width: '100%', height: 500 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    imageContainer:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    }
  }
  )