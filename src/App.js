import styles from './App.module.scss';
import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import ProjectModal from './components/ProjectModal/ProjectModal';

function App() {
  return (
    <div className="App">
      <Header/>
        <div className={`${styles.app__leftSide} ${styles.app__side}`}></div>
        <div className={styles.app__container}>
          <div className={styles.app__photo}></div>
          <div className={styles.app__content}>
            <div className={styles.app__contantSection}>
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about/' element={<About />}/>
                <Route path='/portfolio' element={<Portfolio />}/>
              </Routes>
            </div> 
          </div>
        </div>
        <div className={`${styles.app__rightSide} ${styles.app__side}`}></div>
      <Footer/>
      {/* <ProjectModal /> */}
    </div>
  );
}

export default App;
