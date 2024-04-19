import { useEffect, useState } from "react";
// importo los datos
import data from "./data"
import Filter from "./Filter";
import Slide from "./Slide";
const SLIDE_TIME = 2000;


function Home() {
	const [slides, setSlides] = useState(data);
	const [index, setIndex] = useState(0);
	const [selectedFilter, setSelectedFilter] = useState('todo');


	useEffect(() => {
		const lastIndex = slides.length - 1
		if (index < 0) {
			setIndex(lastIndex)
		}
		if (index > lastIndex) {
			setIndex(0)
		}
	}, [index, slides])

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1)
		}, SLIDE_TIME);
		return () => clearInterval(slider)
	}, [index])

	const onFilterSlides = (e) => {
		const cat = e.target.dataset.id;
		setSelectedFilter(cat)
		if (cat === 'todo') {
			setSlides(data);
		} else {
			const filteredSlides = data.filter(d => d.categoria === cat)
			setSlides(filteredSlides);
		}
	}

	return (
		<section className="section">
			<div className="title">
				<h2>slider DWEC</h2>
				<div className="underline"></div>
			</div>
			<Filter data={data} selectedFilter={selectedFilter} onFilterSlides={onFilterSlides} />
			<div className="section-center">
				{slides.map((slide, slideIndex) => {
					return <Slide key={slide.id} slideData={slide} slideIndex={slideIndex} index={index} />
				})}

			</div>
		</section>
	)
}

export default Home;

