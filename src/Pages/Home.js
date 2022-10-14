import '../index.css';
import styles from '../style';
import { Hero, Footer, VFC, Outside, Mitre} from '../components';
import {Face} from '../assets'

const Home = () => (
  <body>
    <div className={`bg-Background ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`text-4xl font-display font-bold text-white ${styles.boxWidth}`}>
          Hero 
        </div>
    </div>
    
    <div className={`bg-Background ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`text-4xl font-display font-bold text-white ${styles.boxWidth}`}>
        <Hero />
        <Mitre />
        <VFC />
        <Outside />
        <Footer />
      </div>
    </div>

    <div>
      <Face />
    </div>
  </body>
)
  
  export default Home;
  