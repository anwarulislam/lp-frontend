import { Form } from "./components/Form";

export default function Home() {
  return (
    <main className="bg-[#F2F4F7] min-h-[100vh]">
      <header>
        <nav className="bg-primary font-bold py-2 text-white text-center">
          <h1>Join the waitlist</h1>
        </nav>
      </header>

      <div className="container mt-16">
        <div className="text-center">
          <h2 className="font-bold text-5xl mb-5">Profile</h2>
          <h3 className="text-3xl">Talent Intelligence Software</h3>
        </div>
        <div className="flex mt-12 justify-center gap-16">
          <div>
            <img src="/images/flower.jpg" className="max-w-xs rounded" />
          </div>
          <div className="max-w-xs w-full">
            <Form />
          </div>
        </div>

        <p className="text-center mt-12">
          Sic de isto et tutius perducit ad actum ipsum, ut si dico "Ego autem
          vadam lavari, ut mens mea in statu naturae conformior." Et similiter
          circa alias res. Et sic, si contingit ex per se lavantem, et erit
        </p>
      </div>
    </main>
  );
}
