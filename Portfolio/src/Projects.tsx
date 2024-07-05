import { copywriter, frontEnd, useGlobalState } from './State'
import list from './Data.tsx'
import ProjectInfo from './ProjectInfo'
import { useState } from 'react'
function Projects() {
  let title = useGlobalState('jobTitle')[0]

  return (
    <div>
      {copywriter === title && (
        <div className='flex justify-center content-center text-3xl font-bold text-white'>
          Coming Soon...
        </div>
      )}{' '}
      {frontEnd === title && (
        <div>
          <div className='grid gap-3 grid-cols-2 lg:grid-cols-3 justify-center items-start p-16 h-screen '>
            {list.map(({ img, title, descreption, altert, id }) => {
              let [show, setShow] = useState('hidden')
              let showInfo = list[id - 1]
              return (
                <div key={id}>
                  <ProjectInfo list={showInfo} setShow={setShow} show={show} />
                  <div className='text-sky-200 bg-sky-700 rounded-xl  border-2 border-sky-400 shadow-2xl shadow-black'>
                    <img
                      src={img}
                      className=' rounded-t-xl w-full'
                      alt={altert}
                    />
                    <div className='p-4 flex flex-col'>
                      {' '}
                      <h2 className=' text-white uppercase font-semibold'>
                        {title}
                      </h2>
                      <p className=' first-letter:capitalize'>{descreption}</p>
                      <button
                        onClick={() => {
                          setShow('fixed')
                        }}
                        className='mt-3 self-center w-fit p-1 rounded-2xl  px-2 border border-sky-400 hover:scale-105  hover:bg-rose-400 duration-500 hover:text-fuchsia-200 text-blue-950 bg-fuchsia-200'>
                        more info
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
