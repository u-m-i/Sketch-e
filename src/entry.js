const SCRIPT = "script";

// predefines paths
paths = [ "src/p5.min.js", "src/sketch.js"];

for(let i = 0; i < paths.length; ++i)
{
  // html element 
  let script = document.createElement(SCRIPT);

  script.src = paths[i];

  //apend it to load
  document.body.appendChild(script);
}
