/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			transitionProperty: {
				width: "width",
				height: "height",
			},
			width: (theme) => ({
				"screen/2": "50vw",
				"screen/3": "calc(100vw / 3)",
				"screen/4": "calc(100vw / 4)",
				"screen/5": "calc(100vw / 5)",
			}),
			height: (theme) => ({
				"screen/2": "50vh",
				"screen/3": "calc(100vh / 3)",
				"screen/4": "calc(100vh / 4)",
				"screen/5": "calc(100vh / 5)",
			}),
			screens: {
				500: "500px",
				550: "550px",
				800: "800px",
				900: "900px",
				1100: "1100px",
			},
			backgroundSize: {
				"size-200": "200% 200%",
				"size-100": "100% 100%",
			},
			backgroundPosition: {
				"pos-0": "0% 0%",
				"pos-100": "100% 100%",
			},
			backgroundImage: {
				arena: "url('/src/assets/images/arena.jpg')",
			},
			boxShadow: {
				inset: "5px 1000px 1px #fff inset",
			},
			fontFamily: {
				anonymousPro: ["Anonymous-Pro-Regular"],
				anonymousBold: ["Anonymous-Pro-Bold"],
				codeLight: ["Code-Light"],
				codeBold: ["Code-Bold"],
			},
			colors: {
				base: "#0d191c",
				secondary: "#51557E",
				primary: "#816797",
				highlight: "#ea558dff",
				textWhite: "#b6b6b6",
				textGreen: "#8eff1e",
				textPink: "#ff0883",
				textPurple: "#8e1eff",
				comment: "#cdab53",
			},
			animation: {
				none: "none",
				spin: "spin 1s linear infinite",
				ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
				pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				bounce: "bounce 1s infinite",
				float: "float 3s infinite",
				"float-y": "float-y 3s infinite",
				refloat: "refloat 3s infinite",
				"gradient-x": "gradient-x 7s ease infinite",
				glow: "glow 3s linear infinite",
			},
			keyframes: {
				spin: {
					to: { transform: "rotate(360deg)" },
				},
				ping: {
					"75%, 100%": { transform: "scale(2)", opacity: "0" },
				},
				pulse: {
					"50%": { opacity: ".5" },
				},
				bounce: {
					"0%, 100%": {
						transform: "translateY(-25%)",
						animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
					},
					"50%": {
						transform: "none",
						animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
					},
				},
				float: {
					"0%": {
						transform: "translateY(0px)",
						animationTimingFunction: "ease-in-out",
					},
					"50%": {
						transform: "translateY(-15px)",
						animationTimingFunction: "ease-in-out",
					},
					"100%": {
						transform: "translateY(0px)",
						animationTimingFunction: "ease-in-out",
					},
				},
				"float-y": {
					"0%": {
						transform: "translateX(0px)",
						animationTimingFunction: "ease-in-out",
					},
					"50%": {
						transform: "translateX(-5px)",
						animationTimingFunction: "ease-in-out",
					},
					"100%": {
						transform: "translateX(0px)",
						animationTimingFunction: "ease-in-out",
					},
				},
				refloat: {
					"0%": {
						transform: "translateY(-20px)",
						animationTimingFunction: "ease-in-out",
					},
					"50%": {
						transform: "translateY(0px)",
						animationTimingFunction: "ease-in-out",
					},
					"100%": {
						transform: "translateY(-20px)",
						animationTimingFunction: "ease-in-out",
					},
				},
				"gradient-x": {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
				glow: {
					"0%": {
						filter: "blur(30px)",
						"background-position": "0% 50%",
					},
					"50%": {
						filter: "blur(10px)",
						"background-position": "200% 50%",
					},
					"100%": {
						filter: "blur(30px)",
						"background-position": "200% 50%",
					},
				},
			},
		},
	},
	plugins: [],
};
