import Link from "next/link";

export default function Navbar() {
    return (
        <header className="bg-green-900 text-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                <Link href="/" className="text-2xl font-bold">
                    Rummy
                </Link>

                <Link
                    href="/download"
                    className="rounded-lg bg-yellow-400 px-6 py-2 font-semibold text-black"
                >
                    Download
                </Link>
            </div>
        </header>
    );
}