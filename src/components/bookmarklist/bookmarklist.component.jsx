import React, { Component } from 'react'
import BookMarkItem from '../bookmarkitem/bookmarkitem.component';


class BookmarkList extends Component {
    render() {
        const { handleDelete } = this.props;
        return this.props.bookmarks.map((item) => (

            <BookMarkItem
                key={item.id}
                item={item}
                bookmark={this.props.bookmark}
                handleDelete={() => handleDelete(item.id)}
            />

        ))
    }
}
export default BookmarkList;