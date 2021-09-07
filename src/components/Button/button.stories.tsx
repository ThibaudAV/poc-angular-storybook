import React from 'react'

import { Story, Meta } from '@storybook/angular'
import button, { DefaultPropsObj } from './button'
import Readme from './README.mdx'

import { Title, Subtitle, Description, Primary, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs'

import * as FigmaUrl from '../../figma/urls.json'
import FigmaProperties from '../../figma/FigmaProperties'

export default {
  title: 'Example/Button',
  component: button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    design: {
      url: FigmaUrl.Button.design,
    },
    docs: {
      page: () => (
        <>
          <FigmaProperties componentProps={DefaultPropsObj} url={FigmaUrl.Button.properties} />
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
          <Readme />
        </>
      ),
    },
  },
} as Meta

const Template: Story<button> = (args: button) => ({
  props: args,
})

export const P = Template.bind({})
P.args = {
  primary: true,
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
