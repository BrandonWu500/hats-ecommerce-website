import { twMerge } from 'tailwind-merge';

type Props = {
  html: string;
  className?: string;
};
const Prose = ({ html, className }: Props) => {
  return (
    <div
      className={twMerge(
        'prose font-body marker:text-slate-700 prose-h2:font-medium prose-h2:text-slate-700 prose-p:text-lg prose-p:leading-relaxed prose-p:text-slate-700 prose-ul:list-disc prose-ul:pl-4 prose-ul:text-lg',
        className
      )}
      dangerouslySetInnerHTML={{ __html: html as string }}
    />
  );
};
export default Prose;
