
import './App.css';
import Banner from './Banner';
import Row from './Row.js';
import Requests from './Requests';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
     <Nav/>
     <Banner/> 
    
    <Row title='NETFLIX ORIGNALS' fetchUrl={Requests.fetchNetflixOriginals} isLargeRow/>
    <Row title='Trending Now' fetchUrl={Requests.fetchTrending}/>
    <Row title='Top Rated' fetchUrl={Requests.fetchTopRated}/>
    <Row title='Action Movies' fetchUrl={Requests.fetchActionMovies}/>
    <Row title='Comedy Movies' fetchUrl={Requests.fetchComedyMovies}/>
    <Row title='Horror Movies' fetchUrl={Requests.fetchHorrorMovies}/>
    <Row title='Romance Movies' fetchUrl={Requests.fetchRomanceMovies}/>
    <Row title='Documentaries' fetchUrl={Requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
