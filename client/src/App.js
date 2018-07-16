// MODULES // 
import React from "react";

// COMPONENTS // 
import NavBar from "./components/NavBar/NavBarCont";
import Jumbotron from "./components/Jumbotron/JumbotronCont";
import MemoryGrid from "./components/MemoryGrid/MemoryGridCont";
import Footer from "./components/Footer/FooterCont";


const App = () => {
  return( 
    <div>
      <NavBar />
      <Jumbotron />
      <MemoryGrid/>
      <Footer/>
    </div>
  );
}

export default App;
