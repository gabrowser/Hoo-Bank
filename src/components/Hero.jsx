import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
   <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}>
         <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <img src={discount} alt="Discount" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph}`}>
               <span className="text-white">20%</span> Discount for {" "}
               <span className="text-white">1 Month</span> Account
            </p>
         </div>

         <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold text-[52px] ss:text-[72px] text-white leading-[75px] ss:leading-[100px]">The Next
               <br className="hidden sm:block" /> {" "}
               <span className="text-gradient">Generation</span>
            </h1>
            <div className="hidden ss:flex mr-0 md:mr-4">
               <GetStarted />
            </div>
         </div>

         <h1 className="flex-1 font-poppins font-semibold text-[52px] ss:text-[72px] text-white leading-[75px] ss:leading-[100px]">
            Payment Method.
         </h1>
         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>

      </div>
         <img src={robot} alt="billing" className="" />
      <div>

      </div>
   </section>
)

export default Hero