import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_info } from '../../store/actions'
import './List.css'
import { useHistory } from 'react-router-dom';
import { MdCancel} from 'react-icons/md'
import { AiOutlineFileAdd} from 'react-icons/ai'

var uniqid = require('uniqid');
const List = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [code, setCode] = useState('');
    const [linkTitle, setLinkTitle] = useState('');
    const [link, setLink] = useState('');
    const history = useHistory();

    const onAdd = (e) => {
        if(title !== "" && description!== "" || code !== "" || linkTitle!=="" || link !==""){
        dispatch(add_info({
            title,
            description,
            code,
            linkTitle,
            link,
            id: uniqid(),
        }))
        setTitle('');
        setDescription('')
        setCode('')
        setLinkTitle('')
        setLink('')
        }
        else {
            alert('please fill the field')
        }
}
    const onCancel = () =>{
        history.push('/content')
    }
    return (
        <div className="list">
           <span className='list__title'>title</span> 
            <input
                className='input'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                type="text" />
            <span className='list__title'>Description</span> 
            <textarea
                className="input"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="des" cols="20" rows="25"/>
            <span className='list__title'>code </span> 
            <textarea className="input" value={code} onChange={(e) => setCode(e.target.value)} placeholder='Write code' type='code' name="code" id="code" cols="15" rows="20"></textarea>
             <span className='list__title'>link title</span>
            <input className='input' placeholder="Link Name" value={linkTitle} onChange={(e) => setLinkTitle(e.target.value)} type="text" />
             <span className='list__title'>link</span> 
            <input className="input input_link" style={{height: 40}} value={link} onChange={(e) => setLink(e.target.value)} placeholder='write link'/>
            <div className='list__btn'>
            <div className='btn-list_1' onClick={onAdd}><AiOutlineFileAdd/> Add</div>
                <div className='btn-list_3' danger onClick={onCancel}><MdCancel />Cancel</div>
                {/* <button><div style={{color: 'red', fontSize: 20, marginTop: 5}}></div> Logout</button> */}
            </div>
        </div>
    )
}

export default List
