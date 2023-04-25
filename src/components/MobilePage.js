import styles from '../styles/Home.module.css';
import Person from '../../public/images/icon-person.svg'
import Image from 'next/image';

function MobilePage() {
  return (
    <div className={`${styles.GridDiv}`}>

<div className={`${styles.firstMobile} py-8`}>
  <div>
    <p>Bill</p>
    <div  className={`${styles.THeNumberBackground} flex justify-between w-full items-center py-3`}>
      <p className='mx-2'>$</p>
      <p className='mx-2'>142.55</p>
    </div>
  </div>

  <div className={`${styles.PercentageDivAll} py-10`}>
  <p>Select Tips %</p>
  <div className={`${styles.PercentageDiv} flex flex-wrap place-content-center items-center`}>
    <button className={`${styles.percentageTipsButtons} my-2 mx-auto py-1 rounded-sm`}>5%</button>
    <button className={`${styles.percentageTipsButtons} mx-auto py-1 rounded-sm`}>10%</button>
    <button className={`${styles.percentageTipsButtons}  mx-auto py-1 rounded-sm`}>15%</button>
    <button className={`${styles.percentageTipsButtons} mx-auto py-1 rounded-sm`}>25%</button>
    <button className={`${styles.percentageTipsButtons} mx-auto py-1 rounded-sm`}>50%</button>
    <button className={`${styles.CustomButton} mx-auto px-6 py-1  rounded-sm`}>Custom </button>
  </div>
  </div>

  <div className={`${styles.NumberOfPeople} py-8`}>
    <p>Number of People</p>
    <div className={`${styles.THeNumberBackground} flex justify-between w-full items-center py-3`} >
      <div>
      <p>
        <Image src={Person} alt="img" className='mx-4 text-2xl' />
      </p>
      </div>
   <div>
   <form>
      <input type='text ' placeholder='0' className='w-12 bg-transparent'/>
    </form>
   </div>
    </div>
  </div>

</div>

<div className={`${styles.secondMobile} px-6`}>
 <div className='flex justify-between items-center py-4'>
  <div className='grid'>
<p className='font-medium' >Tip Amount</p>
<p className='font-thin'> / person</p>
  </div>
  <div>
    <p  className={`${styles.Amounts} font-bold text-2xl`} >$ 4.27</p>
  </div>
 </div>

 <div className='flex justify-between py-4'>
  <div className='grid'>
<p className='font-medium'>Total</p>
<p className='font-thin'> / person</p>
  </div>
  <div>
    <p className={`${styles.Amounts} font-bold text-2xl`} >$ 32.97</p>
  </div>
 </div>

  <div className={`${styles.ResetButtonDiv}  w-full`} >
    <button className={`${styles.ResetButton} flex place-content-center py-2 rounded-sm`}>RESET</button>
  </div>
</div>

    </div>
  )
}

export default MobilePage