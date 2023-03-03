/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "576px",
			md: "960px",
			lg: "1440px",
		},
		colors: {
			white: "#ffffff",
			purple: "#3f3cbb",
			midnight: "#121063",
			metal: "#565584",
			tahiti: "#3ab7bf",
			silver: "#ecebff",
			"bubble-gum": "#ff77e9",
			bermuda: "#78dcca",
			dullBlack: "#737373",
			gold: "#f4bd03",
		},
		textFillColor: (theme) => theme("borderColor"),
		textStrokeColor: (theme) => theme("borderColor"),
		textStrokeWidth: (theme) => theme("borderWidth"),
		paintOrder: {
			fsm: { paintOrder: "fill stroke markers" },
			fms: { paintOrder: "fill markers stroke" },
			sfm: { paintOrder: "stroke fill markers" },
			smf: { paintOrder: "stroke markers fill" },
			mfs: { paintOrder: "markers fill stroke" },
			msf: { paintOrder: "markers stroke fill" },
		},
		extend: {},
	},

	variants: {
		// all the following default to ['responsive']
		textFillColor: ["responsive"],
		textStrokeColor: ["responsive"],
		textStrokeWidth: ["responsive"],
		paintOrder: ["responsive"],
	},

	plugins: [require("tailwindcss-text-fill-stroke")()],
};
