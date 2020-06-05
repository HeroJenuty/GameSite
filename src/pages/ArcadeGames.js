import React from 'react';
import Isotope from 'isotope-layout';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class ArcadeGames extends React.Component {
    constructor(props) {
        super(props);
        this.isoRef = React.createRef();
        this.state = {
            isotope: null,
            modal: false,
            activeGameUrl: '',
            games: [
                {
                    gameUrl: "https://www.retrogames.cc/embed/8189-cyberbots-fullmetal-madness-950424-euro.html",
                    gameName: "Cyberbots",
                    gameImage: "cyberbots.jpg",
                },
                {
                    gameUrl: "https://www.retrogames.cc/embed/16847-super-mario-world-usa.html",
                    gameName: "Super Mario World",
                    gameImage: "mario_world.jpg",
                },
                {
                    gameUrl: "https://www.retrogames.cc/embed/9759-saturday-night-slam-masters-slam-masters-930713-etc.html",
                    gameName: "Saturday Night Slam Masters",
                    gameImage: "Slam.jpg",
                },
                {
                    gameUrl: "https://www.retrogames.cc/embed/8912-knights-of-the-round-911127-etc.html",
                    gameName: "Knights of the Round",
                    gameImage: "Knights.jpg",
                },
                {
                    gameUrl: "https://www.retrogames.cc/embed/28249-sonic-the-hedgehog-usa-europe-hack-by-lost-v1-0-sonic-jam-s-easy-mode.html",
                    gameName: "Sonic the Hedgehog",
                    gameImage: "Sonic.jpg",
                },
                {
                    gameUrl: "https://www.retrogames.cc/embed/10727-x-men-2-players-ver-eaa.html",
                    gameName: "Marvel vs Capcom",
                    gameImage: "xmen.jpg",
                },
                {
                    gameUrl: "https://www.retrogames.cc/embed/10042-street-fighter-ii-champion-edition-yyc-bootleg-set-2-920313-etc-bootleg.html",
                    gameName: "Street Fighter II",
                    gameImage: "SF2.jpg",
                },
                {
                    gameUrl: "https://www.retrogames.cc/embed/9123-marvel-vs-capcom-clash-of-super-heroes-980123-usa.html",
                    gameName: "Marvel vs Capcom",
                    gameImage: "MvC.jpg",
                },
                {
                    gameUrl: "https://www.retrogames.cc/embed/9800-sengoku-3-sengoku-densho-2001.html",
                    gameName: "Sengoku 3",
                    gameImage: "sengoku_3.jpg",
                },
                {
                    gameUrl: "https://www.retrogames.cc/embed/8070-captain-commando-bootleg-set-2-with-ym2151-%2B-2xmsm5205-911014-other-country-bootleg.html",
                    gameName: "Captain Commando",
                    gameImage: "capt_comando.jpg",
                },
                {
                    gameUrl: "https://www.retrogames.cc/embed/7752-alien-vs-predator-940520-usa.html",
                    gameName: "Alien vs Predator",
                    gameImage: "AvP.jpg",
                },
                {
                    gameUrl: "https://www.retrogames.cc/embed/34551-the-king-of-fighters-98-the-slugfest-king-of-figh.html",
                    gameName: "King of Fighters 98",
                    gameImage: "kof98.jpg",
                },
                {
                    gameUrl: "https://www.retrogames.cc/embed/7829-armored-warriors-941024-usa.html",
                    gameName: "Armored warriors",
                    gameImage: "AW.jpg",
                },
                {
                    gameUrl: "https://www.retrogames.cc/embed/9739-sangokushi-ii-921005-asia.html",
                    gameName: "Sangokushi II",
                    gameImage: "Sangokushi.jpg",
                },
                {
                    gameUrl: "https://www.retrogames.cc/embed/9735-samurai-shodown-v-samurai-spirits-zero-ngm-2700.html",
                    gameName: "Samurai Shodown V",
                    gameImage: "SSV.png",
                },
                {
                    gameUrl: "https://www.retrogames.cc/embed/8378-dungeons-dragons-shadow-over-mystara-960209-usa.html",
                    gameName: "Dungeons & Dragons",
                    gameImage: "D&D.jpg",
                },
                {
                    gameUrl: "https://www.retrogames.cc/embed/29921-mortal-kombat-ii-world-hack-by-smoke-v0-70-mortal-kombat-ii-unlimited.html",
                    gameName: "Mortal Kombat II",
                    gameImage: "MK2.jpg",
                },
                // {
                //     gameUrl: "https://www.retrogames.cc/embed/8189-cyberbots-fullmetal-madness-950424-euro.html",
                //     gameName: "Cyberbots",
                //     gameImage: "cyberbots.jpg",
                // },
                // {
                //     gameUrl: "https://www.retrogames.cc/embed/8189-cyberbots-fullmetal-madness-950424-euro.html",
                //     gameName: "Cyberbots",
                //     gameImage: "cyberbots.jpg",
                // },
                // {
                //     gameUrl: "https://www.retrogames.cc/embed/8189-cyberbots-fullmetal-madness-950424-euro.html",
                //     gameName: "Cyberbots",
                //     gameImage: "cyberbots.jpg",
                // },
                // {
                //     gameUrl: "https://www.retrogames.cc/embed/8189-cyberbots-fullmetal-madness-950424-euro.html",
                //     gameName: "Cyberbots",
                //     gameImage: "cyberbots.jpg",
                // },

            ]
        }
    }
    componentDidMount = () => {
        if (!this.state.isotope) {
            setTimeout(() => {
                this.setState({
                    isotope: new Isotope(this.isoRef.current, {
                        masonry: { columnWidth: '.game-grid-sizer' },
                        itemSelector: '.game-grid-item',
                        percentPosition: true
                    })
                })
            });
        } else if (this.state.isotope) {
            this.state.isotope.reloadItems()
        }
    }

    getGameItems = () => {
        const gameItems = this.state.games.map((game, index) => {
            return <div className={"game-grid-item " + (index % 7 === 0 ? 'game-grid-featured' : '')} onClick={() => this.handleGameUrl(game.gameUrl)}
                key={index}>
                <div className="game-item">
                    <div className="image-container">
                        <img className="img-fluid" src={require(`../images/${game.gameImage}`)} />
                    </div>
                </div>
            </div>
        })
        return gameItems
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    handleGameUrl = activeGameUrl => {
        this.setState({
            modal: true,
            activeGameUrl
        })
    }
    render() {
        return <div >
            <div ref={this.isoRef} className="games-grid">
                <div className="game-grid-sizer"></div>
                {this.getGameItems()}
            </div>
            <Modal
                size="lg"
                backdrop={'static'}
                isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>Good luck and have fun!</ModalHeader>
                <ModalBody>
                    <div className="embed-responsive embed-responsive-4by3">
                        <iframe src={this.state.activeGameUrl}></iframe>
                    </div>
                </ModalBody>
                <ModalFooter>
                    Press the "esc" button to close!
                </ModalFooter>
            </Modal>
        </div>
    }
}


export default ArcadeGames;