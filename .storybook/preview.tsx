import React from 'react'

import { setCompodocJson } from '@storybook/addon-docs/angular'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withDesign } from 'storybook-addon-designs'
import { jsxDecorator } from 'storybook-addon-jsx'
// import { withPropsTable } from 'storybook-addon-react-docgen'

import { BADGES } from './constants'
import { GlobalStyle } from '../src/shared/global'
import { viewports as breakpoints } from '../src/styles/breakpoints'
import docJson from '../documentation.json'

setCompodocJson(docJson)

// Create custom viewports using widths defined in design tokens
const breakpointViewports = Object.keys(breakpoints).reduce((acc, key) => {
  acc[`breakpoint${key}`] = {
    name: `Breakpoint - ${key}`,
    styles: {
      width: `${breakpoints[key as keyof typeof breakpoints]}px`,
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
  badgesConfig: {
    BADGES,
  },
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
  jsx: {
    useBooleanShorthandSyntax: false,
    useFragmentShortSyntax: false,
  },
}

const styleDecorator = (Story: any) => (
  <>
    <GlobalStyle />
    <Story />
  </>
)

export const decorators = [withDesign, jsxDecorator, styleDecorator]
