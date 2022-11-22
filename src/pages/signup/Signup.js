import { useState } from 'react'

//styles
import './Signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, displayName, thumbnail);
  }

  const handleFileChange = (e) => {
    setThumbnail(null)
    let selected = e.target.files[0]
    console.log(selected);

    if (!selected) { // remove the '!' if you want to allow profiles without photo.
      setThumbnailError('Please select file')
      return //this return is cus when we got 1 error - we go out of this function.
    }
    if (!selected.type.includes('image')) { // the 'type' is from clg(selected). type: "text/plain"
      setThumbnailError('Selected file must be an Image')
      return
    }
    if (selected.size > 100000) {
      setThumbnailError('Image file must be less than 100kb')
      return
    }

    setThumbnailError(null)
    setThumbnail(selected)
    console.log('Thumbnail updated !');
  }

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
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
        <span>Password</span>
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
          onChange={handleFileChange}
          />
          {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>
      <button className="btn">Signup</button>
    </form>

  )
}
