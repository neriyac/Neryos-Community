import { useState } from 'react'

//styles
import './Signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)

  return (
    <form className='auth-form'>
      <h2>Signup</h2>
      <label>
        <span>User Name</span>
        <input
          type="text"
          required
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          />
      </label>
      <label>
        <span>Email</span>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          />
      </label>
      <label>
        <span>Profile IMG</span>
        <input
          type="file"
          required
          value={email}
          />
      </label>
      <button className="btn">Signup</button>
    </form>

  )
}
