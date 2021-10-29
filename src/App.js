import './App.css';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter, Route} from "react-router-dom";
import EmployeesPage from "./components/EmployeesPage/EmployeesPage";
import EmployeesContainerPage from "./components/EmployeesPage/EmployeesContainerPage";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>

                <div className={'app-wrapper-content'}>
                    <Route exact path={'/'} render={ () => <HomePage /> } />
                    <Route path={'/employees'} render={ () => <EmployeesContainerPage /> } />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
