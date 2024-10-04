import Image from 'next/image';
import logo from '../../public/assets/img/logo.png';

const Logo: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Image
        src={logo}
        alt="Logo écrit Virginie chaffard"
        loading="lazy"
        className="w-40 md:w-48 lg:w-50"
      />
    </div>
  );
};

export default Logo;