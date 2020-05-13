import React from 'react';

class NumberForm extends React.Component {

    render() {
        const {addRandomNumber } = this.props;

        return (<div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <button className='btn btn-primary'
                        onClick={addRandomNumber}
                    > Add Random Number</button>
                </div>
            </div>
        </div>)
    };
    
}

export default NumberForm;