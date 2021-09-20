import React from 'react'
import { Story, Meta, moduleMetadata } from '@storybook/angular'
import { NgxChronoUiKitModule } from 'ngx-chrono-ui-kit'
import { Title, Subtitle, Description, Primary, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs'

import { BADGE } from '@geometricpanda/storybook-addon-badges'
// import * as Readme from './README.mdx'
import * as FigmaUrl from '../../figma/urls.json'
import * as FigmaProperties from '../../figma/FigmaProperties'

export default {
  title: 'Example/Button',
  component: MatButton,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule],
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
          {/*<Readme />*/}
        </>
      ),
    },
    badges: [BADGE.BETA],
  },
} as Meta

const Template: Story<MatButton> = (args: MatButton) => ({
  props: args,
})

export const Default = Template.bind({})
Default.args = {} as Partial<MatButton>
