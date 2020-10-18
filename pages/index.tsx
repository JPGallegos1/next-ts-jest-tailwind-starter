import { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Home | Adoptar">
      <section className="flex flex-col items-center w-full">
        <h1 className="text-4xl leading-tight tracking-wide">
          Starter pack that includes:
        </h1>
        <ul className="flex flex-col list-disc">
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind</li>
          <li>Jest</li>
          <li>React Testing Library</li>
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
