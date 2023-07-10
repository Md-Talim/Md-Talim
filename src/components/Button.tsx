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
      className="flex items-center gap-2 rounded-full border-2 border-light px-24 py-4 transition hover:border-primary hover:bg-primary hover:text-lighter"
      target="_blank"
    >
      {icon()}
      <span className="font-bold">{name}</span>
      <ArrowIcon />
    </a>
  );
};

export default Button;
