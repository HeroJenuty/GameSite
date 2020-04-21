import React from 'react';
import Cain from '../images/Cain.png';
import Entrance1 from '../images/Entrance1.png';
import Entrance2 from '../images/Entrance2.png';


class Home extends React.Component {
    render() {
        return <div>
            <div className="row justify-content-center">
                <div className="col-xs-6 mt-3 mt-md-5">
                    <img src={Cain} alt=""></img>
                </div>
                <div className="col-9 mt-3 mt-md-5 bg-dark text-center d-flex align-items-center text-light">
                    <h3> Well hello there my friend and welcome! Come, sit by the couch grab a snack and a drink adn game on.
                        Challenge your friend to a duel of might or perhaps brave through
                        on a adventure together? There is a game everyone here so come now
                        stay a while and play a game in The Arcade Tavern!</h3>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-6 mt-3 mt-md-5 bg-dark text-center d-flex align-items-center text-light">
                    <h3>
                        It's pretty simple ladies and gents! All you have to do is go to the Games page pick a game and have a grand ol time!
                    </h3>
                </div>
                <div className="col-xs-6 mt-3 mt-md-5">
                    <img src={Entrance2} alt=""></img>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xs-6 mt-3 mt-md-5">
                    <img src={Entrance1} alt=""></img>
                </div>
                <div className="col-6 mt-3 mt-md-5 bg-dark text-center d-flex align-items-center text-light">
                    <h3>There is a good variety of genres to pick: 1v1, goold old
                        beat em up, classic adventure oh and so much more!
                    </h3>
                </div>
            </div>
        </div>
    }
}
export default Home;