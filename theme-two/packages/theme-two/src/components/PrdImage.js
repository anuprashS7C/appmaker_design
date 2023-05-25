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
  return (
    <View >
      <Text>Product_image</Text>
      <Text>{imageRatio}</Text> 
      {/* <NewSwiper
        swiperRef={swiperRef}
        openImage={openImage}
        onAction={onAction}
        attributes={{
          showLoadingIndicator: true,
          index,
          smallPagination,
          imageList: imageList || [],
          autoplay: false,
          appmakerAction: attributes.appmakerAction,
          customDotColor:
            __appmakerCustomStyles?.product_image?.active_dot_color ||
            customDotColor,
          centerPagination: centerPagination == 1 ? true : false,
        }}
      /> */}
   
    </View>
  );
}

const styles = StyleSheet.create({})