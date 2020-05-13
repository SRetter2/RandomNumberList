import React from 'react';

class NumberRow extends React.Component {

    render() {

        const { rndNum, addToList, removeFromList} = this.props;
        return (           
            <tr>
                    <td>{rndNum.rndNum}</td>
                    {rndNum.add && <td><button className='btn btn-success' onClick={addToList} id='add-btn'>Add</button></td>}                    
                    {!rndNum.add && <td><button className='btn btn-danger' onClick={removeFromList} id='remove-btn'>Remove</button></td>}
                    </tr>
           );
    }
}

export default NumberRow;