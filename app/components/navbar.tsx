import { ThemeProps } from '@/types'
import { motion } from 'motion/react'
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
			<div className='fixed top-0 right-0 w-11/12 h-full -z-10 translate-y-[-80%] dark:hidden'>
				<Image src='/header-bg-color.png' alt='header bg color' className='w-full' fill />
			</div>
			<motion.nav
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
					isScroll
						? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20'
						: ''
				}`}
			>
				<motion.a
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					href='#top'
				>
					<Image
						src={isDarkMode ? '/logo_dark.png' : '/logo.png'}
						className='w-40 cursor-pointer mr-14'
						alt='site logo'
						width={140}
						height={60}
					/>
				</motion.a>

				<motion.ul
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
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
				</motion.ul>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className='flex items-center gap-4'
				>
					<button onClick={() => setIsDarkMode!(prev => !prev)}>
						{isDarkMode ? <IoSunnyOutline size={24} /> : <IoMoonOutline size={24} />}
					</button>

					<motion.a
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.7 }}
						href='#contact'
						className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50'
					>
						Contact <RiArrowRightUpLine size={20} />
					</motion.a>

					<button className='block md:hidden ml-3' onClick={openMenu}>
						<CiMenuFries size={24} />
					</button>
				</motion.div>

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
			</motion.nav>
		</>
	)
}

export default Navbar
