import { useRouter } from "next/router";

// This is our ROOT Home page!
// It simply displays 3 cateogories of products which users can choose to shop from.
// For simplicity our categories are electric, acoustic and bass guitars.
// Clicking on them will direct user to the relavant product listing page.

export default function Home() {
    const router = useRouter();

    // Routing the users to the product listing page.
    const handleClick = (type) => () => {
        router.push(`/products/${type}`);
    };

  return (
    <>
    <div className="min-h-screen">
      <div className="grid lg:grid-cols-3 sm:grid-cols-3 p-5 gap-5">
        <div onClick={handleClick("ELECTRIC")} className="relative shadow transition-transform duration-300 ease-in-out transform hover:scale-105">
            <div className="h-full w-full">
                <img className="object-cover w-full h-full" src="/images/homepage/homeGuitar.jpg" alt="" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className="text-4xl font-bold">Electric Guitars</h2>
                <h2>Amplified and versatile</h2>
            </div>
        </div>

        <div onClick={handleClick("ACOUSTIC")} className="relative shadow transition-transform duration-300 ease-in-out transform hover:scale-105">
            <div className="h-full w-full">
                <img className="object-cover w-full h-full" src="/images/homepage/acoustic_1.jpg" alt="" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className="text-4xl font-bold">Acoustic Guitars</h2>
                <h2>Natural, resonant sound</h2>
            </div>
        </div>

        <div onClick={handleClick("BASS")} className="relative shadow transition-transform duration-300 ease-in-out transform hover:scale-105">
            <div className="h-full w-full">
                <img className="object-cover w-full h-full" src="/images/homepage/homeBass.jpg" alt="" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className="text-4xl font-bold">Bass Guitars</h2>
                <h2>Low-end rhythm and harmony</h2>
            </div>
        </div>

      </div>
    </div>
    </>
  );
}
