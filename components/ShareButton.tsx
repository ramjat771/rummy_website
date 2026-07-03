"use client";

export default function ShareButton() {
    const handleShare = async () => {
        const shareData = {
            title: "Rummy APK",
            text: "🎉 Play Rummy APK and Win up to ₹500!",
            url: window.location.origin,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.origin);
                alert("Link copied! Share with friends 🎉");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex flex-col items-center gap-2">

            {/* Reward Text */}
            <p className="text-yellow-300 font-semibold animate-pulse">
                🎁 Share & Win up to ₹500
            </p>

            {/* Button */}
            <button
                onClick={handleShare}
                className="rounded-full bg-white/10 px-10 py-3 text-white border border-white/20 backdrop-blur-md transition hover:scale-105"
            >
                🔗 Share Now
            </button>

        </div>
    );
}