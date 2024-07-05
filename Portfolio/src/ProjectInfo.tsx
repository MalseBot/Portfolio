import { useState } from 'react'
import { Git, Web, Close } from './assets'
function ProjectInfo({ list, setShow, show}) {
  const { img, img2, img3, img4, title, details, altert, link,gitLink } = list
  const [shown, setShown] = useState(img)
  return (
    <div
      className={` w-full h-full top-0 end-0 bot-0 start-0 fixed flex justify-center items-center text-sky-950 ${show}`}>
      <div className='w-4/5 p-3 h-4/5 bg-sky-500 border-sky-900 border shadow-2xl shadow-black rounded-2xl grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 relative'>
        <div className='grid gap-3 grid-rows-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 row-span-2 md:grid-rows-4 lg:grid-rows-3 md:col-span-2  w-full '>
          <img
            onClick={() => setShown(img)}
            className='rounded-2xl hover:cursor-pointer hover:scale-105 duration-150 shadow-md shadow-black col-span-2 row-span-2 md:col-span-4 h-full mx-auto lg:col-span-3 '
            src={shown}
            alt={altert}
          />
          <img
            onClick={() => setShown(img2)}
            className='rounded-2xl hover:cursor-pointer md:col-span-2 lg:col-span-1 shadow-md shadow-black hover:scale-95 h-full mx-auto duration-200 '
            src={img2}
            alt={altert}
          />
          <img
            onClick={() => setShown(img3)}
            className='rounded-2xl hover:cursor-pointer md:col-span-2 lg:col-span-1 shadow-md shadow-black hover:scale-95 h-full mx-auto duration-200 '
            src={img3}
            alt={altert}
          />
          <img
            onClick={() => setShown(img4)}
            className='rounded-2xl hover:cursor-pointer md:col-span-2 lg:col-span-1 shadow-md shadow-black hidden md:block h-full mx-auto hover:scale-95 duration-200 '
            src={img4}
            alt={altert}
          />
        </div>
        <div className='p-3 flex flex-col relative'>
          <h2 className='text-3xl font-bold uppercase'>{title}</h2>{' '}
          <p className=' font-semibold'>{details}</p>
          <div className='flex w-full p-5 justify-between  absolute bottom-0'>
            <a target='blank' href={gitLink} className='border-2 rounded-full px-2  border-sky-950 flex uppercase font-bold justify-center items-center hover:border-transparent hover:bg-sky-950 text-sky-950 hover:text-sky-300 duration-200'>
              <img src={Git} width={27} />
              github
            </a>
            <a
              target='blank'
              href={link}
              className='border-2 rounded-full px-2  border-sky-950 flex uppercase font-bold justify-center items-center hover:border-transparent hover:bg-sky-950 text-sky-950 hover:text-sky-300 duration-200'>
              <img src={Web} width={27} alt='' />
              website
            </a>
          </div>
        </div>
        <button
          onClick={() => setShow('hidden')}
          className='rounded-full border bg-sky-950 border-sky-950 hover:cursor-pointer hover:scale-95 duration-100 absolute top-0 end-0 m-5 '>
          <img src={Close} width={20} />
        </button>
      </div>
      <div
        className={`-z-10 bg-black  w-full h-full blur-3xl  ${show}`}
        onClick={() => setShow('hidden')}></div>
    </div>
  )
}

export default ProjectInfo
