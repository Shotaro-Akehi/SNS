export default function PostForm() {
    return (
      <div className="bg-white p-4 rounded-xl shadow-md">
        <textarea
          placeholder="いまどうしてる？"
          className="w-full p-2 border border-gray-300 rounded-md resize-none"
          rows={3}
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          投稿する
        </button>
      </div>
    );
  }