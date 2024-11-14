import React from 'react'
import Button from './components/Button'
import ButtonGradient from './assets/svg/ButtonGradient'
const App = () => {
  return (
    <>
    <h1 className='text-3xl font-bold underline'> Hwll</h1>
    <div className='pt-[4.75] lg:pt-[5.25] overflow-hidden'>
        <Button classname='mt-10'>
          Somthing
        </Button>
    </div>
    <ButtonGradient/>
    </>
  )
}

export default App
