import Image from 'next/image'

const ProfileIcon = () => {
  return (
    <span className='centered-aligned-flex-row rounded-circle overflow-hidden '><Image src="/IMG.png" alt="profile-img" width="30" height="30" /></span>
  )
}

export default ProfileIcon