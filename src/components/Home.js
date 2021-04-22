import React, { Component } from 'react';
import Productos from './Productos';

import Header from './Header';

class Home extends Component {

    render() {

        return (
            <div id="home">

            <Header />
                <div className="center">
                    <div id="content">
                        <Productos />
                    </div>

                </div>
            </div>
        )
    }
}

export default Home;