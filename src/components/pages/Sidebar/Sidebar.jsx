import React from 'react'
import './sidebar.css'
import { Link, useHistory } from 'react-router-dom'
import  routes  from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { remove_info } from '../../store/actions';
import TagList from './TagList';
import { AiFillFolderAdd } from 'react-icons/ai'

function Sidebar() {
    const dispatch = useDispatch()
    const info = useSelector(state => state.info)
    const success = useSelector(state => state.success)
    const history = useHistory()
    console.log(info);
    
    const check = () => {
        if (success) {
            history.push(routes.list)
        } else {
            history.push(routes.sign_up)
            alert('Please, Sign Up')
        }
    }

    return (
        <div className='sidebar side__bar-left'>
            <ul>
                {/* <li className="navbar__link htcss">
                    <Link className="navbar__link htcss"  to='/html'><>HTML</></Link>
                </li>
                <li className="navbar__link htcss">
                    <Link className="navbar__link htcss ltsp" to='/css'>css</Link>
                </li> */}
                {success ? (<>
                    <div>{info.map((tag, idx) => {
                        return <div key={idx} className='sidebar__tag'>
                            
                     <Link className='button-detail' to={`/details/${tag.id}`} key={idx}>
                    <div  key={idx}>
                        <TagList tag={tag} idx={idx} key={idx}/>
                    </div>
                   
                    </Link>
                            <div className='remove__btn' onClick={() => {
                                dispatch(remove_info(idx))
                                history.push('/content')
                            }}>x</div>
                   </div> 
            })} </div>
                </>) : ("")}
                    
            </ul>
            <div className='tag__btn' onClick={() => check()}><AiFillFolderAdd/> </div>
        </div>
    )
}

export default Sidebar
