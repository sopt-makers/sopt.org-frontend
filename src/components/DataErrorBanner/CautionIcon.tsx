interface CautionIconProps {
  width: number;
  height: number;
}

export default function CautionIcon({ width, height }: CautionIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon_caution">
        <path
          id="Polygon 4"
          d="M20.3895 2.96774C22.6609 -0.989251 28.3391 -0.989244 30.6105 2.96774L50.2006 37.0968C52.4719 41.0538 49.6328 46 45.0901 46H5.90986C1.36722 46 -1.47192 41.0538 0.799397 37.0968L20.3895 2.96774Z"
          fill="#702222"
        />
        <path
          id="!"
          d="M28.5688 14.443L27.9354 30.3976H23.8597L23.1162 14.443H28.5688ZM23.7221 35.4665C23.7221 34.2477 24.4931 33.2783 25.8976 33.2783C27.302 33.2783 28.0731 34.2477 28.0731 35.4665C28.0731 36.6852 27.302 37.6547 25.8976 37.6547C24.4931 37.6547 23.7221 36.6852 23.7221 35.4665Z"
          fill="white"
        />
      </g>
    </svg>
  );
}
