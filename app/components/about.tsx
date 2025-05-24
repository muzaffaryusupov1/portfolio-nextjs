import { motion } from 'motion/react'
import Image from 'next/image'

const About = () => {
	return (
		<motion.div
			id='about'
			className='w-full px-[12%] py-10 scroll-mt-20 max-sm:px-4'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<motion.h4
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}
				className='text-center mb-2 text-lg font-firaCode max-sm:text-base'
			>
				Introduction
			</motion.h4>
			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}
				className='text-center text-5xl max-sm:text-3xl'
			>
				About me
			</motion.h2>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				className='flex w-full flex-col lg:flex-row items-center gap-6 my-7 sm:my-10 md:my-20 md:gap-12 lg:gap-20'
			>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}
					className='w-64 h-80 sm:w-80 rounded-3xl max-w-none relative'
				>
					<Image src='/user-image.jpg' alt='user' className='rounded-3xl object-cover' fill />
				</motion.div>

				<motion.div
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='flex-1'
				>
					<p className='mb-2 max-w-2xl text-base leading-7 sm:mb-5 md:mb-10 sm:text-xl md:text-2xl md:leading-10'>
						My name is Yusupov Muzaffar. I am a front-end developer and I am 19 years old. I am a
						passionate Frontend Developer dedicated to continuous learning and growth in web
						development. I have built modern and interactive websites using React.js and Next.js.
					</p>
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

export default About
