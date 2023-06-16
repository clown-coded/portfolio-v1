import joker from '../../public/assets/joker-white.png'

const LoadingScreen = () => {


  return (
    <div className='loading-screen' id='loadingScreen'>
        <img src={joker} alt="" className='loading-joker' />
        <h1 className='loading-logo'>samantha mitchell</h1>
        </div>
  )
}

export default LoadingScreen