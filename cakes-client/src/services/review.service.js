import { $axios } from '../api';

export const REVIEWS = '/reviews';

class ReviewService {
	async getAll() {
		return $axios.get(REVIEWS).catch(err => {
			alert(err.message);
		});
	}

	async getById(id) {
		return $axios.get(`${REVIEWS}/${id}`).catch(err => {
			alert(err.message);
		});
	}
}

export default new ReviewService();
