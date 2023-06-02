interface CautionIconProps {
  width: number;
}

export default function CautionIcon({ width }: CautionIconProps) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 57255">
        <g id="icon_caution">
          <path
            id="Polygon 4"
            d="M20.3895 4.96774C22.6609 1.01075 28.3391 1.01076 30.6105 4.96774L50.2006 39.0968C52.4719 43.0538 49.6328 48 45.0901 48H5.90986C1.36722 48 -1.47192 43.0538 0.799397 39.0968L20.3895 4.96774Z"
            fill="#702222"
          />
          <path
            id="!"
            d="M28.5688 16.443L27.9354 32.3976H23.8597L23.1162 16.443H28.5688ZM23.7221 37.4665C23.7221 36.2477 24.4931 35.2783 25.8976 35.2783C27.302 35.2783 28.0731 36.2477 28.0731 37.4665C28.0731 38.6852 27.302 39.6547 25.8976 39.6547C24.4931 39.6547 23.7221 38.6852 23.7221 37.4665Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
}
