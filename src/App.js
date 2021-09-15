import './App.css'
import Row from './Row'
import request from './request'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  
  return (
    <div className="App">
      <Nav />
      <Banner />
       <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow />
       <Row title="Trending Now" fetchUrl={request.fetchTrending} />
       <Row title="Top Rated"  fetchUrl={request.fetchTopRated} />
       <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
       <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
       <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
       <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
       <Row title="Documentaries Movies" fetchUrl={request.fetchDocumentariesMovies} />
    </div>
  );
}

export default App;





