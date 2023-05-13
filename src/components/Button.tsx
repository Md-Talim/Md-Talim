import { ArrowIcon } from './icons';

interface Props {
  name: string;
  link: string;
  icon: () => JSX.Element;
}

const Button = ({ name, icon, link }: Props) => {
  return (
    <a
      href={link}
      className='flex items-center gap-2 rounded-lg border-2 border-darker px-2 py-1 transition hover:border-primary hover:bg-primary hover:text-lighter'
      target='_blank'
    >
      {icon()}
      <span>{name}</span>
      <ArrowIcon />
    </a>
  );
};

export default Button;
