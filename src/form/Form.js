import './Form.css';
import React, { useState } from "react";

export const Form = () => {

    const [formData, setFormData] = useState('');
    const [userList, setUserList] = useState([]);

    const handleInputChange = (e) => {
        setFormData(e.target.value);
    };
    // console.log(userList);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.trim() !== '') {
            setUserList([ ...userList, formData ]);
            setFormData('');
        }
    };

    const handleEditUser = () => {
        
        
    };

    const handleDeleteUser = (deleteUser) => {
        const updatedList = userList.filter((user) => user !== deleteUser);
        setUserList(updatedList);
    };

    return (
        <div className="formContainer"> 
            <form role="form" onSubmit={handleSubmit}>
                <label htmlFor="name">UserName</label>
                <input 
                    id="name" 
                    type="text" 
                    name='name'
                    value={formData} 
                    onChange={handleInputChange}
                    required 
                />
                <button type="submit">create</button>
            </form>
            <div className="userItemContainer">
                {userList.map((user, index) => (
                    <div className='userInf' key={index}>
                        <p>{user}</p>
                        <button onClick={() => handleEditUser(user)}>edit</button>
                        <button onClick={() => handleDeleteUser(user)}>delete</button>
                    </div>
                ))} 
            </div>
        </div>
    )
};