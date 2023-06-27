export function createSVG(width, height, pathParam) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  svg.setAttribute("width", `${width}`)
  svg.setAttribute("height", `${height}`)

  let path = document.createElementNS("http://www.w3.org/2000/svg", "path")
  path.setAttribute("d", `${pathParam}`)
  // path.setAttribute("fill", `${color}`)

  svg.appendChild(path)

  return svg;
}

