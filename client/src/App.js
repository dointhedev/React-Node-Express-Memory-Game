// MODULES //
import React, {Component} from "react";

// COMPONENTS //
import NavBarCont from "./components/NavBar/NavBarCont";
import JumbotronCont from "./components/Jumbotron/JumbotronCont";
import MemoryGridCont from "./components/MemoryGrid/MemoryGridCont";
import FooterCont from "./components/Footer/FooterCont";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            topScore: 0
        };
    }
    increaseCount = () => {
        const {count} = this.state;
        this.setState({
            count: count + 1
        })
    }
    resetCount = (arr) => {
        console.log(arr);
        const {topScore, count} = this.state;
        count > topScore ? this.setState({count: 0, topScore: count}) : this.setState({topScore});
    }

    render() {
        return (
            <div>
                <NavBarCont count={this.state.count} topScore={this.state.topScore}/>
                <JumbotronCont/>
                <MemoryGridCont
                    increaseCount={this.increaseCount}
                    resetCount={this.resetCount}/>
                <FooterCont/>
            </div>
        );
    }
}

export default App;
