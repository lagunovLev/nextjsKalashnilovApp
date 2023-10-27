import Image from 'next/image'
import logo2Pic from './logo_academy.svg'
import logo1Pic from './logo_kalashnikov-group.svg'
import logosearchPic from './logo_kalashnikov-group.svg'

export default function Home() {
	return (
		<body>
			<header>
				<div className='bg-white flex row-auto justify-center'>
					<div className='p-3 border-gray-500 border-solid border-2'>
						<Image 
					    	src={'https://sun9-20.userapi.com/impf/c846218/v846218988/1dfc0a/XijZ30liWso.jpg?size=275x201&quality=96&sign=84b530361f8ca3f1450c65981c399e27&type=album'}
							alt="logo1"
							className='pt-2'
							width={40}
							height={32}
						/>
					</div>
					<div className='p-3 border-gray-500 border-solid border-2'>
						<Image 
					    	src={logo2Pic}
							alt="logo2"
							height={40}
						/>
					</div>
					<div className='p-3 border-gray-500 border-solid border-2'>
						<Image 
					    	src={logo2Pic}
							alt="logo2"
							height={40}
						/>
					</div>
				</div>
			</header>

    		<main>

    		</main>
		</body>
	)
}
