import React, { Component } from 'react';
import './bookmarkitem-styles.css';

class BookMarkItem extends Component {
    render() {
        const { sitename, siteurl, id } = this.props.item;
        return (
            <li className="bookmarkitem">
                <div className="row">
                    <div className="col-md-7">
                        {sitename}
                    </div>
                    <div className="col-md-3">
                        <a
                            href={siteurl}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="btn btn-success">
                            Visit
                        </a>
                        <button
                            className="btn btn-danger"
                            onClick={() => this.props.handleDelete(id)}
                        >Delete
                        </button>
                    </div>
                </div>
            </li>
        )
    }
}
export default BookMarkItem;