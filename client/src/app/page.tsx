import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex item-center w-full justify-evenly p-4">
        <div>
          <h1>LOGO</h1>
          <h1>AQUÍ</h1>
        </div>
        <div className="border-2 border-black p-2">
          <input type="text" placeholder="Buscar ubicación" />
          <button className="item-center w-" type="submit">
            <Image src="/search.png" alt="Search" width="20" height="20" />
          </button>
        </div>
        <div>
          <button>C</button>
          <button>F</button>
        </div>
      </div>
    </main>
  );
}
