import React from 'react';
import ActivitiesAdds from '../HomeAdds/ActivitiesAdds';

const Activities = props => {

    return (
        <div className="promo-container d-flex">
            <ActivitiesAdds
                title={"Arcade Games"}
                description={"Jump in and play classic games from the arcade era!"}
                image={"https://media0.giphy.com/media/1HUzRHih5D7Menu0T4/giphy.gif"}>
            </ActivitiesAdds>
            <ActivitiesAdds
                title={"Auction House"}
                description={"Looking to buy or sell? The Auction House is here for you! Register or Login to use."}
                image={"https://live.staticflickr.com/65535/50363677716_a608803a85_z.jpg"}
            >
            </ActivitiesAdds>
        </div>
    )
}
export default Activities;