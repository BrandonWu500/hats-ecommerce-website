type Props = {
  children: React.ReactNode;
};
const Container = ({ children }: Props) => {
  return (
    <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-4 xl:px-[140px]">
      {children}
    </div>
  );
};
export default Container;
