
import { useProductOptions, useProductImages, useProductDetail } from '@appmaker-xyz/shopify';
import React from 'react';
import { View } from 'react-native';
import ColorPicker from './ProductColorPicker';
import SizePicker from './ProductSizePicker';
import ProductVariationSelect from './ProductVariationSelect';
​
export default function VariationChooser(props) {
  const {
    variationOptions, 
    setOption, 
    selectedOptions, 
    isOptionAvilableV2,
    getAvailableOptions,
  } = useProductOptions(props);
​
​
  const VariationOptionsItems = (props) => {
    // In the following code, you can see for different variation options, we are rendering different components.
    const { name } = props;
    switch (name) {
      case 'Size':
        // SizePicker is a custom component that we have created to render the size options.
        return (
          <View>
              <SizePicker {...props} />
          </View>
        );
      case 'Color':
        // ColorPicker is a custom component that we have created to render the color options.
        return (
          <ColorPicker
            {...props}
            optionName={name}
            getAvailableOptions={getAvailableOptions}
            isOptionAvilable={isOptionAvilableV2}
          />
        );
      default:
        // For any other variation option, we are rendering the default ProductVariationSelect component.
        return <ProductVariationSelect {...props} />;
    }
  };
  return (
    <View>
      {variationOptions.map((variationOption) => {
        return (
          <View key={`options-${variationOption.key}`}>
            <VariationOptionsItems
              name={variationOption.name}
              isOptionAvilable={isOptionAvilableV2}
              options={variationOption.options}
              selectedOption={
                selectedOptions && selectedOptions[variationOption?.key]
              }
              onClick={(item) => {
                setOption(variationOption.key, item.value);
              }}
            />
          </View>
        );
      })}
    </View>
  );
}