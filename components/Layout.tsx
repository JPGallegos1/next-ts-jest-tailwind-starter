import Head from 'next/head';

type LayoutProps = {
  title?: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  title = 'Adoptar',
  children
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="icon" href="https://rocketseat.com.br/favicon.ico" /> */}
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
