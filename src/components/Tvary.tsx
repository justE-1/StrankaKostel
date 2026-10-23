/**
 * Jediny goticky lomeny oblouk na webu, definovany jednou.
 * clipPathUnits="objectBoundingBox" znamena, ze se tvar roztahne na velikost
 * prvku — na rozdil od clip-path: path(), ktery pracuje v absolutnich pixelech
 * a u sirokych bloku by zustal male kolecko v rohu.
 */
export default function Tvary() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute' }}>
      <defs>
        <clipPath id="oblouk" clipPathUnits="objectBoundingBox">
          <path d="M 0,1 L 0,0.96 Q 0.17,0.36 0.5,0 Q 0.83,0.36 1,0.96 L 1,1 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}
