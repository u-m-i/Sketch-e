// Adds all the dependencies the final

const SCRIPT = "script";

paths = [ "src/p5.min.js", "src/sketch.js"];

for(let i = 0; i < paths.length; ++i)
{
		let script = document.createElement(SCRIPT);

		script.src = paths[i];

		document.body.appendChild(script);
}
