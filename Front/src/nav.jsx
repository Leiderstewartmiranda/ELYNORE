import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './proyec.css'
import { CardList } from './datos';
import { CardListM } from './datosF';
import { CardListH } from './datosH';
import { CardListU } from './datosU';

export function Nav() {
    return (
        <Router>
          <nav>
            <img src="/public/logoPerfumes.jpg" alt="Logo" />
            <ul> <Link to="/">INICIO</Link></ul>
            <ul> <Link to="/Mujeres">MUJERES</Link></ul>
            <ul> <Link to="/Hombres">HOMBRES</Link></ul>
            <ul> <Link to="/Unisex">UNISEX</Link></ul>
          </nav>
          <Routes>
            <Route path="/"element={<CardList />} />
            <Route path="/Mujeres"element={<CardListM />} />
            <Route path="/Hombres"element={<CardListH />} />
            <Route path="/Unisex"element={<CardListU />} />
            
          </Routes>
        
        </Router>
      )
};
