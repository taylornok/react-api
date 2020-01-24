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
        fetch('https://authenticjobs.com/api/?api_key=method=aj.jobs.search&format=json&keywords=php,mysql&perpage=20')
            .then(res => {
                // const resJSON = res.json();
                return res.json();
            })            
            .then((data) => {
                const results = data.listings.listing
                this.setState ({listings: results})
                // console.log(results[0])
                console.log(this.state.listings)
                // this.setState({ listings: data })
                // console.log(this.state);
            })
            .catch(console.log)
    }
}

export default App;
