import { Routes,Route } from 'react-router-dom';
import VideoDetail from './components/VideoDetail';
import SearchFeed from './components/SearchFeed';
import Home from './components/Home';

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/video/:id" element={<VideoDetail/>} />
          <Route path="/search/:searchTerm" element={<SearchFeed/>} />
        </Routes>
      </>
  );
}

export default App;
