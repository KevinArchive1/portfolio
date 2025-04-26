import './App.css';
import Nav from './components/navigationBar';
import Main from './components/MainContent';
import AboutMe from './components/AboutMe';
import Project from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';



function App() {

  return (
    <div className="App">
      <Nav />
      <main className='flex flex-col pt-[80px] gap-[60px] '>
        <Main  />
        <section id='About' className="scroll-mt-20">
          <AboutMe />
        </section>
        <section id='Projects' className="scroll-mt-20 ">
          <h1 className='px-4 text-[3rem] text-center font-bold'>Projects</h1>
            <div className='flex flex-wrap  justify-evenly items-center gap-4 p-4'>
              <Project image="/Images/prog1.png" title="Simple Dice Roller" link="https://kevinarchive1.github.io/Simple-Dice-Roller/" description="A simple probability game created using JavaScript. Using three dice to display different outcomes"/>
              <Project image="/Images/prog2.png" title="Brother Jhonny's Promotion Website" link="https://kevinarchive1.github.io/" description="A promotional website for a simple fast food shop, exploring different flavors and serving coffee with a smile. Featuring the best chicken in Lucena."/>
              <Project image="/Images/prog3.png" title="Simple To-Do-List in React" link="https://kevinarchive1.github.io/itp-webdev-todolist/" description="A to-do list application built with React, showcasing the fundamentals of CRUD operations."/>
            </div>
        </section>
        <section id='Contacts' className="scroll-mt-20">
          <ContactMe />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
