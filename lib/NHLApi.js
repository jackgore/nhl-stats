// @flow
import axios from 'axios';
import Constants from './Constants';

const {
  NHL_API_BASE_URL,
} = Constants;

// Functions for fetching data about individual teams.
const NHLApi = {
  async get<T>(endpoint: string): Promise<T> {
    const result = await axios.get(NHL_API_BASE_URL.concat(endpoint));
    return result.data;
  },
};

export default NHLApi;
