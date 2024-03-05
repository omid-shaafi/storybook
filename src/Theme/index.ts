import { colorPallet as color } from './ColorPallets';
import { DefaultTheme } from 'styled-components';

 const light: DefaultTheme = {
  colors: {
    mainBackground: color.Neutrals100,
    error: color.Salmon400,
    success: color.Viper500,
    normalText: '#3D5977',
    disabled: color.Neutrals200,
    active: color.Ocean300,
    minorText: color.Neutrals400
  }
};
const dark: DefaultTheme = {
  colors: {
    mainBackground: color.Orchid800
  }
};

export { light, dark };
