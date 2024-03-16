/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./*.html"],
    theme: {
        fontFamily: {
            custom1: ["Custom-1", "sans-serif"],
        },
        extend: {
            colors: {
                sky: "#F81894",
            },
            width: {
                cw: "576px",
            },
            height: {
                ch: "768px",
            },
        },
    },
    plugins: [],
};