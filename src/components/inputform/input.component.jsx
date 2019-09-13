import React, { Component } from 'react';

class InputForm extends Component {
    render() {
        const { handleName, handleURL, addBookMark, sitename, siteurl } = this.props;
        return (
            <div>
                <form onSubmit={addBookMark}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleName}
                            placeholder="Enter Site name"
                            value={sitename}
                            name="sitename" />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleURL}
                            placeholder="Enter URL"
                            value={siteurl}
                            name="siteurl"
                        />

                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Add Bookmark</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default InputForm;
