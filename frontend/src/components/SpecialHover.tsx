import darkbutterfly from '../svgs/darkbutterfly.svg'
import lightbutterfly from '../svgs/lightbutterfly.svg'

function SpecialHover() {
  const n = 1000

  return (
    <div key='special-hover' className='flex wrap fixed special-hover-container'>
      {[...Array(n)].map((elementInArray, index) => (
        <>
          <img
            alt='.'
            key={index.toString() + 'dark'}
            className='special-hover-effect'
            src={darkbutterfly}
          />
          <img
            alt='.'
            key={index.toString() + 'light'}
            className='special-hover-effect'
            src={lightbutterfly}
          />
        </>
      ))}
    </div>
  )
}

export default SpecialHover
