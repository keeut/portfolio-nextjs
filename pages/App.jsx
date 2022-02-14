  import React from 'react';
  import Intro from './components/intro/intro';
  import styles from './App.module.css'
  import Skills from './components/skills/skills';
  import Projects from './components/projects/projects';
  import Header from './components/header/header';
  import WhoAreYou from './components/whoAreYou/whoAreYou';

  const App = () => {

      return (
          <div className={styles.container}>
            <Header/>
            <Intro/>
            <WhoAreYou/>
            <Skills/>
            <Projects/>
          </div>
      );
  };

  export default App;