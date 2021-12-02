import { Button, Input } from "@/styles/customComponents";
import styled from "styled-components";

const Form = () => {
	// 	var search = document.querySelector('#search');
	// var results = document.querySelector('#suggestions');
	// var templateContent = document.querySelector('#resultstemplate').content;
	// search.addEventListener('keyup', function handler(event) {
	//     while (results.children.length) results.removeChild(results.firstChild);
	//     var inputVal = new RegExp(search.value.trim(), 'i');
	//     var set = Array.prototype.reduce.call(templateContent.cloneNode(true).children, function searchFilter(frag, item, i) {
	//         if (inputVal.test(item.textContent) && frag.children.length < 6) frag.appendChild(item);
	//         return frag;
	//     }, document.createDocumentFragment());
	//     results.appendChild(set);
	// });
	return (
		<SForm>
			<Input
				type="search"
				list="suggestions"
				placeholder="najdi recept podle názvu"
				id="search"
				minLength={3}
			/>
			<datalist id="suggestions">
				<option>mercedes</option>
				<option>audi</option>
				<option>mazda1</option>
				<option>mazda2</option>
				<option>mazda3</option>
				<option>mazda4</option>
			</datalist>
			<Button>hledej</Button>
		</SForm>
	);
};

const SForm = styled.form`
	display: flex;
	width: 100%;
	gap: 0.6rem;
`;

export default Form;
