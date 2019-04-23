import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Products from './pages/products/products';
import { Dashboard } from './pages/dashboard/dashboard';
import Cart from './pages/cart/cart';

export default props => (
    <HashRouter>
        <div>
            <Route path='/products' component={Products} />
            <Route path='/cart' component={Cart} />
            <Route path='/' exact component={Dashboard} />
            {/* <Route path='*' component={Products} /> */}
        </div>
    </HashRouter>
)