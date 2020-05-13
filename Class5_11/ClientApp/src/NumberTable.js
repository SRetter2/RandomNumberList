import React from 'react';
import NumberForm from './NumberForm';
import NumberRow from './NumberRow';

class NumberTable extends React.Component {

    state = {
        randomNumbers: [],
        addedNumbers: []
    }

    addRandomNumber = () => {
        const obj = {
            rndNum: Math.floor(Math.random() * 10000) + 1,
            add: true
        };
        const randomNumbers = [...this.state.randomNumbers, obj];      
        this.setState({ randomNumbers });
    }
    addToList = r => {         
        const randomNumbers = this.state.randomNumbers;
        randomNumbers.forEach(function (n) {
            if (n.rndNum === r.rndNum) {
              n.add = false;
            };
        });
        const addedNumbers = [...this.state.addedNumbers, r.rndNum];
        this.setState({ addedNumbers, randomNumbers }); 
    }
    removeFromList = r => {
        const numbers = [...this.state.addedNumbers];
        const addedNumbers = numbers.filter(n => n !== r.rndNum);
        const randomNumbers = this.state.randomNumbers;
        randomNumbers.map(function (n) {
            if (n.rndNum === r.rndNum) {
                n.add = true;
            }
        });
        this.setState({ addedNumbers, randomNumbers });
    }

   
    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <NumberForm addRandomNumber={this.addRandomNumber} />
                <div style={{ marginTop: 10 }} className='well, container'>
                <table className='table table-striped table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>Random Number</th>
                            <th>Add/Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.randomNumbers.map((r, i) => <NumberRow key={i} rndNum={r}
                            addToList={() => this.addToList(r)} removeFromList={() => this.removeFromList(r)} />)}
                    </tbody>
                    </table>
                    </div>
                <h4>List of added numbers:</h4>
                <ul>
                    {this.state.addedNumbers.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
            </div>);

    }


}

export default NumberTable;