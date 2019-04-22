import axios from 'axios';

export function fetchData(){
	return function(dispatch){
		dispatch({type:'FETCH_DATA_START'})
		axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=72c35f5c5e844c889ab71bea7e2149ae')
		.then(results => {
			dispatch({type:'FETCH_DATA_SUCCESSFUL', payload: results.data.articles})
		})
		.catch(err => {
			dispatch({type:'FETCH_DATA_ERROR', payload: err})
		})
	}
}