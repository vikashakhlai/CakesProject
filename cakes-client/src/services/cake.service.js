import { $axios } from '../api';

export const CAKES = '/cakes';

class CakeService {
	async getAll() {
		return $axios.get(CAKES).catch(err => {
			alert(err.message);
		});
	}

	async getById(id) {
		return $axios.get(`${CAKES}/${id}`).catch(err => {
			alert(err.message);
		});
	}
}

export default new CakeService();
