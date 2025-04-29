import React from "react";

const UserTable = ({ users, onDelete, onEdit }) => {
  return (
    <table className="w-full border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">序號</th>
          <th className="p-2 border">使用者名稱</th>
          <th className="p-2 border">電話</th>
          <th className="p-2 border">操作</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <tr>
            <td colSpan="4" className="text-center p-4 text-gray-500">
              無資料
            </td>
          </tr>
        ) : (
          users.map((user) => (
            <tr key={user.sn} className="text-center">
              <td className="p-2 border">{user.sn}</td>
              <td className="p-2 border">{user.username}</td>
              <td className="p-2 border">{user.phone}</td>
              <td className="p-2 border">
                <button
                  className="bg-yellow-400 text-white px-2 py-1 rounded mr-2"
                  onClick={() => onEdit(user)}
                >
                  編輯
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => onDelete(user.sn)}
                >
                  刪除
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default UserTable;