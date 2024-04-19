import React from 'react';
import data from './data';

const Slide = ({ slideData, slideIndex, index }) => {

	let position = "nextSlide";
	if (slideIndex === index) {
		position = 'activeSlide'
	}
	if (slideIndex === index - 1 || (index === 0 && slideIndex === data.length - 1)) {
		position = 'lastSlide'
	}

	return (
		<article className={position} key={slideData.id}>
			<img src={slideData.src}
				alt={slideData.img} className="person-img" />
			<h4>{slideData.img}</h4>
			<p className="title">{slideData.title}</p>
		</article>
	)
}

export default Slide;