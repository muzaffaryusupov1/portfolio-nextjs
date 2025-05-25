import { ThemeProps } from '@/types'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
import { RiArrowRightUpLine } from 'react-icons/ri'

const Navbar = ({ isDarkMode, setIsDarkMode }: ThemeProps) => {
	const [isScroll, setIsScroll] = useState(false)
	const sideMenuRef = useRef<HTMLUListElement>(null)

	const openMenu = () => {
		if (sideMenuRef.current) {
			sideMenuRef.current.style.transform = 'translateX(-16rem)'
		}
	}

	const closeMenu = () => {
		if (sideMenuRef.current) {
			sideMenuRef.current.style.transform = 'translateX(16rem)'
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (scrollY > 50) {
				setIsScroll(true)
			} else {
				setIsScroll(false)
			}
		})
	}, [])

	return (
		<>
			<div className='fixed top-0 right-0 w-11/12 h-full -z-10 translate-y-[-80%] dark:hidden max-sm:w-full'>
				<Image src='/header-bg-color.png' alt='header bg color' className='w-full' fill />
			</div>
			<nav
				className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 max-sm:px-2 max-sm:py-3
					 ${
							isScroll
								? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20'
								: ''
						}`}
			>
				<a href='#top'>
					<div className='relative w-40 h-10 max-sm:w-32 max-sm:h-8'>
						<Image src={isDarkMode ? '/logo_dark.png' : '/logo.png'} alt='site logo' fill />
					</div>
				</a>

				<ul
					className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
						isScroll
							? ''
							: 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'
					}`}
				>
					<li>
						<a href='#top'>Home</a>
					</li>
					<li>
						<a href='#about'>About me</a>
					</li>
					<li>
						<a href='#skills'>Skills</a>
					</li>
					<li>
						<a href='#work'>My Work</a>
					</li>
					<li>
						<a href='#contact'>Contact me</a>
					</li>
				</ul>

				<div className='flex items-center gap-4 max-sm:gap-2'>
					<button onClick={() => setIsDarkMode!(prev => !prev)}>
						{isDarkMode ? <IoSunnyOutline size={24} /> : <IoMoonOutline size={24} />}
					</button>

					<a
						href='#contact'
						className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50'
					>
						Contact <RiArrowRightUpLine size={20} />
					</a>

					<button className='block md:hidden ml-3' onClick={openMenu}>
						<CiMenuFries size={24} />
					</button>
				</div>

				{/* -- --- mobile menu --- -- */}

				<ul
					ref={sideMenuRef}
					className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'
				>
					<button className='absolute top-6 right-6' onClick={closeMenu}>
						<IoMdClose size={24} />
					</button>

					<li>
						<a className='font-firaCode' onClick={closeMenu} href='#top'>
							Home
						</a>
					</li>
					<li>
						<a className='font-firaCode' onClick={closeMenu} href='#about'>
							About me
						</a>
					</li>
					<li>
						<a className='font-firaCode' onClick={closeMenu} href='#skills'>
							Skills
						</a>
					</li>
					<li>
						<a className='font-firaCode' onClick={closeMenu} href='#work'>
							My Work
						</a>
					</li>
					<li>
						<a className='font-firaCode' onClick={closeMenu} href='#contact'>
							Contact me
						</a>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navbar
