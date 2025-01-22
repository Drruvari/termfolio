/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
  "include": ["src/**/*", "src/types/*"],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
				wiggleMore: {
					"0%, 100%": { transform: "rotate(-5deg)" },
					"50%": { transform: "rotate(5deg)" },
				},
				rotateY: {
					"0%": { transform: "rotateY(0deg)" },
					"100%": { transform: "rotateY(360deg)" },
				},
				rotateX: {
					"0%": { transform: "rotateX(0deg)" },
					"100%": { transform: "rotateX(360deg)" },
				},
				jump: {
					"0%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-10px)" },
					"100%": { transform: "translateY(0px)" },
				},
				jumpIn: {
					"0%": { transform: "translateY(-10px)" },
					"100%": { transform: "translateY(0px)" },
				},
				jumoOut: {
					"0%": { transform: "translateY(0px)" },
					"100%": { transform: "translateY(-10px)" },
				},
				spin: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				ping: {
					"0%": { transform: "scale(1)", opacity: 1 },
					"100%": { transform: "scale(2)", opacity: 0 },
				},
				pulse: {
					"0%, 100%": { opacity: 1 },
					"50%": { opacity: 0.5 },
				},
				bounce: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				shake: {
					"0%, 100%": { transform: "translateX(0)" },
					"10%, 30%, 50%, 70%, 90%": { transform: "translateX(-10px)" },
					"20%, 40%, 60%, 80%": { transform: "translateX(10px)" },
				},
				fade: {
					"0%, 100%": { opacity: 1 },
					"50%": { opacity: 0.5 },
				},
				fadeDown: {
					"0%, 100%": { opacity: 1, transform: "translateY(0)" },
					"50%": { opacity: 0.5, transform: "translateY(-10px)" },
				},
				fadeUp: {
					"0%, 100%": { opacity: 1, transform: "translateY(0)" },
					"50%": { opacity: 0.5, transform: "translateY(10px)" },
				},
				fadeLeft: {
					"0%, 100%": { opacity: 1, transform: "translateX(0)" },
					"50%": { opacity: 0.5, transform: "translateX(-10px)" },
				},
				fadeRight: {
					"0%, 100%": { opacity: 1, transform: "translateX(0)" },
					"50%": { opacity: 0.5, transform: "translateX(10px)" },
				},
				flipUp: {
					"0%": { transform: "rotateX(0deg)" },
					"100%": { transform: "rotateX(-180deg)" },
				},
				flipDown: {
					"0%": { transform: "rotateX(0deg)" },
					"100%": { transform: "rotateX(180deg)" },
				},
			},
			animation: {
				wiggle: "wiggle 1s ease-in-out infinite",
				wiggleMore: "wiggleMore 1s ease-in-out infinite",
				rotate: "rotate 1s ease-in-out infinite",
				rotateY: "rotateY 1s ease-in-out infinite",
				rotateX: "rotateX 1s ease-in-out infinite",
				jump: "jump 1s ease-in-out infinite",
				jumpIn: "jumpIn 1s ease-in-out infinite",
				jumoOut: "jumoOut 1s ease-in-out infinite",
				spin: "spin 1s linear infinite",
				ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
				bounce: "bounce 1s ease-in-out infinite",
				shake: "shake 1s ease-in-out infinite",
				fade: "fade 1s ease-in-out infinite",
				fadeDown: "fadeDown 1s ease-in-out infinite",
				fadeUp: "fadeUp 1s ease-in-out infinite",
				fadeLeft: "fadeLeft 1s ease-in-out infinite",
				fadeRight: "fadeRight 1s ease-in-out infinite",
				flipUp: "flipUp 1s ease-in-out infinite",
				flipDown: "flipDown 1s ease-in-out infinite",
			},
			dropShadow: {
				glow: "0 0 10px 10px #f7df1e",
			},
		},
		fontFamily: {
			mono: ["Fira Code", "monospace"],
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
