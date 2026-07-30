import Image from 'next/image';
import logo from '../../img/noviq.png';

type LogoProps = {
  height?: number;
  className?: string;
  priority?: boolean;
};

export default function Logo({ height = 32, className = '', priority = false }: LogoProps) {
  const width = Math.round(height * (logo.width / logo.height));

  return (
    <Image
      src={logo}
      alt="NoviqSearch"
      width={width}
      height={height}
      priority={priority}
      className={`w-auto object-contain ${className}`}
    />
  );
}
