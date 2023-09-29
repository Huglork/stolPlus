import React from "react";
import {ChairsList} from "./pages/ChairsList/ChairsList";
import {Route, Routes} from "react-router";
import {Chair} from "./pages/Chair/Chair";
import './App.css';
import {Header} from "./components/Header/Header";
import {TablesList} from "./pages/TablesList/TablesList";
import {Table} from "./pages/Table/Table";
import {Footer} from "./components/Footer/Footer";
import {Main} from "./components/Main/Main";
import {ArmchairsList} from "./pages/ArmchairsList/ArmchairsList";
import {Armchair} from "./pages/Armchair/Armchair";
import {Delivery} from "./pages/Delivery/Delivery";
import {Contacts} from "./pages/Contacts/Contacts";
import {Terms} from "./pages/Terms/Terms";
import {Payment} from "./pages/Payment/Payment";
import {Guaranties} from "./pages/Guaranties/Guaranties";



function App() {
  return (
    <div className="App">

        <Header/>
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/delivery'} element={<Delivery/>}/>
            <Route path={'/payment'} element={<Payment/>}/>
            <Route path={'/contacts'} element={<Contacts/>}/>
            <Route path={'/guaranties'} element={<Guaranties/>}/>
            <Route path={'/terms'} element={<Terms/>}/>
            <Route path={'/chairsList'} element={<ChairsList/>}/>
            <Route path={'/tablesList'} element={<TablesList/>}/>
            <Route path={'/armchairsList'} element={<ArmchairsList/>}/>
            <Route path='/chairs/:id' element={<Chair/>}/>
            <Route path='/tables/:id' element={<Table/>}/>
            <Route path='/armchairs/:id' element={<Armchair/>}/>
        </Routes>

        <Footer/>
    </div>
  );
}

export default App;
