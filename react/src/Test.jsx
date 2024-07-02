/* eslint-disable */

import React, { useEffect } from 'react';
import axios from 'axios';

const Test = () => {

    useEffect(() => {
        axios.get('http://localhost:8080/test')
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.error('에러임', err);
            });
    }, []);

    return (
        <>
            <h1>api 체크</h1>
        </>
    );
}

export default Test;
