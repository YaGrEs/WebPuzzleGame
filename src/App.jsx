import React, {useState} from 'react';
import Title from "./components/Title";
import First from "./components/First";

const App = () => {
    const [page, setPage] = useState("title");
    const path = {
        title: <Title setPage={setPage}/>,
        first: <First/>
    }
    return path[page]
};

export default App;