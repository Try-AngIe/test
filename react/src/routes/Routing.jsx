/* eslint-disable */

import { Route, Routes } from "react-router-dom"
import Test from "../Test";


const Routing = () => {

    return (
        <Routes>
            <Route path="/" element={<Test/>} />
        </Routes>
    )

}

export default Routing;