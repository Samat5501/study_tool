import React,  {useEffect, useState}  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Sign.css'
import { TextField } from '../../TextField';
import { Input, Space } from 'antd';
import { add_user } from '../../store/actions';
import validation from './Validation'
import routes from '../../routes';
import { Link, useHistory } from 'react-router-dom';

const In = () => {

    const history = useHistory()
  // state
  const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        inEmail: "",
  });
  //  errors message
  const [errors, setErrors] = useState({});
// onchange Input
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        }) 
  }

  const dispatch = useDispatch()
  const state = useSelector(state => state);
  const currentUser = useSelector(state => state.currentUser);

   useEffect(() => {
        localStorage.setItem('info', JSON.stringify(state));
    }, [state,currentUser])

  useEffect(() => {
        if (values.email.trim() && values.name.trim() && values.password.trim()) {
            localStorage.setItem('info', JSON.stringify(state))
            // history.push(routes.user_profile);
        }
    }, [state, values.email, values.name, values.password,history]);
  
  const onAdd = () => {
        let checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (values.name !== "" && checkEmail.test(values.email) && values.password.length > 7) {
            dispatch(add_user({
                firstName: values.name.split(' ')[0],
                lastName: values.name.split(' ')[1],
                userEmail: values.email,
                userPassword: values.password,
                id: Date.now().toString(),
                success: true,
            })    
          )
           if (values.email.trim() && values.name.trim() && values.password.trim()) {
            localStorage.setItem('info', JSON.stringify(state))
            history.push(routes.user_profile);
        }
history.push(routes.user_profile)
        }
        else {
            setErrors(validation(values))
      }
      
    }


  return (
      <div className="container bg-bl">
      <div className="sign">
        <div className="empty_sign-page">
         <div className="img_title">One of us?</div> 
         <p className="img_text">If you already has an account, just sign in. We've missed you!</p>
        <span className='sign_link'><Link to={routes.login}>Sign in </Link></span>
        </div>
        <div className='sign_user'>
        <div className='sign_up-h1'>Sign Up</div>
        <div className='first__input'>
          <div>
          <TextField
             placeholder="Your Name"
             name="name" type="text"
             value={values.name}
             onChange={handleChange}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
           
          </div>
        </div>
        <div className="second__input"> 
        <TextField
            value={values.email}
            onChange={handleChange}
            placeholder="Enter the Email"
            name="email" type="email"
          />
           {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
        <Space direction="vertical">
            <Input.Password
            className="password-inp"
            value={values.password}
            onChange={handleChange}
            placeholder="At least 8 characters long"
            name="password"
            type="password" />
          </Space>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <span onClick={()=> onAdd()} className='sign_link_2'>Sign Up</span>
        </div>
      </div>
    </div>
    )
}

export default In
