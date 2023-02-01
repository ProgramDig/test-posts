import 'materialize-css'
import NavBar from "./components/NavBar/NavBar";
import {useRoutes} from "./hooks/routes.hook";

function App() {
    const routes = useRoutes()
    return (
        <div>
            <NavBar/>
            <div className="container">
                {routes}
            </div>
        </div>
    );
}

export default App;
