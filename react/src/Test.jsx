/* eslint-disable */

import React, { useEffect } from 'react';
import axios from 'axios';

const Test = () => {

    useEffect(() => {
        axios.get('http://rlatkdalbtest1-1182715068.ap-northeast-2.elb.amazonaws.com/test')
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
