import UserInfo from '@/components/UserInfo'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="grid h-screen -mt-24 place-items-center">
      <UserInfo />
    </div>
  )
}
