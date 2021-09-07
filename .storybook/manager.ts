import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'
import logo from './../src/assets/logo/exo-black.svg'

const theme = create({
  base: 'light',

  // Base colors
  colorPrimary: '#7C5D81',
  colorSecondary: '#008199', // Primary and Secondary need to be inverted for some reasons

  // UI
  appBg: '#F6F9FC',
  appContentBg: '#FFFFFF',
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 8,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#333333',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#666666',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#008199',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(0,0,0,.3)',
  inputTextColor: '#333333',
  inputBorderRadius: 4,

  // Brand assets
  brandTitle: 'EXO',
  brandUrl: 'https://exo.quebec/fr',
  brandImage: logo,
})

addons.setConfig({
  theme,
  showPanel: true
})
