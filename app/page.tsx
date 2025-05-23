'use client'

import About from './components/about'
import Header from './components/header'
import Navbar from './components/navbar'
import Services from './components/services'

export default function Home() {
	return (
		<>
			<Navbar />
			<Header />
			<About />
			<Services />
		</>
	)
}
