function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { DiagonalDirections, Directions } from '../../Directions';
import { MINIMAL_FLING_VELOCITY } from '../constants';
export default class Vector {
  constructor(x, y) {
    _defineProperty(this, "x", void 0);

    _defineProperty(this, "y", void 0);

    _defineProperty(this, "unitX", void 0);

    _defineProperty(this, "unitY", void 0);

    _defineProperty(this, "_magnitude", void 0);

    this.x = x;
    this.y = y;
    this._magnitude = Math.hypot(this.x, this.y);
    const isMagnitudeSufficient = this._magnitude > MINIMAL_FLING_VELOCITY;
    this.unitX = isMagnitudeSufficient ? this.x / this._magnitude : 0;
    this.unitY = isMagnitudeSufficient ? this.y / this._magnitude : 0;
  }

  static fromDirection(direction) {
    return DirectionToVectorMappings.get(direction);
  }

  static fromVelocity(tracker, pointerId) {
    return new Vector(tracker.getVelocityX(pointerId), tracker.getVelocityY(pointerId));
  }

  get magnitude() {
    return this._magnitude;
  }

  computeSimilarity(vector) {
    return this.unitX * vector.unitX + this.unitY * vector.unitY;
  }

  isSimilar(vector, threshold) {
    return this.computeSimilarity(vector) > threshold;
  }

}
const DirectionToVectorMappings = new Map([[Directions.LEFT, new Vector(-1, 0)], [Directions.RIGHT, new Vector(1, 0)], [Directions.UP, new Vector(0, -1)], [Directions.DOWN, new Vector(0, 1)], [DiagonalDirections.UP_RIGHT, new Vector(1, -1)], [DiagonalDirections.DOWN_RIGHT, new Vector(1, 1)], [DiagonalDirections.UP_LEFT, new Vector(-1, -1)], [DiagonalDirections.DOWN_LEFT, new Vector(-1, 1)]]);
//# sourceMappingURL=Vector.js.map