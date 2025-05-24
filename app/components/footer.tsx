import { assets } from '@/assets/assets'
import { ThemeProps } from '@/types'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = ({ isDarkMode }: ThemeProps) => {
	return (
		<div className='mt-20'>
			<div className='text-center'>
				<Image
					src={isDarkMode ? assets.logo_dark : assets.logo}
					alt=''
					className='w-36 mx-auto mb-2'
				/>

				<div className='w-max flex items-center gap-2 mx-auto'>
					<Image
						src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
						alt=''
						className='w-6'
					/>
					yusupoovdev@gmail.com
				</div>
			</div>

			<div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
				<p>© 2025 Muzaffar Yusupov. All rights reserved.</p>
				<ul className='flex items-center gap-5 justify-center mt-4 sm:mt-0'>
					<li>
						<a target='_blank' href='https://github.com/muzaffaryusupov1'>
							<FaGithub size={24} />
						</a>
					</li>
					<li>
						<a target='_blank' href='https://www.linkedin.com/in/muzaffaryusupov/'>
							<FaLinkedin size={24} />
						</a>
					</li>
					<li>
						<a target='_blank' href='https://www.youtube.com/@muuzaffardev'>
							<FaYoutube size={24} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Footer
