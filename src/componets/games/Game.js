import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteGame } from '../../redux/actions';
import { addGameToUser } from '../../redux/actions';

const Game = props => {

    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.currentUser);

    const dispatchDeleteGame = () => {
        dispatch(deleteGame({
            _id: props.game._id
        }, '_id name description imageURL price'));
    }

    const dispatchAddGameToUser = () => {
        const gameToAdd = Object.assign({}, props.game);
        delete gameToAdd.__typename;

        dispatch(addGameToUser({
            _id: currentUser._id,
            games: [gameToAdd],
        }));
    }

    return <div className="col-md-4 mb-3">
        <div className="card">
            <img src={props.game.imageUrl} className="card-img-top" alt={props.game.name} />
            <div className="card-body">
                <button type="button" className="btn btn-danger mb-1" onClick={dispatchDeleteGame}>Delete</button>
                <h5 className="card-title">{props.game.name}</h5>
                <p className="card-text">{props.game.description}</p>
                <button type="button" className="price-button" onClick={dispatchAddGameToUser}>Add game to user</button>
            </div>
        </div>
    </div>
}

export default Game;