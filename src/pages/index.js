import Image from 'next/image'
import { Inter } from 'next/font/google'
import MobilePage from '@/components/MobilePage'
import DesktopPage from '@/components/DesktopPage';
import styles from '../styles/Home.module.css';
import Logo from '../../public/images/logo.svg'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [error,setError] = useState('');
  const [bill,setBill] = useState(0);
  const [customValue,setCustomValue] = useState();
  const [numberOfPeople,setNumberOfPeople] = useState();
  const [perPerson,setPerPerson] = useState(0);
  const [total,setTotal] = useState(0);
  const [percentage,setPercentage] = useState(1);
  const [selectedButton, setSelectedButton] = useState(null);

//onReset
const onReset= async()=>{
 setPerPerson(0);
 setTotal(0);
 setCustomValue('');
 setError('')
 setNumberOfPeople('');
 setPercentage('');
 handleButtonClick(0)
}

const handleButtonClick = (buttonNumber) => {
  setSelectedButton(buttonNumber);
};
const calculateTipFunction = async(percent) =>{
  setPercentage(percent)
}


const handleKeyDownKe = async (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    if (numberOfPeople <= 0) {
      setError('Cant be Zero');
      return;
    } else {
      let tip = bill * percentage / 100;
      setTotal(tip);
      setPerPerson(tip / numberOfPeople);
      console.log(numberOfPeople, tip, perPerson);
    }
  }
  
};

  return (
 <div className={`${styles.HomePage}`}> 
<div className={`${styles.LogoDiv} flex  w-full place-content-center items-center`}>
  <Image src={Logo} alt='logo' />
</div>
<div  className={`${styles.DesktopGrid}`}>
<DesktopPage  error={error} total={total} 
perPerson={perPerson} calculateTipFunction={calculateTipFunction} 
setBill={setBill} numberOfPeople={numberOfPeople} 
setNumberOfPeople={setNumberOfPeople}  customValue={customValue}  
setCustomValue={setCustomValue}
onReset={onReset} handleKeyDownKe={handleKeyDownKe}
setPercentage={setPercentage}
selectedButton={selectedButton}
handleButtonClick={handleButtonClick}/>

</div>
<div className={`${styles.MobileGrid} `}>
  <MobilePage  error={error} perPerson={perPerson}
   total={total}  calculateTipFunction={calculateTipFunction} 
   setBill={setBill} numberOfPeople={numberOfPeople}
    setNumberOfPeople={setNumberOfPeople} customValue={customValue}  
    setCustomValue={setCustomValue} 
    handleButtonClick={handleButtonClick}
    onReset={onReset} handleKeyDownKe={handleKeyDownKe}
    setPercentage={setPercentage}
    selectedButton={selectedButton}
    />
</div>

 </div>
  )
}
