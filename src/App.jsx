import styles from "./style";

//A partir do arquivo index.js é possível pegar os componentes dessa maneira
import {NavBar, Hero, Billing, Button, Business, CardDeal, Clients, CTA, FeedbackCard, Footer, GetStarted, Stats, Testimonials} from './components';

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/> 
          <CardDeal/> 
          <Testimonials/>
          <Clients/> 
          <CTA/> 
          <Footer/>
        </div>
      </div>
    </div>
  )

export default App