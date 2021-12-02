//libraries
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

const TeleportBack = () => {
	const router = useRouter();
	return (
		<STeleportBack onClick={() => router.push("/")}>
			<Image src="/icons/circle-icon.svg" width={30} height={30} />
		</STeleportBack>
	);
};

const STeleportBack = styled.div`
	position: fixed;
	top: 0rem;
	width: 100%;
	height: 100vh;
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
