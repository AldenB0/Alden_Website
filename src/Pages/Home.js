import '../index.css';
import styles from '../style';
import { Hero, Face, Footer, VFC, Outside, Mitre, Animation} from '../components';

const Home = () => (
  <body>
    <div className={`bg-Background ${styles.flexStart}`}>
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
      <Animation />
    </div>
  </body>
)
  
  export default Home;
  