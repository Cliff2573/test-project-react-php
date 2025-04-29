import React, { useState, useEffect } from "react";

const UserForm = ({ onEdit, editingUser, onCancel }) => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  // 若是編輯模式，就填入原資料
  useEffect(() => {
    if (editingUser) {
      setUsername(editingUser.username);
      setPhone(editingUser.phone);
    } else {
      setUsername("");
      setPhone("");
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !phone.trim()) {
      alert("請填寫所有欄位！");
      return;
    }

    const formData = {
      username,
      phone,
      ...(editingUser && { sn: editingUser.sn }),
    };

    onEdit(formData);
    setUsername("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded mb-4">
      <h2 className="text-xl font-bold mb-2">
        {editingUser ? "編輯使用者" : "新增使用者"}
      </h2>
      <div className="mb-2">
        <input
          type="text"
          placeholder="使用者名稱"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          placeholder="電話"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="flex gap-2">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editingUser ? "更新" : "新增"}
        </button>
        {editingUser && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            取消
          </button>
        )}
      </div>
    </form>
  );
};

export default UserForm;