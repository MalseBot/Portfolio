import './index.css'
import {
  PI,
  aboutPic4,
  aboutPic2,
  aboutPic3,
  proPic1,
  proPic2,
  proPic3,
  proPic4,
} from './assets'
import { copywriter, frontEnd, useGlobalState } from './State'
import { useEffect, useState } from 'react'
import { Pagination, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom'

const images = [aboutPic4, aboutPic2, aboutPic3]
function Home() {
  let title = useGlobalState('jobTitle')[0]
  const [currentImage, setCurrentImage] = useState(0)
  const [swipe, setSwipe] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setSwipe(true)
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length)
        setSwipe(false)
      }, 500)
    }, 5000)
    return (e) => clearInterval(interval)
  }, [])

  return (
    <div className=' mx-16 py-16'>
      <div className=' relative '>
        <div className=' flex flex-col justify-center items-center  w-full h-full md:h-screen md:flex-row-reverse'>
          <div className=' w-2/5 '>
            <img
              src={PI}
              className=' border-sky-500 border-2 shadow-2xl  animate-bounce-slow '
              alt=''
            />
          </div>
          <div className=' bg-gray-900 shadow-2xl p-5 flex flex-col md:w-full md:h-min w-full '>
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
      <div className='md:mx-28 md:pb-10 relative'>
        <div className='flex flex-col md:flex-row-reverse justify-center items-center w-full h-max my-2'>
          <div
            className='
        h-max md:w-1/3 w-72 overflow-hidden'>
            <img
              src={images[currentImage]}
              alt='Swiper'
              className={`swipe ${
                swipe ? 'swipe-right' : ''
              } w-full border-sky-500 border-2 shadow-2xl`}
            />
          </div>
          <div className=' shadow-2xl border-blue-950 border-4 mt-0 ms-0 w-2/3 bg-indigo-950 text-gray-400 p-3 text-xs md:text-lg'>
            <h2 className=' text-fuchsia-200 uppercase font-bold text-2xl md:text-4xl mb-2'>
              Know me more
            </h2>
            <p>
              My name is <span>Eslam Hassanin</span> I am <span>22YO</span> I
              studied marketing at
              <span>Alexandria University</span>, and studied front-end
              development through
              <span> courses and self-learning from the internet</span>. I
              practiced front-end for <span>2 years</span> and now I can build
              websites with <span>React</span> library to create good soft code
              and lightweight websites, and use{' '}
              <span>Tailwind or Bootstrap</span> as a framework for the
              designing of the website, I can work with API.and For copywriting
              and marketing, I know what grabs the customer’s attention and
              creates or lights up his desire then gains interest and leverages
              the customer to take action, All that can be done in different
              ways and different approaches depending on the customer's state
              and needs and other values.
            </p>
          </div>
        </div>
      </div>
      <h2 className='text-center text-fuchsia-200 mt-10 relative font-bold uppercase text-2xl'>
        Front-end Project
      </h2>
      <div className='md:mx-28   flex flex-col md:flex-row relative content-center items-center mb-3 z-0'>
        <div className='md:w-2/3 w-3/4 justify-center items-center flex flex-col'>
          <iframe
            className='mb-6 border-2 border-sky-400 rounded-2xl md:w-full md:h-96'
            width={360}
            height={250}
            src='https://www.youtube.com/embed/jbWDfUqM1Hc?si=fwpxfsdVdoF4uyzK'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen></iframe>
          <div className=' text-fuchsia-200 bg-'>
            <h3 className=' border-b-2 border-rose-300 text-2xl font-bold'>
              Casa Cloths Shop
            </h3>
            <p>
              E-commerce website contains 5 sections home about blog product
              profiles created using the React.js library and Bootstrap
              framework, completed the project in 6 days, responsive to
              different devices and interactive with customers, you can create
              your own profile to save your purchase history and locate your
              orders progress.
            </p>
          </div>
          <Link
            to={'/Projects'}
            className='mt-3 text-blue-950 font-bold uppercase border-2 p-1 px-5 rounded-2xl bg-fuchsia-200 md:text-2xl md:px-24 hover:bg-rose-400 duration-500 hover:text-fuchsia-200 '>
            See More
          </Link>
        </div>
        <div className='w-3/4 md:w-1/3  p-4 flex justify-end flex-col'>
          <h2 className=' text-fuchsia-200 text-3xl font-bold hover:text-rose-300'>
            See More
          </h2>
          <Link to={'/Projects'}>
            <div className='grid grid-flow-row gap-1'>
              <img
                src={proPic3}
                className=' gap-56 border-2 border-sky-400 rounded-3xl hover:scale-105 duration-150'
                alt=''
              />
              <img
                src={proPic2}
                className=' gap-56 border-2 border-sky-400 rounded-3xl hover:scale-105 duration-150'
                alt=''
              />
              <img
                src={proPic4}
                className=' gap-56 border-2 border-sky-400 rounded-3xl hover:scale-105 duration-150'
                alt=''
              />
            </div>
          </Link>
        </div>
      </div>
      <h2 className='text-center text-fuchsia-200 mt-10 relative font-bold uppercase text-2xl'>
        copywriting Projects
      </h2>
      <div className='md:mx-28 relative text-center'>
        <Swiper
          // install Swiper modules
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.5}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className='mySwipere mb-10'>
          <SwiperSlide className=''>
            <img src={proPic1} alt='' />
          </SwiperSlide>
          <SwiperSlide className=''>
            <img src={proPic2} alt='' />
          </SwiperSlide>
          <SwiperSlide className=''>
            <img src={proPic1} alt='' />
          </SwiperSlide>
          <SwiperSlide className=''>
            <img src={proPic2} alt='' />
          </SwiperSlide>
        </Swiper>
        <Link
          to={'/Projects'}
          className='mt-10 text-blue-950 font-bold uppercase border-2 p-1 px-5 rounded-2xl bg-fuchsia-200 md:text-2xl md:px-24 hover:bg-rose-400 duration-500 hover:text-fuchsia-200'>
          See More
        </Link>
      </div>
    </div>
  )
}

export default Home
