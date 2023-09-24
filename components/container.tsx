import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};
const Container = ({ children, className }: Props) => {
  return (
    <div
      className={twMerge(
        'mx-auto flex w-full max-w-screen-xl items-center justify-between px-4 xl:px-[140px]',
        className
      )}
    >
      {children}
    </div>
  );
};
export default Container;
