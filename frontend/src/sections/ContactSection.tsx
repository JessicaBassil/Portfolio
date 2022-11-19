import contactimg from '../svgs/contactimg.svg'

function ContactSection() {
  return (
    <div id='contact' className='section-contact flex'>
      <img src={contactimg} />
      <div className='form'>
        <span className='title handwriting-font'>Contact Me</span>
        <p className='thin-spaced-font'>
          Feel free to contact me if you&apos;re interested in my work or for any other reason.
          Thank you. &lt;3
        </p>
        <div className='flex space-between'>
          <input type='text' placeholder='full name' />
          <input type='email' placeholder='email' />
        </div>
        <textarea rows={6} placeholder='description'></textarea>
        <button>SEND</button>
      </div>
    </div>
  )
}

export default ContactSection
