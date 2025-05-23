'use client'

import About from './components/about'
import Contact from './components/contact'
import Header from './components/header'
import Navbar from './components/navbar'
import Services from './components/services'
import Work from './components/work'

export default function Home() {
	return (
		<>
			<Navbar />
			<Header />
			<About />
			<Services />
			<Work />
			<Contact />
		</>
	)
}
