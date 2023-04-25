import Image from 'next/image'
import { Inter } from 'next/font/google'
import MobilePage from '@/components/MobilePage'
import DesktopPage from '@/components/DesktopPage';
import styles from '../styles/Home.module.css';
import Logo from '../../public/images/logo.svg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
 <div className={`${styles.HomePage} w-screen`}> 
<div className={`${styles.LogoDiv} flex  w-full place-content-center items-center`}>
  <Image src={Logo} alt='logo' />
</div>
<div  className={`${styles.DesktopGrid}`}>
<DesktopPage />
</div>
<div className={`${styles.MobileGrid} `}>
  <MobilePage />
</div>

 </div>
  )
}
