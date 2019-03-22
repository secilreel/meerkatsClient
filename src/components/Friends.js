import React, {Component} from 'react';

export default class Friends extends Component{

    state ={error: null};

    render(){
        return(
            <div className="friends container">
                <h2>Add Friends</h2>
                <form>
                    <div className="search-box">
                        <label htmlFor="loginUsername">Search for Friends:</label>
                        <input required name="search" type="text"/>
                    </div>
                    <div className="button-box">
                    <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}