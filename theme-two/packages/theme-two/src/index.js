import { registerTheme } from '@appmaker-xyz/core';
import { appmaker } from '@appmaker-xyz/core';
import { blocks } from './blocks';
import { pages } from './pages/index'; 
   
export function activate(params) {
  console.log('theme-two activated');
}
const ThemeTwo = {
  id: 'theme-two',
  activate,
  blocks,
  pages,
};
registerTheme(ThemeTwo);
export default ThemeTwo;
