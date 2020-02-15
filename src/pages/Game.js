import React from 'react';
import Iframe from 'react-iframe'
import Isotope from 'isotope-layout';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.isoRef = React.createRef();
        this.state = { 
            isotope: null
         }
    }
    componentDidMount = () => {
        if (!this.state.isotope) {
            this.setState({
                isotope: new Isotope( this.isoRef.current, {
                    masonry: {columnWidth: '.game-grid-sizer'},
                    itemSelector: '.game-grid-item',
                    percentPosition: true
                })
            })
        } else if (this.state.isotope) {
            this.state.isotope.reloadItems()
        } 

    }
    render() {
        return <div >
            <div ref={this.isoRef} className="games-grid">
                <div className="game-grid-sizer"></div>

                <div className="game-grid-item">
                    <div className="game-item">
                        {/* <h1>Cyberbots</h1> */}
                        <Iframe src="https://www.retrogames.cc/embed/8189-cyberbots-fullmetal-madness-950424-euro.html"
                            width="100%"
                            height="600px"
                            frameborder="no" allowfullscreen="true"
                            webkitallowfullscreen="true" mozallowfullscreen="true"
                            scrolling="no" />
                    </div>
                </div>
                <div className="game-grid-item game-grid-featured">
                    <div className="game-item">
                        {/* <h1>Super Mario World</h1> */}
                        <Iframe src="https://www.retrogames.cc/embed/16847-super-mario-world-usa.html"
                            width="100%" height="600" frameborder="no" allowfullscreen="true"
                            webkitallowfullscreen="true" mozallowfullscreen="true"
                            scrolling="no" />
                    </div>
                </div>
                <div className="game-grid-item">
                    <div className="game-item">
                        {/* <h1>Super Mario World</h1> */}
                        <Iframe src="https://www.retrogames.cc/embed/16847-super-mario-world-usa.html"
                            width="100%" height="600" frameborder="no" allowfullscreen="true"
                            webkitallowfullscreen="true" mozallowfullscreen="true"
                            scrolling="no" />
                    </div>
                </div>
                <div className="game-grid-item game-grid-featured">
                    <div className="game-item">
                        {/* <h1>Super Mario World</h1> */}
                        <Iframe src="https://www.retrogames.cc/embed/16847-super-mario-world-usa.html"
                            width="100%" height="600" frameborder="no" allowfullscreen="true"
                            webkitallowfullscreen="true" mozallowfullscreen="true"
                            scrolling="no" />
                    </div>
                </div>
                <div className="game-grid-item">
                    <div className="game-item">
                        {/* <h1>Super Mario World</h1> */}
                        <Iframe src="https://www.retrogames.cc/embed/16847-super-mario-world-usa.html"
                            width="100%" height="600" frameborder="no" allowfullscreen="true"
                            webkitallowfullscreen="true" mozallowfullscreen="true"
                            scrolling="no" />
                    </div>
                </div>
            </div>
           
        </div>
    }
}


export default Game;

//Isotop and masonry grid. https://www.10bet.com/games/ !!!

