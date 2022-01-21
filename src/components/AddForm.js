// Module imports
import React, { useState } from 'react';
import { connect } from 'react-redux';

// Action imports
import {
  setSmurf,
  setError
} from '../actions/index.js';



const AddForm = ({
  setSmurf, 
  setError, 
  errorMessage
}) => {
    const [state, setState] = useState({
        name:"",
        position:"",
        nickname:"",
        description:""
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (state.name === "" || state.position === "" || state.nickname === "") {
            setError('fields cannot be empty'); 
        } else {
            setSmurf(state);
        }
    }

    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input onChange={handleChange} value={state.name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input onChange={handleChange} value={state.position} name="position" id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input onChange={handleChange} value={state.nickname} name="nickname" id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea onChange={handleChange} value={state.description} name="description" id="description" />
            </div>
            {
                errorMessage && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {errorMessage}</div>
            }
            <button>Submit Smurf</button>
        </form>
    </section>);
}

const mapDispatchToProps = (dispatch) => ({
  setSmurf: (smurf) => dispatch(setSmurf(smurf)),
  setError: (error) => dispatch(setError(error))
});

const mapStateToProps = state => ({
  errorMessage: state.errorMessage
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm);

