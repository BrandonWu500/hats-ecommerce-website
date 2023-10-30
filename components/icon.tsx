import { IconType } from 'react-icons';

type Props = {
  icon: IconType;
  className?: string;
};
const Icon = ({ icon: Icon, className }: Props) => {
  return <Icon className={className} />;
};
export default Icon;
