import { render } from '@testing-library/react';
import './App.css';
import Movie from './components/Movie';
import Timer from './components/Timer';
import db from './data/data';
import Button from './components/Button';
import Box from './components/boxComponents/Box';

function App() {
    function onDelete(){
    return null;
    }
    return (
        <div>
            <Box />
            <Timer start={0} />
            <Timer start={30} />
            <Timer start={50} />
            <Button>Click</Button>

            {db.map((m) => < Movie key={m.id} {...m} />)}

        </div>

    )

}

export default App;
