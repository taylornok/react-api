import React, {Component} from 'react';
import Listings from './components/listings';

class App extends Component {
    render() {
        return (
            <Listings listings={this.state.listings} />
        )
    }

    state = {
        listings: []
    };

    componentDidMount() {
        //API WORKING IN BROWSER
        fetch('https://authenticjobs.com/api/?api_key=&method=aj.jobs.search&keywords=php,mysql&perpage=20')
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                this.setState({ listings: data })
            })
            .catch(console.log)
    }
}

export default App;
