import Image from "next/image"

 
 
const Avatar = () => {
  return (
    <Image className="hidden  md:block rounded-full"  width={30} height={30} src="/images/placeholder.jpg" alt="Avatar" />
  )
}

export default Avatar