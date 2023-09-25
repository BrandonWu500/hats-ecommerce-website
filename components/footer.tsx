import Container from '@/components/container';

const Footer = () => {
  return (
    <Container className="xl:mt-16">
      <div className="w-full border-t border-slate-600">
        <p className="pb-8 pt-4 text-center font-body text-lg text-slate-600">{`© 2023 BW Hats Inc. All rights reserved.`}</p>
      </div>
    </Container>
  );
};
export default Footer;
