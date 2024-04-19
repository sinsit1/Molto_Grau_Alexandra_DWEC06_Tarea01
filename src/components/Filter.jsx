
function Filter({ data, selectedFilter, onFilterSlides }) {
	const categories = [...new Set(data.map(el => el.categoria))];

	return <div className="btn-container">
		<button onClick={onFilterSlides} type="button" className={`filter-btn ${selectedFilter === 'todo' ? 'filter-btn-selected' : ''}`} data-id="todo">todas las categorias</button>
		{categories?.map(cat => <button onClick={onFilterSlides} key={cat} type="button" className={`filter-btn ${selectedFilter === cat ? 'filter-btn-selected' : ''}`} data-id={cat}>{cat}</button>)}
	</div>
}

export default Filter;

