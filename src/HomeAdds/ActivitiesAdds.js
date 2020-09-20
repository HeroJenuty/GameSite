import React from 'react';

const ActivitiesAdds = props => {

    return (
        <div className="activity-banner">
            <div className="banner-info d-flex flex-column justify-content-between">
                <div className="activity-title">{props.title}</div>
                <div className="activity-description">{props.description}</div>
                {props.children}
            </div>
            <img className="img-fluid" src={props.image}/>
        </div>
    )
}
export default ActivitiesAdds;