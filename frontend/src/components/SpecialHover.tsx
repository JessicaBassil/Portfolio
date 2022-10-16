import darkbutterfly from '../svgs/darkbutterfly.svg'
import lightbutterfly from '../svgs/lightbutterfly.svg'

function SpecialHover() {
  const n = 1000

  return (
    <div className='flex wrap fixed special-hover-container'>
      {[...Array(n)].map((elementInArray, index) => (
        <>
          <img alt='.' key={index + 'dark'} className='special-hover-effect' src={darkbutterfly} />
          <img
            alt='.'
            key={index + 'light'}
            className='special-hover-effect'
            src={lightbutterfly}
          />
        </>
      ))}
    </div>
  )
}

export default SpecialHover
