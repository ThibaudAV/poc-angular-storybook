import React from 'react'
import { Story, Meta, moduleMetadata } from '@storybook/angular'
import { Title, Subtitle, Description, Primary, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs'

import { BADGE } from '@geometricpanda/storybook-addon-badges'
import Readme from './README.mdx'
import * as FigmaUrl from '../../figma/urls.json'
// import * as FigmaProperties from '../../figma/FigmaProperties'

import { ButtonComponent, ButtonModule } from 'ngx-chrono-ui-kit'

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
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
          {/*<FigmaProperties componentProps={DefaultProps} url={FigmaUrl.Button.properties} />*/}
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

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
})

export const Default = Template.bind({})
Default.args = {
  // primary: true,
  // label: 'Button',
} as Partial<ButtonComponent>
