import Avvvatars from 'avvvatars-react'

export default function MyAvatar() {
  //modify this to get user emails from database for value
  return (
    <Avvvatars value="default_user@gmail.com" style='shape' />
  )
}