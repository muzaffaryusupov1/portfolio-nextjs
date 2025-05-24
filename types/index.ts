import { Dispatch, SetStateAction } from 'react'
import { IconType } from 'react-icons'

export interface ThemeProps {
	isDarkMode?: boolean
	setIsDarkMode?: Dispatch<SetStateAction<boolean>>
}

export interface ISkills {
	icon: IconType
	title: string
}

export interface IProjects {
	image: string
	title: string
	description: string
	siteLink: string
	adminPanelLink?: string
	sourceCodeLink: string
}
