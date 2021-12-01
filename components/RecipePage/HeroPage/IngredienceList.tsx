const IngredienceList = ({ ingredience }: any) => {
	return (
		<div>
			<h1>Ingredience</h1>
			{ingredience?.map((ingr: any, i: number) => (
				<ul key={i}>
					<h1>{ingr?.ingredienceTitle}</h1>
					{ingr.ingredienceItem.map((e: any, index: number) => (
						<li key={index}>
							<input
								type="checkbox"
								id={`${ingredience?.ingredienceTitle}${i}${index}`}
							/>
							<label htmlFor={`${ingredience?.ingredienceTitle}${i}${index}`}>
								{e}
							</label>
						</li>
					))}
				</ul>
			))}
		</div>
	);
};

export default IngredienceList;
