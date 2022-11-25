import { useState } from 'react'
import contactimg from '../svgs/contactimg.svg'
import axios from 'axios'

function ContactSection() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  const sendMessage = async () => {
    try {
      const checkName = /^[a-zA-Z]+$/.test(fullname)
      if (!checkName) {
        setError('Kindly enter a valid name.')
        return
      }

      const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      if (!email.match(regex)) {
        setError('Kindly enter a valid email.')
        return
      }

      if (description.length == 0) {
        setError('Description can not be empty.')
        return
      }

      const data = {
        fullname: fullname,
        email: email,
        description: description,
      }

      setError('')
      const response = await axios.post('http://localhost:5000/api/messages', data)
      console.log(response)
    } catch (err) {
      console.log(err)
      setError('' + err)
    }
  }

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
          <input
            type='text'
            placeholder='full name'
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            type='email'
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          rows={6}
          placeholder='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button onClick={sendMessage}>SEND</button>
        {error && error}
      </div>
    </div>
  )
}

export default ContactSection
