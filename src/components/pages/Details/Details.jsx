import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './details.css'
import { add_list } from '../../store/actions';

const Details = () => {
    const {id} = useParams()
    const info = useSelector(state => state.info)
    const newList = useSelector(state => state.newList)
    const dispatch = useDispatch()
   
    const item = info.filter((f) => f.id === id)[0];

    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')
    var uniqid = require('uniqid');
console.log(newList);
    const onAdd = () => {
        dispatch(add_list({
            newTitle,
            newDescription,
            id: uniqid()
        }))
        // setTitle('')
        // setList('')
    }
    return (
        <div className='details'>
            {/* <div> */}
                <p className='title__details'>{item.title}</p>
                {item.description ? (
                    <div className='description__details'>description: </div>
                ) : ("")}
                <p className='p__details1 details_des'><pre>{item.description}</pre></p>
                {item.code ? (
                  <span>your code:</span>   
                ):("")}
                <p className='p__details code__details'><pre>{item.code}</pre></p>
                {item.linkTitle ? (
                  <span>Link Title:</span>   
                ):("")}
                <p className='p__details'>{item.linkTitle}</p>
                {item.link ? (
                <span className="link__title">Link:</span>
                ) : ("")}
                {/* <p className='p__details link__details'>{item.link}</p> */}
                 <a className='link__link' href={item.link}>{item.linkTitle}</a>
                {/*<span>{newList.map((list, idx) => {
                    return (
                        <span>{list.newTitle}</span>
                    )
                })}</span>
                <span>{newDescription}</span> */}
            {/* </div> */}
            
            {/* <span>Enter title</span>
            <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} type="text" />
            <span>Enter List</span>
            <input className='input' value={newDescription} onChange={(e) => setNewDescription(e.target.value)}  type="text" />
            <Button type="primary" onClick={onAdd}>Add</Button> */}

        </div>
    )
}

export default Details
