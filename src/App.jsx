import 'react-input-range/lib/css/index.css'

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage'
import HotelListPage from './pages/list/HotelListPage'

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/web/hotels" component={HotelListPage} />
    </Router>
  )
}
