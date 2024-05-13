import { Meta, StoryObj } from "@storybook/react";
import Banner from '../components/Banner';

const meta = {
    title: 'Components/Banner',
    component: Banner
} satisfies Meta<typeof Banner> 


export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        logo: '',
        navigations: [
            {
                link: '#',
                name: 'Home'
            },
            {
                link: '#',
                name: 'Introduction'
            },
            {
                link: '#',
                name: 'Blog'
            },
            {
                link: '#',
                name: 'Contact'
            }
        ]
    }
}