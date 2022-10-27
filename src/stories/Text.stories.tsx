import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@ghernan-ui/react'


export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eos molestias atque! Eum esse, obcaecati accusamus rerum sed et officia? Modi esse maiores aliquid ullam! Ad nisi harum deserunt esse.'
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {

}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}