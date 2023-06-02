/* eslint-disable react/jsx-props-no-spreading */
import LearnCard from './LearnCard'

export default {
  title: 'InfoCards/Infocard',
  component: LearnCard,
  tags: ['autodocs'],
  args: {
		id: 'advice',
		imgsrc: 'https://www.digitalocean.com/_next/static/media/digitalocean-docs.26159f78.svg',
		header: 'Product documentation',
		body: 'Learn how to spin up a VM and more with in-depth documentation.',
		href: 'https://youtube.com',
  },
}

const Template = (args) => <LearnCard {...args} />

export const ExampleCard = Template.bind({})
ExampleCard.args = {
	id: 'advice',
	imgsrc: 'https://www.digitalocean.com/_next/static/media/digitalocean-docs.26159f78.svg',
	header: 'Product documentation',
	body: 'Learn how to spin up a VM and more with in-depth documentation.',
	href: 'https://youtube.com',
}