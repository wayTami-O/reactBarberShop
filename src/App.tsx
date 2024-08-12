import HomePage from "./pages/home/index.tsx"
import ResultPage from './pages/result/index.tsx';
import ServicesPage from "./pages/services/index.tsx";
import NotesPage from "./pages/notes/notes.tsx";
import MastersPage from './pages/masters/index.tsx';
import AboutPage from './pages/about/index.tsx';
import FeedbackPage from './pages/feedback/index.tsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path='/result' element={<ResultPage />} />
        <Route path="/services" element={<ServicesPage />}/>
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/masters" element={<MastersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
