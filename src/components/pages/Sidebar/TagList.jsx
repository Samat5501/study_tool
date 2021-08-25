import React from 'react'
import { useHistory } from 'react-router-dom';

const TagList = ({ tag, idx }) => {
    let history = useHistory()
    return (
        <div key={idx}>
            <li className='navbar__link ltsp' onClick={() => history.push(tag.id)}>{tag.title} </li>
        </div>
    )
}

export default TagList
