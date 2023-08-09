import Footer from '../../layout/footer/Footer';
import Header from '../../layout/header/Header';
import Cake from '../cake/Cake';
import Content from '../content/Content';
import Form from '../form/Form';
import Gallery from '../gallery/Gallery';
import Hero from '../hero/Hero';
import Review from '../review/Review';

const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<Cake />
			<Review />
			<Content />
			<Gallery />
			<Form />
			<Footer />
		</>
	);
};

export default Home;
