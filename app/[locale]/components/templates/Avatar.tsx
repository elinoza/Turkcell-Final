import Image from 'next/image'

const Avatar = ({imgUrl}:{imgUrl:string}) => {
  return (
    <span className='centered-aligned-flex-row rounded-circle overflow-hidden '>{imgUrl ?<Image src={imgUrl} alt="profile-img" width="30" height="30" />:  <span className="rounded-circle bg-secondary" style={{ width: 24, height: 24 }}></span>}</span>
  )
}

export default Avatar