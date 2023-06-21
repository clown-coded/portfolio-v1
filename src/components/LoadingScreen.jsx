import joker from '../../public/assets/joker-white.png'

const LoadingScreen = () => {

  function loadIn() {
    const screenWidth = window.innerWidth;
    
    const loadingScreen = document.getElementById('loadingScreen')
     loadingScreen.style.animation = 'fadeOut 3s ease'
     
     const homeComponent = document.getElementById('homeComponent')
     const joker = document.getElementById('joker')
   
     homeComponent.style.animation = 'slideOpen 3s ease'
     if (screenWidth < 780) {
        homeComponent.style.width = 'calc(100vw - 90px)'
     } else {
        homeComponent.style.width = 'calc(100vw - 165px)'
     }
    joker.animation = 'fadeIn 3s ease'
     loadingScreen.style.visibility = 'hidden'
     
    // setLoading(false)
    

   }
  
  
  
  setTimeout(loadIn, 2000)


  return (
    <div className='loading-screen' id='loadingScreen'>
        <img src={joker} alt="" className='loading-joker' />
        <h1 className='loading-logo'>samantha mitchell</h1>
        </div>
  )
}

export default LoadingScreen