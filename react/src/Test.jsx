/* eslint-disable */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://rlatkdalb3-363666231.ap-northeast-2.elb.amazonaws.com/test')
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.error('에러임', err);
            });
        getUser();
    }, []);

    const getUser = () => {
        axios.get('http://rlatkdalb3-363666231.ap-northeast-2.elb.amazonaws.com/users')
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => {
                console.error('에러임', err);
            });
    };

    const createUser = () => {
        const user = { name: 'John Doe', email: 'john.doe@example.com' };
        axios.post('http://rlatkdalb3-363666231.ap-northeast-2.elb.amazonaws.com/users', user)
            .then(res => {
                console.log('[유저 생성]', res.data);
                getUser();
            })
            .catch(err => {
                console.error('에러임', err);
            });
    };

    return (
        <>
            <h1>API 체크 t5</h1>
            <button onClick={createUser}>테스트 유저 생성</button>
            <button onClick={getUser}>테스트 유저 조회</button>
            <h2>Users List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </>
    );
}

export default Test;
