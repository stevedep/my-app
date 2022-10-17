import React from "react";
import { render } from "react-dom";
import HomeApp from "./Home";
import AxisApp from "./Axis";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="blogs" element={<HomeApp />} />
                    <Route path="axis" element={<AxisApp />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const rootEl = document.getElementById("root");
render(<App />, rootEl);