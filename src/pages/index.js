import Image from 'next/image'
import { Inter } from 'next/font/google'
import UpperHeader from './components/UpperHeader'
import LowerHeader from './components/LowerHeader'
import CategoriesHeader from './components/CategoriesHeader'
import SwipeBanner from './components/SwipeBanner'
import AllCategories from './components/AllCategories'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <div>
    <UpperHeader />
    <LowerHeader />
    <CategoriesHeader />
    <SwipeBanner />
    <AllCategories />
   </div>
   </>
  )
}
