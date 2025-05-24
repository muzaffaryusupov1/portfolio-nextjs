import { Dispatch, SetStateAction } from 'react'

export interface ThemeProps {
	isDarkMode?: boolean
	setIsDarkMode?: Dispatch<SetStateAction<boolean>>
}
