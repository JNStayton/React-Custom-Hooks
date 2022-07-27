import { useState } from 'react';
import uuid from 'uuid';
import axios from 'axios';

const useFlip = (initialValue = true) => {
	//flips a card
	const [ isFlipped, setIsFlipped ] = useState(initialValue);
	const flipCard = () => {
		setIsFlipped((isFlipped) => !isFlipped);
	};
	return [ isFlipped, flipCard ];
};

const useAxios = (url) => {
	const [ data, setData ] = useState([]);
	const addData = async (endpoint = '') => {
		console.log(url);
		const response = await axios.get(`${url}${endpoint}`);
		setData((data) => [ ...data, { ...response.data, id: uuid() } ]);
	};
	return [ data, addData ];
};

export { useFlip, useAxios };
