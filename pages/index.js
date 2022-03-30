import React from 'react'

const x = [{
  title: "Basic girls",
  description: "Loving, fun, cheerful, what else do you want?"
}, {
  title: "School girls",
  description: "They're cute, pretty and gentle!"
}, {
  title: "Goth girls",
  description: "They're cute, but they aren't soft!"
}]

export default function Home() {
  const [lacking, setLacking] = React.useState(false)
  return (
    !lacking ?
    <>
      <div className='min-h-screen flex align-middle items-center justify-center bg-gradient-to-br from-gray-800 via-black to-gray-900'>
        <div>
          <h1 className='text-2xl lg:text-4xl font-bold text-center mt-10 text-white'>Anime Girl Dating Simulator</h1>
          <img src='/icon.jpg' className='w-60 m-auto mt-10 shadow-lg shadow-black/50 rounded-lg' />
        
          <div className='justify-center flex'>
          <a
          href='#selections' className='cursor-pointer mt-8 px-6 py-2 bg-purple-600 hover:bg-purple-700 hover:-translate-y-1 ml-4 mb-4 font-medium tracking-wide text-white rounded-lg active:scale-90 duration-150 shadow-lg hover:shadow-xl' onClick={() => {
            new Audio('/clicksound.mp3').play()
          }}>Get Started</a>
          </div>
        </div>
      </div>
      
      <div className='bg-black py-2 shadow-lg sticky top-0 z-50 bg-opacity-80 backdrop-blur-lg' id="selections">
        <p className='text-center text-white font-bold tracking-wider uppercase font-mono select-none'>Pick an anime girl</p>
      </div>

      <div className='justify-center flex mx-5'>
        <div className='grid xl:grid-cols-3 gap-10 mt-14'>
          {x.map(({ ...props }, i) => <Card key={i} imgsrc={`/an/${i+1}.jpg`} setLacking={setLacking} {...props} />)}
        </div>
      </div>
      
      <div className='pt-48 pb-11 text-center font-mono tracking-tight text-xs font-bold opacity-50'>
        <p>P.S. It's just for fun! Don't take it seriously</p>
        <p>Made by Adriel</p>
      </div>
    </> :
    <>
      <div className='justify-center flex items-center align-middle min-h-screen'>
        <img src="/ohhellno.jpeg" />
      </div>
    </>
  )
}

function Card({ imgsrc, title, description, setLacking }) {
  return <div className="max-w-sm max-h-sm rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 duration-300 hover:shadow-2xl bg-gray-900">
    
    <div className='overflow-hidden max-h-52'>
      <img className="w-full" src={imgsrc} alt={title} />
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-gray-300 mb-2">{title}</div>
      <p className="text-gray-400 text-base">
        {description}
      </p>
    </div>
    <button className='px-6 py-2 bg-purple-600 hover:bg-purple-700 hover:-translate-y-1 ml-4 mb-4 font-medium tracking-wide text-white rounded-lg active:scale-90 duration-150 shadow-lg hover:shadow-xl' onClick={() => {
      new Audio('/clicksound.mp3').play()
      setLacking(true)
      new Audio('/hellno.mp3').play()
    }}>Date</button>
  </div>
}

