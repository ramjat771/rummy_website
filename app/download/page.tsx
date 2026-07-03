import Link from "next/link";

const APK = {
    version: "v1.0.0",
    size: "81 MB",
    android: "5.0+",
    updated: "03 July 2026",
};

export default function DownloadPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-xl">

                <div className="text-center">
                    <div className="text-6xl">📱</div>

                    <h1 className="mt-4 text-3xl font-bold">
                        Download Rummy APK
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Download the latest Android version securely and install in minutes.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border bg-gray-50 p-5 space-y-3">

                    <div className="flex justify-between">
                        <span className="font-medium">Version</span>
                        <span>{APK.version}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-medium">File Size</span>
                        <span>{APK.size}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-medium">Android</span>
                        <span>{APK.android}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-medium">Last Updated</span>
                        <span>{APK.updated}</span>
                    </div>

                </div>

                <a
                    href="https://sattagames.online/app-release.apk"
                    className="mt-8 block w-full rounded-xl bg-green-600 py-4 text-center text-lg font-bold text-white hover:bg-green-700 transition"
                >
                    ⬇ Download APK
                </a>

                <div className="mt-6 rounded-xl bg-green-50 p-4">
                    <h2 className="mb-2 font-semibold">Installation</h2>

                    <ol className="ml-5 list-decimal space-y-1 text-sm text-gray-600">
                        <li>Download the APK.</li>
                        <li>Open the downloaded file.</li>
                        <li>Allow installation from unknown sources if prompted.</li>
                        <li>Install and enjoy the app.</li>
                    </ol>
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
                    <span className="rounded-full bg-green-100 px-4 py-2">
                        ✅ Safe Download
                    </span>

                    <span className="rounded-full bg-blue-100 px-4 py-2">
                        🚀 Fast Download
                    </span>

                    <span className="rounded-full bg-yellow-100 px-4 py-2">
                        📦 Latest Version
                    </span>
                </div>

                <Link
                    href="/"
                    className="mt-8 block text-center text-blue-600 hover:underline"
                >
                    ← Back to Home
                </Link>

            </div>
        </main>
    );
}