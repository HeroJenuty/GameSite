import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addGame} from '../redux/actions';

const AddGame = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [price, setPrice] = useState(0);

    const dispatchAddGame = () => {
        dispatch(addGame({
            name,
            description,
            imageURL,
            price
        }, '_id name description imageURL price'));
    }

    return <form>
        <div className="form-group">
            <label htmlFor="game-name">Title</label>
            <input type="text"
                className="form-control"
                onChange={e => setName(e.target.value)}
                id="game-name" 
                placeholder="Add game title"/>
        </div>
            <div className="form-group">
            <label htmlFor="description">Description</label>
            <input 
                type="text"
                onChange={e => setDescription(e.target.value)}
                className="form-control" 
                id="description" 
                placeholder="Enter game description"/>
        </div>
        <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input 
                type="text" 
                className="form-control" 
                onChange={e => setImageURL(e.target.value)}
                id="image"
                placeholder="Please add a Image URL"/>
            <img src={imageURL} className="d-block img-fluid" alt=""/>
        </div>
        <div className="form-group">
            <label htmlFor="price">Price</label>
            <input 
                type="text" 
                className="form-control" 
                onChange={e => setPrice(Number(e.target.value))}
                id="price" 
                placeholder="Add a price"/>
        </div>
        <button type="button" className="price-button" onClick={dispatchAddGame}>Save</button>
    </form>
}

export default AddGame;