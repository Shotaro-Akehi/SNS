"use client";
import { useState } from "react";

export default function PostForm() {
  const [text, setText] = useState("");

    return (
      <div className="bg-white p-4 rounded-xl shadow-md">
        {/* テキスト入力欄 */}
        <textarea
          placeholder="いまどうしてる？"
          className="w-full p-2 border border-gray-300 rounded-md resize-none"
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {/* 投稿ボタン */}
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => {
            console.log("投稿内容:", text);
          }}
        >
          投稿する
        </button>
      </div>
    );
  }