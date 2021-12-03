//libraries
import styled from "styled-components";
import { useRouter } from "next/router";
import Div100vh from "react-div-100vh";
import Image from "next/image";

const TeleportBack = () => {
	const router = useRouter();
	return (
		<Div100vh style={{ position: "fixed" }}>
			<STeleportBack onClick={() => router.push("/")}>
				<Image src="/icons/circle-icon.svg" width={30} height={30} />
			</STeleportBack>
		</Div100vh>
	);
};

const STeleportBack = styled.div`
	position: fixed;
	top: 0rem;
	height: 100%;
	width: 100%;
	pointer-events: none;

	& > span {
		position: absolute !important;
		right: 1rem !important;
		bottom: 1rem !important;
		pointer-events: all;
		transform: rotate(90deg);
	}
`;

export default TeleportBack;
