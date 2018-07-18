// MODULES //
import React, {Component} from "react";

// COMPONENTS //
import NavBarCont from "./components/NavBar";
import JumbotronCont from "./components/Jumbotron";
import MemoryGridCont from "./components/MemoryGrid";
import FooterCont from "./components/Footer";

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
        const {count, topScore} = this.state;
        const numReset = 0;
        this.setState({count: numReset})
        count > topScore
            ? this.setState({topScore: count})
            : this.setState({topScore});
        alert('Oh SNAP! Your memory needs work');
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
