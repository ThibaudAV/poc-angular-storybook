import React from 'react'

import { Story, Meta } from '@storybook/angular'
import Button, { DefaultProps } from './button'
import Readme from './README.mdx'

import { Title, Subtitle, Description, Primary, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs'
import { BADGE } from '@geometricpanda/storybook-addon-badges'

import * as FigmaUrl from '../../figma/urls.json'
import FigmaProperties from '../../figma/FigmaProperties'

export default {
  title: 'Example/Button',
  component: Button,
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
          <FigmaProperties componentProps={DefaultProps} url={FigmaUrl.Button.properties} />
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
    badges: [BADGE.BETA],
  },
} as Meta

const Template: Story = args => ({
  props: args,
})

export const Default = Template.bind({})
Default.args = {
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
