import Link from "next/link";

export default function DownloadPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
            <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-lg">
                <h1 className="text-center text-3xl font-bold text-gray-900">
                    Download Rummy APK
                </h1>

                <p className="mt-3 text-center text-gray-600">
                    Download the latest version of the Rummy app for Android.
                </p>

                <div className="mt-8 space-y-4">
                    <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Version</span>
                        <span>v1.0.0</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">File Size</span>
                        <span>25 MB</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Android</span>
                        <span>5.0+</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Last Updated</span>
                        <span>03 July 2026</span>
                    </div>
                </div>

                {/* Download file */}
                <a
                    href="/app-release.apk"
                    download
                    className="mt-8 block w-full rounded-lg bg-green-600 py-4 text-center text-lg font-semibold text-white transition hover:bg-green-700"
                >
                    📥 Download APK
                </a>

                {/* Internal navigation */}
                <Link
                    href="/"
                    className="mt-4 block text-center text-blue-600 hover:underline"
                >
                    ← Back to Home
                </Link>
            </div>
        </main>
    );
}