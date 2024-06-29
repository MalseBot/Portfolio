import { IN, Face, Git, G, Insta, twitX } from './assets'
import { Link } from 'react-router-dom'
import { AiTwotoneHome } from 'react-icons/ai'
import { GiClassicalKnowledge } from 'react-icons/gi'
import { PiProjectorScreenChart } from 'react-icons/pi'
import { copywriter, frontEnd, setGlobalState, useGlobalState } from './State'

const NavBar = () => {
  let title = useGlobalState('jobTitle')[0]
  const titleChange = () => {
    let job = title
    if (title === frontEnd) {
      job = copywriter
    }
    if (title === copywriter) {
      job = frontEnd
    }
    return job
  }

  return (
    <div>
      <div className='fixed end-0 text-sky-200 z-10 rounded-es-2xl bg-sky-700 border-sky-400 border-2 border-t-0 border-e-0 p-1'>
        <Link to={'/'}>
          <div className='relative z-20 hover:scale-110 hover:translate-x-0 hover:transform hover:duration-300  duration-300 hover:z-50'>
            <AiTwotoneHome fontSize={30} className='' />
          </div>
        </Link>
        <Link to={'/Projects'}>
          <div className='relative z-20 hover:scale-110 hover:translate-x-0 hover:transform hover:duration-300  duration-300 hover:z-50'>
            <PiProjectorScreenChart fontSize={30} className='' />
          </div>
        </Link>
        <Link to={'/Experience'}>
          <div className='relative z-20 hover:scale-110 hover:translate-x-0 hover:transform hover:duration-300  duration-300 hover:z-50'>
            <GiClassicalKnowledge fontSize={30} className=' ' />
          </div>
        </Link>
      </div>
      <div className=' fixed top-10 z-10 rounded-e-2xl bg-sky-700 border-sky-400 border-2 border-s-0 p-1'>
        <a
          href='https://www.instagram.com/eslamwtf/'
          target='_blank'
          rel='noreferrer'>
          <div className=' hover:translate-x-1 hover:transform hover:duration-300 -translate-x-0 duration-300 hover:z-50 my-1 '>
            <img src={Insta} className=' w-10 translate-y-1' alt='instagram' />
          </div>
        </a>
        <a
          href='https://www.linkedin.com/in/eslam-hegazi-6927751a1/'
          target='_blank'
          rel='noreferrer'>
          <div className=' hover:translate-x-1 hover:transform hover:duration-300 -translate-x-0 duration-300 hover:z-50 my-1'>
            <img src={IN} className=' w-10 translate-y-1' alt='Linkin' />
          </div>
        </a>
        <a href='mailto:eslamwtf@gmail.com' target='_blank' rel='noreferrer'>
          <div className=' hover:translate-x-1 hover:transform hover:duration-300 -translate-x-0 duration-300 hover:z-50 my-1'>
            <img src={G} className=' w-10 translate-y-1' alt='Gmail' />
          </div>
        </a>

        <a href='https://github.com/MalseBot' target='_blank' rel='noreferrer'>
          <div className=' hover:translate-x-1 hover:transform hover:duration-300 -translate-x-0 duration-300 hover:z-50 my-1'>
            <img src={Git} className=' w-10 translate-y-1' alt='Git hub' />
          </div>
        </a>
        <a
          href='https://www.facebook.com/profile.php?id=100067973934851'
          target='_blank'
          rel='noreferrer'>
          <div className=' hover:translate-x-1 hover:transform hover:duration-300 -translate-x-0 duration-300 hover:z-50 my-1'>
            <img src={Face} className=' w-10 translate-y-1' alt='Facebook' />
          </div>
        </a>
        <a href='https://twitter.com/eslamwtf' target='_blank' rel='noreferrer'>
          <div className=' hover:scale-125 hover:translate-x-1 hover:transform hover:duration-300 -translate-x-0 duration-300 hover:z-50 my-1'>
            <img
              src={twitX}
              className=' text-black w-10 translate-y-1'
              alt='Facebook'
            />
          </div>
        </a>
      </div>
      <button
        className='fixed left-16 text-2xl text-sky-200 z-10 rounded-es-2xl rounded-ee-2xl bg-sky-700 border-sky-400 border-4 border-t-0 pt-0 uppercase font-bold p-1 hover:scale-105 transition-all duration-700 hover:cursor-pointer '
        onClick={() => setGlobalState('jobTitle', titleChange)}>
        as a{' '}
        <span
          className={`transition-all duration-700 ${
            title === copywriter ? 'opacity-100' : 'opacity-0'
          }`}>
          {title === copywriter && copywriter}
        </span>
        <span
          className={`transition-all duration-700 ${
            title === frontEnd ? 'opacity-100' : 'opacity-0'
          }`}>
          {title === frontEnd && frontEnd}
        </span>
      </button>
    </div>
  )
}

export default NavBar
