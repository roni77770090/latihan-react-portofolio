import { useState, useEffect } from "react"


function PreLoader() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);
    return (
        loading && (
            <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
                <div role="status">
                    <svg
                        aria-hidden="true"
                        className="inline w-12 h-12 text-zinc-700 animate-spin fill-purple-500"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5095 50 91.5095C72.5987 91.5095 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8622 35.9116 97.0071 33.5539C95.2932 28.8227 92.8711 24.3691 89.8167 20.348C85.8456 15.1192 80.8826 10.7236 75.2125 7.41289C69.5424 4.10194 63.2752 1.94025 56.7698 1.05124C51.7666 0.367541 46.6972 0.446843 41.7347 1.27873C39.2613 1.69328 37.813 4.19778 38.4502 6.62326C39.0873 9.04874 41.5695 10.4717 44.0509 10.1071C47.8514 9.54855 51.7192 9.52689 55.5406 10.0491C60.865 10.7766 65.9932 12.5457 70.6334 15.2552C75.2736 17.9648 79.3348 21.5618 82.5849 25.841C84.9173 28.9121 86.7997 32.2917 88.1811 35.8758C89.083 38.2159 91.5423 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>

                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )

    );
};

export default PreLoader