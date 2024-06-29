import './index.css'
import { PI } from './assets'
import { copywriter, frontEnd, useGlobalState } from './State'
function Home() {
  let title = useGlobalState('jobTitle')[0]
  return (
    <div className=' mx-16 py-16'>
      {' '}
      <div className=' relative '>
        <div className=' flex flex-col justify-center items-center  w-full h-full md:h-screen md:flex-row-reverse'>
          <div className=' w-2/5 '>
            <img
              src={PI}
              className=' border-sky-500 border-2 shadow-2xl  animate-bounce-slow '
              alt=''
            />
          </div>
          <div className='  bg-gray-900 shadow-2xl p-5 flex flex-col md:w-full md:h-min w-full '>
            <h1 className=' capitalize mb-5  text-fuchsia-200 text-3xl md:text-4xl font-bold '>
              {frontEnd === title && 'Front-end developer'}
              {copywriter === title && 'Copywriter'}
            </h1>
            <h3 className='text-md  text-fuchsia-200 md:text-xl text-opacity-40 '>
              Are you searching for a professional front-end developer then you
              have come to the right person.
            </h3>
            <p className='mt-5 text-sm md:text-lg  text-fuchsia-200 text-opacity-75'>
              Hello i am a developer with a passion for creating interactive and
              user-friendly websites. With expertise in React.js, I specialize
              in building high-performance websites that deliver an exceptional
              user experience. I have a track record of building lightweight and
              bug-free websites, optimizing load times, and ensuring smooth
              functionality. I also have experience leveraging AI technologies
              to streamline development processes and deliver clean code
              efficiently. I strive to capture visitors' attention and drive
              conversions by incorporating engaging effects and animations. I
              have a collaborative mindset and have successfully worked within
              teams to achieve outstanding results. Let's discuss how I can help
              bring your project to life
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
