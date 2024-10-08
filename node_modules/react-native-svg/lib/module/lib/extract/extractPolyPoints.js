export default function extractPolyPoints(points) {
  const polyPoints = Array.isArray(points) ? points.join(',') : points;
  return polyPoints.replace(/[^eE]-/, ' -').split(/(?:\s+|\s*,\s*)/g).join(' ');
}
//# sourceMappingURL=extractPolyPoints.js.map