import Link from "next/link";

export default function Home() {

  return (
    <main className="w-full h-screen flex items-center justify-center">
      <section className="flex flex-col items-center gap-y-2">
        <h1 className="text-xl font-bold mb-4">Projetão de hardware 👍</h1>
        <Link className="hover:underline" href="/api/create-data">
          Create Data (POST)
        </Link>

        <Link className="hover:underline" href="/api/get-data">
          Get Data (GET)
        </Link>

        <Link className="hover:underline" href="/api/delete-all-data">
          Delete All Data (DELETE)
        </Link>
      </section>
    </main>
  );
}
