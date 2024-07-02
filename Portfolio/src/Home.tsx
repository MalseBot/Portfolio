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
    <div className=' py-16'>
      <div className=' relative '>
        <div className=' flex flex-col justify-center items-center  w-full h-full md:h-screen md:flex-row-reverse'>
          <div className=' w-2/5 '>
            <img
              src={PI}
              className=' border-sky-500 border-2 shadow-2xl  animate-bounce-slow '
              alt=''
            />
          </div>
          {frontEnd === title && (
            <div className=' bg-gray-900 shadow-2xl p-5 flex flex-col mx-14 md:h-min  '>
              <h1 className=' capitalize mb-5  text-fuchsia-200 text-3xl md:text-4xl font-bold '>
                React Developer
              </h1>
              <h3 className='text-md  text-fuchsia-200 md:text-xl text-opacity-40 '>
                Seasoned React Developer with a Passion for Innovative Solutions
              </h3>
              <p className='mt-5 text-sm md:text-lg  text-fuchsia-200 text-opacity-75'>
                As a versatile React developer with 2 years of professional
                experience, I've honed my skills in crafting dynamic,
                user-centric web applications. Proficient in both Tailwind CSS
                and Bootstrap, I excel at creating visually striking and highly
                functional user interfaces.
                <h4 className=' font-bold'>My Expertise:</h4>
                <ul className='m-3'>
                  <li>- Building complex, scalable React applications</li>
                  <li>- Integrating state management solutions like Redux</li>
                  <li>
                    - Leveraging modern libraries and frameworks such as
                    TanStack
                  </li>
                  <li>- Developing responsive, mobile-friendly designs</li>
                  <li>
                    - Implementing robust testing and deployment workflows.
                  </li>
                </ul>{' '}
                I approach every project with a keen eye for detail, a
                collaborative mindset, and a drive to continuously learn and
                improve. By deeply understanding your business objectives and
                target audience, I'm able to deliver innovative solutions that
                not only look great but also provide a seamless and engaging
                user experience. If you're seeking a skilled React developer to
                join your team and contribute to the success of your next big
                project, I'd welcome the opportunity to discuss how my expertise
                can help you achieve your goals. Let's connect and explore the
                possibilities together.
              </p>
            </div>
          )}
          {copywriter === title && (
            <div className=' bg-gray-900 shadow-2xl p-5 flex flex-col mx-14 md:h-min  '>
              <h1 className=' capitalize mb-5  text-fuchsia-200 text-3xl md:text-4xl font-bold '>
                CopyWriter
              </h1>
              <h3 className='text-md  text-fuchsia-200 md:text-xl text-opacity-40 '>
                Aspiring Copywriter Eager to Craft Compelling Content
              </h3>
              <p className='mt-5 text-sm md:text-lg  text-fuchsia-200 text-opacity-75'>
                As a recent graduate with a degree in Marketing Communication,
                I'm an aspiring copywriter looking to apply my passion for
                wordsmithing and storytelling to help brands connect with their
                audiences. While I may not have years of professional experience
                under my belt, I possess a keen eye for detail, a knack for
                creative ideation, and a deep commitment to continual learning
                and growth. .<h4 className=' font-bold'>My Capabilities:</h4>
                <ul className='m-3'>
                  <li>
                    - Developing captivating website copy and landing page
                    content
                  </li>
                  <li>
                    - Writing SEO-optimized blog articles and thought leadership
                    pieces
                  </li>
                  <li>
                    - Crafting persuasive email marketing campaigns and
                    sequences
                  </li>
                  <li>
                    - Assisting with the production of marketing collateral
                  </li>
                </ul>{' '}
                I pride myself on my adaptability, attention to detail, and
                collaborative spirit. I'm eager to immerse myself in your brand,
                understand your unique business goals, and leverage my
                copywriting skills to help you elevate your marketing efforts.If
                you're seeking a driven, versatile copywriter to support your
                content creation needs, I'd welcome the opportunity to discuss
                how I can contribute to your success. I'm excited to learn,
                grow, and create something truly impactful together.
              </p>
            </div>
          )}
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
              <span className=' font-semibold'>Eslam Hassanin, 23</span>, I am a
              marketing professional from Alexandria, Egypt, with a{' '}
              <span className=' font-semibold'>diverse skill set</span> and a
              passion for exploration:{' '}
              <ul>
                <li>
                  Holds a{' '}
                  <span className=' font-semibold'>marketing degree</span> from
                  Alexandria University
                </li>
                <li>
                  Proficient in{' '}
                  <span className=' font-semibold'>React development</span>,
                  having learned through university coursework and self-study
                </li>
                <li>
                  Possesses an
                  <span className=' font-semibold'>ICDL</span> certification
                </li>
                <li>
                  Skilled in{' '}
                  <span className=' font-semibold'>Adobe Illustrator</span> as a
                  hobby, showcasing my creative abilities{' '}
                </li>
                <li>
                  Experienced in
                  <span className=' font-semibold'>copywriting</span> and driven
                  by a strong, inspiring mindset
                </li>
                <li>
                  Continuously seeks out new challenges and opportunities to
                  grow
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      {frontEnd === title && (
        <div>
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
                  different devices and interactive with customers, you can
                  create your own profile to save your purchase history and
                  locate your orders progress.
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
        </div>
      )}
      {copywriter === title && (
        <div>
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
      )}
    </div>
  )
}

export default Home
