import "./assets/Style/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Contact from "./containers/Contacts/Contact";
import NewContact from "./containers/NewContact/NewContact";
import EditContact from "./containers/EditContact/EditContact";
function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path={"/"} element={<Contact/>}/>
        <Route path={"/contacts"} element={<Contact/>}/>
        <Route path={"/contacts/new"} element={<NewContact/>}/>
        <Route path={"/contacts/edit/:id"} element={<EditContact/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
