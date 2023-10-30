import { twMerge } from 'tailwind-merge';

type Props = {
  datetime: string;
  className?: string;
};
const Time = ({ datetime, className }: Props) => {
  return (
    <time dateTime={datetime} className={twMerge('', className)}>
      {new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(datetime))}
    </time>
  );
};
export default Time;
