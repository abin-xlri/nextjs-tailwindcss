import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="https://abintjose.com/images/myphoto.jpg" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1>Hello, How are you doing?</h1>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <p>
          Powered by{' '}
          <a href="https://abintjose.com" target="_blank">
            Abin T Jose
          </a>
        </p>
      </footer>
    </div>
  );
}
