import ReactDOM,{ createRoot } from 'react-dom/client'
import './pindex.css'
import Nav from './nav.jsx'
import {CardList} from './datos.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Nav />
    <CardList />

  </>
)
