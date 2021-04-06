import React from 'react';

const AddTransaction = () => {
    return (
        <div className='form-wrapper'>
            <form>
                <div className="input-group income">
                    <input type="text" placeholder="Add income..." autoComplete="off" />
                    <input type="number" placeholder="Amount" autoComplete="off" />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <form>
                <div className="input-group expense">
                    <input type="text" placeholder="Add expenses..." autoComplete="off" />
                    <input type="number" placeholder="Amount" autoComplete="off" />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default AddTransaction;