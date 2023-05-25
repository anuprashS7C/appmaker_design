// import CollectionListItem from '../components/CollectionListItem';
import ProductData from '../components/ProductData';
// import ProductImg from '../components/ProductImg';
import ProductVariant from '../components/ProductVariant';
import ProductDesc from '../components/ProductDesc';
// import CustomPage from '../pages/CustomePage';
import CustomBlock from '../components/CustomBlock';
import CustomCart from '../components/CustomCart';
// import ApplyCoupon from '../components/ApplyCoupon';
import CustomWish from '../components/CustomWish';
import PrdImage from '../components/PrdImage';
// import ProductTitle from '../components/PrdTitle';
// import PrdTitle from '../components/PrdTitle';
// import CusDesc from '../components/CusDesc';
// import CustomDesc from '../components/CustomDesc';

const blocks = [
  {
    name:'appmaker/customblock',
    View: CustomWish,
  },
  {
    name:'appmaker/customDescription',
    View: ProductDesc,
  },
  {
    name:'shopify/cart-summary-table',
    View: CustomCart,
  },
  {
    name:'appmaker/customProImage',
    View: PrdImage,
  },
  // {
  //   name:'appmaker/productTitle',
  //   View: ProductData,
  // }
];

export { blocks };
