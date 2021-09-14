import React, { useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { userDetails } from '../../userDetails'
import { context } from '../../App.js'
import { useHistory } from 'react-router-dom'

export default function Adduser() {
  var contextData = useContext(context)

  const history = useHistory()

  const { user, setUser, username, setName, image, setImage } = contextData

  const addUsers = () => {
    if (username === '' && image === '') {
      alert('Please enter the value')
    } else {
      setUser([
        ...user,
        { id: userDetails.length + 1, name: username, img: image },
      ])
      setName('')
      setImage('')
      history.push('/users')
    }
  }

  return (
    <div className='add-user'>
      <p className='add-user-heading'> Create User </p>
      <TextField
        id='outlined-basic'
        label='Name'
        variant='outlined'
        value={username}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <TextField
        id='outlined-basic'
        label='Image Link'
        variant='outlined'
        value={image}
        onChange={(event) => setImage(event.target.value)}
        required
      />

      <Button variant='outlined' color='primary' onClick={addUsers}>
        Submit
      </Button>
    </div>
  )
}
