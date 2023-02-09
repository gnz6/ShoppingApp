import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';
// import { Secondary, Primary } from '../Button.stories';


export default {
    title:"UI/MyLabel",
    component: MyLabel,
    argTypes:{
        size: {control: "select"},
        color: {control: "select"},
        fontColor: {control: "color"}
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({})
Basic.args = {
    size : "normal",
    label : "No Label",
    allCaps : false,
}

export const AllCaps = Template.bind({})
AllCaps.args = {
    size:"normal",
    allCaps: true
}

export const Primary = Template.bind({})
Primary.args={
    size:"normal",
    color:"primary"
}
 

export const Secondary = Template.bind({})
Secondary.args={
    size:"normal",
    color:"secondary"
}
export const Tertiary = Template.bind({})
Tertiary.args={
    size:"normal",
    color:"tertiary"
}

export const CustomFontColor = Template.bind({})
CustomFontColor.args={
    fontColor: "#000",
    size:"h1"
}