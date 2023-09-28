import { render } from '@testing-library/react';
import './App.css';
import Movie from './components/Movie';
import Timer from './components/Timer';
import db from './data/data';
import Button from './components/Button';

function App() {
    
    return (
        <div>
            <Timer start={0}/>
            <Timer start={30}/>
            <Timer start={50}/>
            
            <Button>Click</Button>

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
