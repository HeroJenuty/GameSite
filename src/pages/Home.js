import React from 'react';
import HomeC from '../HomeAdds/HomeC';
import Activities from '../HomeAdds/Activities';
import Featured from '../HomeAdds/Featured';


class Home extends React.Component {
    render() {
        return <>
                <div className="row">
                    <div className="col">
                        <HomeC/>
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col">
                        <Activities/>
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col">
                        <Featured/>
                    </div>
                </div>

          </>  
    }
}
export default Home;