
// el slidde recibe, toda la info del slide, el indice que ocupa ese slide, y el indice seleccionado,
// en base a eso este componente calcula que clase tiene que llevar cada elemento.
function Slide({ slide, index, selectedIndex }) {

	function calculateClassName(index, selectedIndex) {
		// si el indice del elemento en el array es el seleccionado, le pongo clase activeClass,
		// si no cumple esta primera ternaria, comprueba si el indice del elemento es igual al seleccionado - 1, para saber si es la diapositiva anterior, si es asi le pongo la clase lastSlide ( esto hace que la diapositiva vaya hacia la izquierda)
		// y finalmente, si no es la diapositiva seleccionada, ni la anterior, le añado clase nextSlide, que es la que tienen todas las diapositivas que están por venir.
		return (index === selectedIndex
			? 'activeSlide'
			: (index === selectedIndex - 1
				? 'lastSlide'
				: 'nextSlide'
			)
		)
	};

	return (
		<article className={calculateClassName(index, selectedIndex)}>
			<img src={slide.src}
				alt="yosemite" className="person-img" />
			<h4>{slide.img}</h4>
			<p className="title">{slide.category}</p>
		</article>
	)
};

export default Slide;

