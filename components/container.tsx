type Props = {
  children: React.ReactNode;
};
const Container = ({ children }: Props) => {
  return (
    <div className="mx-4 flex w-full max-w-screen-xl items-center justify-between xl:mx-[140px]">
      {children}
    </div>
  );
};
export default Container;
