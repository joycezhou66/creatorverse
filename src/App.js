import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import ShowCreators from './pages/showCreators';
import ViewCreator from './pages/viewCreator';
import EditCreator from './pages/editCreator';
import AddCreator from './pages/addCreator';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <ShowCreators /> },
        { path: "creator/:id", element: <ViewCreator /> },
        { path: "edit/:id", element: <EditCreator /> },
        { path: "add", element: <AddCreator /> }
    ]);
    return routes;
};

function App() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}


export default App;