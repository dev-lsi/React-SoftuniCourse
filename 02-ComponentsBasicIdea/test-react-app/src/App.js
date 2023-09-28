import { render } from '@testing-library/react';
import './App.css';
import Movie from './components/Movie';
import Timer from './components/Timer';
import db from './data/data';

function App() {
    return (
        <div>
            <Timer start={20}/>

            { db.map((m) => <Movie
            className="movieCard"
            title={m.name}
            director={m.director}
            year={m.year}
            actors={m.actors}/>)}
        </div>
        
    )          
            
}

export default App;
