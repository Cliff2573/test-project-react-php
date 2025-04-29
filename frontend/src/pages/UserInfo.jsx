import React, { useState, useEffect } from "react";
import axios from "axios";
import UserSearch from "../features/UserSearch";
import UserTable from "../features/UserTable";
import UserForm from "../features/UserForm";

export default function UserInfo() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); // 用於編輯資料

  // 搜尋功能
  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/users?search=${query}`);
      setUsers(response.data);
    } catch (error) {
      console.error("搜尋使用者發生錯誤", error);
    }
  };

  // 新增 or 更新使用者
  const handleEdit = async (userData) => {

    const confirmEdit = window.confirm("確定要編輯此筆資料嗎？");

    if (confirmEdit) {

      console.log("editingUser: ", editingUser);
      console.log("userData: ", userData);

      try {
        if (editingUser) {
          // 更新使用者資料
          const response = await axios.put(`http://localhost:8000/api/users/${editingUser.sn}`, userData);

          console.log("Update data: ", response.data);

          setUsers(users.map((user) => (user.sn === editingUser.sn ? response.data.data : user)));
        } else {
          // 新增使用者資料
          const response = await axios.post("http://localhost:8000/api/users", userData);

          console.log("Create data: ", response.data);

          setUsers([...users, response.data.data]);
        }
        setEditingUser(null); // 清除編輯狀態
      } catch (error) {
        console.error("新增或更新使用者發生錯誤", error);
      }
    }
  };

  // 取消編輯
  const onCancel = () => {
    setEditingUser(null); // 清除編輯狀態
  }

  // 刪除該筆資料
  const handleDelete = async (sn) => {

    const confirmDelete = window.confirm("確定要刪除此筆資料嗎？");
    if (confirmDelete) {
        try {
          await axios.delete(`http://localhost:8000/api/users/${sn}`);
          setUsers(users.filter((user) => user.sn !== sn)); // Remove deleted user from state
          alert("User deleted successfully!");
        } catch (error) {
          console.error("There was an error deleting the user!", error);
        }
    }

  }  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">使用者資訊管理</h1>

      <UserSearch onSearch={handleSearch} />
      <UserTable users={users} onEdit={setEditingUser} onDelete={handleDelete} />
      <UserForm onEdit={handleEdit} editingUser={editingUser} onCancel={onCancel} />
    </div>
  );

}