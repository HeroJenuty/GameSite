import React from 'react';
import HomeC from '../HomeAdds/HomeC';
import Activities from '../HomeAdds/Activities';
import Featured from '../HomeAdds/Featured';


class Home extends React.Component {
    render() {
        return <>
            <div className="row">
                <div className="col">
                    <HomeC />
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col">
                <img src="https://fontmeme.com/permalink/201008/240b50a12eb7c662c178326e6716e7a6.png" className="check-out mb-3" alt="ultimate-beastmaster-font" border="0"></img>
                    <Activities />
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col">
                <img src="https://fontmeme.com/permalink/201008/98748fbcf7da9d9968cfb935675c469f.png" className="featured-videos mb-3" alt="ultimate-beastmaster-font" border="0"></img>
                    <Featured />
                </div>
            </div>

        </>
    }
}
export default Home;