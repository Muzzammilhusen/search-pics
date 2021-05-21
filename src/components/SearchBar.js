import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };
    onSubmitForm = (event) => {
        event.preventDefault();

        this.props.onAppSubmit(this.state.term);
    };

    render() {

        return (
            <div className="ui segment">
                <form onSubmit={this.onSubmitForm} className=" ui form ">
                    <div className="ui field">
                        <label>Image serach</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>);

    }
}

export default SearchBar;