import Image from 'next/image'
import { Inter } from 'next/font/google'
import UpperHeader from './components/UpperHeader'
import LowerHeader from './components/LowerHeader'
import CategoriesHeader from './components/CategoriesHeader'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <div className='ml-20 mt-3'>
    <UpperHeader />
    <LowerHeader />
    <CategoriesHeader />
   </div>
   </>
  )
}
