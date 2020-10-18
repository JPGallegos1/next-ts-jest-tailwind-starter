import Head from 'next/head';

type LayoutProps = {
  title?: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  title = 'Next & TS & Tailwind',
  children
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
