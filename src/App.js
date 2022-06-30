import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
 import Head from './Components/Head';
import CardList from './Components/Card/CardList';
import Pagination from './Components/Numbers';


function App() {
 const [journal, setJournal] = useState([])
 const [load , setLoad] = useState(false)
 const [page , setPage] = useState(1)
 useEffect(() => {
  query()
 } , [])


 async function query(page = 1, size = 6){
  setLoad(false)
  const URL = `https://newsapi.org/v2/everything?q=nigeria&apiKey=3b8cb22afdf34214a0baf9c8071d6193&pageSize=${size}&page=${page}`

  const theQuery = await fetch(URL)
  const response = await theQuery.json()

  setJournal(response.articles)
  setLoad(true)
}

const handlePageChange = (num) => {
  setPage(num)
  query(num)
}

  return (
    <div className="App">
       <Navbar />
       <Head />
       {load && <CardList posts={journal}/>}
       {load && <Pagination page={page} handlePageChange={handlePageChange}/>}
    </div>
  );
}


export default App;
