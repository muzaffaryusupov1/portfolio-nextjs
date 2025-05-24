import type { Metadata } from 'next'
import { Fira_Code, Montserrat } from 'next/font/google'
import './globals.css'

const comfortaa = Montserrat({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
	fallback: ['sans-serif'],
})

const firaCode = Fira_Code({
	subsets: ['latin'],
	weight: ['400'],
})

export const metadata: Metadata = {
	title: 'Muzaffar Yusupov',
	description: 'Hello, my name is Muzaffar Yusupov and welcome to my portfolio.',
	keywords: 'portfolio website nextjs vercel typescript muzaffar',
	authors: [{ name: 'Muzaffar Yusupov' }],
	icons: {
		icon: [{ url: '/favicon.webp' }],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body
				className={`${comfortaa.className} ${firaCode.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
			>
				{children}
			</body>
		</html>
	)
}
