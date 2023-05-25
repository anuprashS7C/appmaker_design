import { fieldsHelper } from "@appmaker-xyz/shopify";

export function addProductCollection() {
  fieldsHelper.addFieldsToProduct({
    fields: {
      // add any fields in the required format
      custom_products_list: {
        __aliasFor: 'metafield',
        __args: {
          key: 'relatedproduct',
          namespace: 'custom',
        },
        value: true,
      },
    },
  });
}