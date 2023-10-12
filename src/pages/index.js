import Image from 'next/image'
import { Inter } from 'next/font/google'
import UpperHeader from './components/UpperHeader'
import LowerHeader from './components/LowerHeader'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <div>
    <UpperHeader />
    <LowerHeader />
   </div>
   </>
  )
}
