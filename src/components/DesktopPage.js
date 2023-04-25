import styles from '../styles/Home.module.css';
import Person from '../../public/images/icon-person.svg'
import Image from 'next/image';

function DesktopPage({error,perPerson,total,calculateTipFunction,bill,setBill,setNumberOfPeople, numberOfPeople, customValue,setCustomValue,handleKeyDown,onReset,handleKeyDownKe,handleButtonClick,selectedButton} ) {
  return (
    <div className={`${styles.GridDiv} flex justify-between` }>

<div className={`${styles.Desktop} py-8 w-1/2 mx-auto`}>
  <div>
    <p>Bill</p>
    <div  className={`${styles.THeNumberBackground} flex justify-between w-full items-center py-3`}>
      <p className='mx-2'>$</p>
    <div>
   <form>
      <input type='number ' placeholder='2,340' className='w-24 bg-transparent' value={bill} onChange={(e)=>setBill(e.target.value)}/>
    </form>
   </div>
    </div>
  </div>

  <div className={`${styles.PercentageDivAll} py-10`}>
  <p>Select Tips %</p>
  <div className={`${styles.PercentageDiv} flex flex-wrap place-content-center items-center`}>
  <button className={`${styles.percentageTipsButtons} my-2 mx-auto py-1 rounded-sm ${selectedButton === 5 ? "bg-green-500" : "bg-teal-900"}`} onClick={() => { calculateTipFunction(5); handleButtonClick(5); }}>5%</button>
  <button className={`${styles.percentageTipsButtons} my-2 mx-auto py-1 rounded-sm ${selectedButton === 10 ? "bg-green-500" : "bg-teal-900"}`} onClick={() => { calculateTipFunction(10); handleButtonClick(10); }}>10%</button>
  <button className={`${styles.percentageTipsButtons} my-2 mx-auto py-1 rounded-sm ${selectedButton === 15 ? "bg-green-500" : "bg-teal-900"}`} onClick={() => { calculateTipFunction(15); handleButtonClick(15); }}>15%</button>
  <button className={`${styles.percentageTipsButtons} my-2 mx-auto py-1 rounded-sm ${selectedButton === 25 ? "bg-green-500" : "bg-teal-900"}`} onClick={() => { calculateTipFunction(25); handleButtonClick(25); }}>25%</button>
  <button className={`${styles.percentageTipsButtons} my-2 mx-auto py-1 rounded-sm ${selectedButton === 50 ? "bg-green-500" : "bg-teal-900"}`} onClick={() => { calculateTipFunction(50); handleButtonClick(50); }}>50%</button>
    <div className={`${styles.CustomButton} mx-auto px-6 py-1  rounded-sm`} >
      <input
      type="number"
      className='bg-transparent w-full'
      value={customValue}
      placeholder='Custom'
      onChange={(event) => setCustomValue(event.target.value)}
      onKeyDown={(event)=>handleKeyDown(event,customValue)}/>
     </div>
  </div>
  </div>

  <div className={`${styles.NumberOfPeople} py-8`}>
      <div className='flex justify-between'>
    <p>Number of People</p>
    <p>{error}</p>
   </div>
    <div className={`${styles.THeNumberBackground} flex justify-between w-full items-center py-3`} >
      <div>
      <p>
        <Image src={Person} alt="img" className='mx-4 text-2xl' />
      </p>
      </div>
   <div>
   <form>
      <input type='number' placeholder='0' className='w-12 bg-transparent'  
      value={numberOfPeople} 
      onChange={(e)=>setNumberOfPeople(e.target.value)}
      onKeyDown={(event)=>handleKeyDownKe(event,numberOfPeople)}
      />
    </form>
   </div>
    </div>
  </div>

</div>

<div className={`${styles.secondDesktop}  w-1/2 mx-auto px-8`}>
 <div className='flex justify-between items-center py-4 pt-10'>
  <div className='grid'>
<p className='font-medium' >Tip Amount</p>
<p className='font-thin'> / person</p>
  </div>
  <div>
    <p  className={`${styles.Amounts} text-3xl font-bold`} >$ {perPerson}</p>
  </div>
 </div>

 <div className='flex justify-between py-4'>
  <div className='grid'>
<p className='font-medium'>Total</p>
<p className='font-thin'> / person</p>
  </div>
  <div>
    <p className={`${styles.Amounts} font-bold text-3xl`} >$ {total}</p>
  </div>
 </div>

  <div className={`${styles.ResetButtonDiv}  w-full`} >
    <button className={`${styles.ResetButton} flex place-content-center py-2 rounded-sm`} onClick={onReset}>RESET</button>
  </div>
</div>

    </div>
  )
}

export default DesktopPage