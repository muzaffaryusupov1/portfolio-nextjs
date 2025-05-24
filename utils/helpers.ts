import { IProjects, ISkills } from '@/types'
import { FaReact, FaVuejs } from 'react-icons/fa'
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiHtml5, SiTypescript } from 'react-icons/si'

export const projectsData: IProjects[] = [
	{
		image: '/bellissimo.png',
		title: 'Bellissimo Pizza + Admin Panel',
		description:
			"I created this site as a clone of Bellissimo's official website, where customers can order pizza and prepare their own pizza with various ingredients.",
		siteLink: 'https://belissimo-clone.vercel.app/',
		adminPanelLink: 'https://admin-belissimo.vercel.app/',
		sourceCodeLink: 'https://github.com/muzaffaryusupov1/belissimo-clone',
	},
	{
		image: '/murashop-img.png',
		title: 'Murashop',
		description:
			'This project is an e-commerce project. I created this project using Vue js framework. And the styling was done using Tailwind Css. And for the database I did it using Mokky dev',
		siteLink: 'https://texnoshop-vue-js.vercel.app/',
		sourceCodeLink: 'https://github.com/muzaffaryusupov1/Texnoshop-VueJs',
	},
	{
		image: '/playnchill-img.jpg',
		title: 'Playnchill',
		description:
			'This project is an online store where you can buy video games. I created this project inspired by the Steam platform. I used the React js library in this project. I used Tailwind Css for styling, Mokky dev for storing data, and Clerk for registering and managing users.',
		siteLink: 'https://github.com/muzaffaryusupov1/Playnchill',
		sourceCodeLink: 'https://playn-chill.vercel.app/',
	},
	{
		image: '/agon-img.jpg',
		title: 'Agon',
		description:
			'A simple landing page with a beautiful design. I made this site using Html and Css and it is also responsive for mobile.',
		siteLink: 'https://agon-lemon.vercel.app/',
		sourceCodeLink: 'https://github.com/muzaffaryusupov1/Agon',
	},
]

export const skillsData: ISkills[] = [
	{
		icon: SiHtml5,
		title: 'HTML',
	},
	{
		icon: IoLogoCss3,
		title: 'CSS',
	},
	{
		icon: RiTailwindCssFill,
		title: 'TAILWIND CSS',
	},
	{
		icon: IoLogoJavascript,
		title: 'JAVASCRIPT',
	},
	{
		icon: SiTypescript,
		title: 'TYPESCRIPT',
	},
	{
		icon: FaReact,
		title: 'REACT.JS',
	},
	{
		icon: RiNextjsFill,
		title: 'NEXT.JS',
	},
	{
		icon: FaVuejs,
		title: 'VUE.JS',
	},
]
