import axios from 'axios';
import { SearchResults } from '../types/npm';


export class NpmRegistry {

  async search(query: string): Promise<SearchResults> {
    const response = await axios.get(`https://registry.npmjs.com/-/v1/search?text=${query}`);
    return response.data as SearchResults;
  }

}
