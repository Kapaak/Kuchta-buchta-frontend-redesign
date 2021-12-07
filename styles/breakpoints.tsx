const convertToEm = (number: number) => {
	return number / 16;
};

const devices = {
	tablet: convertToEm(768),
	tabletX: convertToEm(860),
	desktop: convertToEm(1024),
	desktopX: convertToEm(1360),
};

const breakpoints = {
	tablet: `(min-width:${devices.tablet}em)`,
	tabletX: `(min-width:${devices.tabletX}em)`,
	desktop: `(min-width:${devices.desktop}em)`,
	desktopX: `(min-width:${devices.desktopX}em)`,
};

export default breakpoints;
