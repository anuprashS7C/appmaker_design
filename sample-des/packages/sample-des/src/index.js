import { registerTheme } from '@appmaker-xyz/core';
import { appmaker } from '@appmaker-xyz/core';
import { blocks } from './blocks';

export function activate(params) {   
  console.log('sample-des activated');
}
const SampleDes = {
  id: 'sample-des',
  activate,
  blocks,
};
registerTheme(SampleDes);
export default SampleDes;
