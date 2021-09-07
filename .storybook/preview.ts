import { setCompodocJson } from '@storybook/addon-docs/angular'
import docJson from '../documentation.json'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { viewports as breakpoints } from '../src/styles/breakpoints'
import { withDesign } from 'storybook-addon-designs'

setCompodocJson(docJson)

// import { BADGE } from '@geometricpanda/storybook-addon-badges'

// Create custom viewports using widths defined in design tokens
const breakpointViewports = Object.keys(breakpoints).reduce((acc, key) => {
  acc[`breakpoint${key}`] = {
    name: `Breakpoint - ${key}`,
    styles: {
      width: `${breakpoints[key as keyof typeof breakpoints]}px`,
      // Account for padding and border around viewport preview
      height: 'calc(100% - 20px)',
    },
    type: 'other',
  }
  return acc
}, {} as typeof INITIAL_VIEWPORTS)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  design: {
    type: 'experimental-figspec',
  },
  viewport: {
    viewports: {
      ...breakpointViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
  // badgesConfig: {
  //   [BADGE.DEFAULT]: {
  //     contrast: '#EDEFF5',
  //     color: '#474D66',
  //   },
  //   [BADGE.BETA]: {
  //     contrast: '#D6E0FF',
  //     color: '#2952CC',
  //   },
  //   [BADGE.STABLE]: {
  //     contrast: '#DCF2EA',
  //     color: '#317159',
  //   },
  //   [BADGE.NEEDS_REVISION]: {
  //     contrast: '#FFEFD2',
  //     color: '#66460D',
  //   },
  //   [BADGE.OBSOLETE]: {
  //     contrast: '#F9DADA',
  //     color: '#7D2828',
  //   },
  //   [BADGE.EXPERIMENTAL]: {
  //     contrast: '#E7E4F9',
  //     color: '#6E62B6',
  //   },
  // },
  previewTabs: {
    'storybook/docs/panel': {
      title: 'Documentation',
    },
    canvas: {
      index: -1,
      title: 'Code / Visuel',
    },
  },
  options: {
    storySort: {
      order: [
        'Getting Started',
        [
          'Introduction',
          'Installing the UI Kit',
          'Using the UI Kit',
          'Recommended libraries',
          'Design resources',
          "What's new",
          'Support and Feedback',
        ],
        'Design System',
        ['Atoms', ['Colors', 'Typography', 'Breakpoints', 'Spacing', 'Icons', 'Grids', 'Elevations'], 'Molecules'],
        'Components',
      ],
    },
  },
  docs: { inlineStories: true },
}

export const decorators = [withDesign]
