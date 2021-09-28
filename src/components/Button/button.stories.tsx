import React from 'react'
import { Story, Meta, moduleMetadata } from '@storybook/angular'
import { Title, Subtitle, Description, Primary, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs'
import { ButtonComponent, ButtonModule } from 'ngx-chrono-ui-kit'
import { BADGE } from '@geometricpanda/storybook-addon-badges'

import {CommonModule} from '@angular/common'

// @ts-ignore
import Readme from './README.mdx'
import * as FigmaUrl from '../../figma/urls.json'
import { MatButtonModule } from '@angular/material/button'
// import FigmaProperties from '../../figma/FigmaProperties'

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule, CommonModule, MatButtonModule],
    }),
  ],
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
  // template:'aaa',
  props: args,
})

export const Default = Template.bind({})
Default.args = {
  color: 'primary',
} as Partial<ButtonComponent>

// export const Secondary = Template.bind({})
// Secondary.args = {
//   color: 'warn',
// } as Partial<ButtonComponent>
