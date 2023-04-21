import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Footer, Header } from './layout';
import { About } from './views/About/About';
import { TechSkills } from './views/TechSkills/TechSkills.jsx';
import { Education } from './views/Education/Education.jsx';
import { Projects } from './views/Projects/Projects.jsx';
import { Contact } from './views/Contact/Contact.jsx';
import { NotFound } from '../src/views/NotFound/NotFound';

const App = () => {
    return (
        <Router>
            <GlobalStyle/>
                <Header/>
                    <main>
                        <Routes>
                            <Route exact path='/' element={<About/>}/>
                            <Route exact path='/Habilidades' element={<TechSkills/>}/>
                            <Route exact path='/Educacion' element={<Education />}/>
                            <Route exact path='/Proyectos' element={<Projects/>}/>
                            <Route exact path='/Contacto' element={<Contact/>}/>
                            <Route path='*' element={<NotFound/>}/>
                        </Routes>
                    </main>
                <Footer/>
        </Router>
    );
};

export default App;