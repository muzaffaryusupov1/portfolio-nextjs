import { ThemeProps } from '@/types'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = ({ isDarkMode }: ThemeProps) => {
	return (
		<div className='mt-20'>
			<div className='text-center'>
				<Image
					src={isDarkMode ? '/logo_dark.png' : '/logo.png'}
					alt='site logo'
					className='mx-auto mb-2'
					width={140}
					height={60}
				/>

				<div className='w-max flex items-center gap-2 mx-auto'>
					<MdOutlineEmail size={24} />
					yusupoovdev@gmail.com
				</div>
			</div>

			<div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
				<p>© 2025 Muzaffar Yusupov. All rights reserved.</p>
				<ul className='flex items-center gap-5 justify-center mt-4 sm:mt-0'>
					<li>
						<a
							target='_blank'
							href='https://github.com/muzaffaryusupov1'
							className='group relative inline-block'
						>
							<FaGithub size={24} />
							<span className='absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100 max-sm:hidden'>
								GitHub
							</span>
						</a>
					</li>
					<li>
						<a
							target='_blank'
							href='https://www.linkedin.com/in/muzaffaryusupov/'
							className='group relative inline-block'
						>
							<FaLinkedin size={24} />
							<span className='absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100 max-sm:hidden'>
								Linkedin
							</span>
						</a>
					</li>
					<li>
						<a
							target='_blank'
							href='https://www.youtube.com/@muuzaffardev'
							className='group relative inline-block'
						>
							<FaYoutube size={24} />
							<span className='absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100 max-sm:hidden'>
								Youtube
							</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Footer
