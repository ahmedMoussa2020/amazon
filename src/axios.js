import axios from 'axios';

const instance = axios.create({
  baseURL: 'https:us-central1-challenge-d6e62.cloudfunctions.net/api'
});

export default instance;

// http://localhost:5001/challenge-d6e62/us-central1/api
// https:us-central1-challenge-d6e62.cloudfunctions.net/api
