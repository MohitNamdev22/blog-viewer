export default function PostInformation({post, onClose}) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-sm">

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-lg w-full relative border border-amber-100">

                <button
                    onClick={onClose}
                    className="absolute cursor-pointer top-4 right-4 text-gray-400 hover:text-blue-600 text-2xl font-bold focus:outline-none"
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{post?.title}</h2>
                <p className="text-gray-700">{post?.content}</p>
            </div>
        </div>
    );
}