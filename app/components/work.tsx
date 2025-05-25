import { projectsData } from '@/utils/helpers'
import { motion } from 'motion/react'
import Image from 'next/image'
import { PiArrowRightThin } from 'react-icons/pi'

const Work = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			id='work'
			className='w-full px-[12%] py-10 scroll-mt-20 max-sm:px-4'
		>
			<motion.h4
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.5 }}
				className='text-center mb-2 text-lg max-sm:text-base'
			>
				My portfolio
			</motion.h4>

			<motion.h2
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				className='text-center text-5xl max-sm:text-3xl'
			>
				My latest work
			</motion.h2>

			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.7, duration: 0.5 }}
				className='text-center max-w-2xl mx-auto mt-5 mb-12 font-firaCode'
			>
				Welcome to my web development portfolio! Explore a collection of projects showcasing my
				expertise in front-end development.
			</motion.p>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.9, duration: 0.6 }}
				className='grid grid-cols-1 gap-3 md:gap-5 md:grid-cols-2'
			>
				{projectsData.map((item, index) => (
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.6 }}
						key={index}
						className='border border-gray-600 dark:border-white/60 rounded-lg px-3 py-2 flex flex-col'
					>
						<div className='relative w-full h-60'>
							<Image src={item.image} alt={item.title} fill className='object-cover rounded-lg' />
						</div>
						<div className='px-1'>
							<h2 className='text-gray-600 dark:text-white text-lg font-firaCode mt-4'>
								{item.title}
							</h2>
							<p className='text-gray-600 dark:text-white font-firaCode font-bold text-sm mt-3'>
								{item.description}
							</p>
						</div>
						<div className='flex items-center gap-1.5 my-3 sm:gap-3'>
							<a
								href={item.siteLink}
								target='_blank'
								className='bg-black border text-white text-xs px-1 leading-6 py-0.5 rounded-lg hover:bg-darkHover dark:bg-transparent dark:text-white sm:px-3 sm:text-base sm:py-1.5'
							>
								Visit site
							</a>
							{item.adminPanelLink ? (
								<a
									href={item.adminPanelLink}
									target='_blank'
									className='bg-black border text-white text-xs px-1 py-0.5 leading-6 rounded-lg hover:bg-darkHover dark:bg-transparent dark:text-white sm:px-3 sm:text-base sm:py-1.5'
								>
									Visit Admin Panel
								</a>
							) : null}
							<a
								href={item.sourceCodeLink}
								target='_blank'
								className='bg-white border border-black text-xs px-1 py-0.5 leading-6 rounded-lg hover:bg-lightHover text-black sm:px-3 sm:text-base sm:py-1.5'
							>
								Source code
							</a>
						</div>
					</motion.div>
				))}
			</motion.div>
			<motion.a
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 1.1 }}
				href='https://github.com/muzaffaryusupov1'
				className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
			>
				Show more
				<PiArrowRightThin size={24} />
			</motion.a>
		</motion.div>
	)
}

export default Work
