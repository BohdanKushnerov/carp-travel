import { FC } from 'react';

interface ISvgIconProps {
  className?: string;
  width: string | number;
  height: string | number;
  iconPath: string;
}

const SvgIcon: FC<ISvgIconProps> = ({ className, width, height, iconPath }) => {
  return (
    <svg className={className ?? ''} width={width} height={height}>
      <use href={iconPath} />
    </svg>
  );
};

export default SvgIcon;
