import { skillsData } from '@/utils/helpers'
import { motion } from 'motion/react'

const Skills = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			id='skills'
			className='w-full px-[12%] py-10 scroll-mt-20 max-sm:px-4'
		>
			<motion.h2
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				className='text-center text-5xl max-sm:text-3xl'
			>
				My Skills
			</motion.h2>

			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.7, duration: 0.5 }}
				className='text-center max-w-2xl mx-auto mt-5 mb-12 max-sm:text-base'
			>
				I want to share with you the technologies I know and use.
			</motion.p>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.9, duration: 0.6 }}
				className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 my-2 sm:my-5 md:my-10 md:gap-6'
			>
				{skillsData.map((item, index) => (
					<motion.div
						key={index}
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.8 }}
					>
						<motion.div
							whileHover={{ scale: 1.05 }}
							className='border border-gray-400 rounded-lg px-4 py-7 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
						>
							<item.icon size={24} />
							<h3 className='text-lg my-4 text-gray-700 dark:text-white max-sm:text-base'>
								{item.title}
							</h3>
						</motion.div>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	)
}

export default Skills
