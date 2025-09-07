import React, { useState, useEffect } from "react";
import { getUsers, assignRole } from "./firebaseAuth";

export default function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const data = await getUsers();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  const handleRoleChange = async (uid, role) => {
    await assignRole(uid, role);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-blue-800 mb-4">Admin Role Management</h2>
      <table className="w-full bg-white rounded shadow-md">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">Email</th>
            <th className="p-3">Current Role</th>
            <th className="p-3">Assign Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.uid} className="border-t">
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.role}</td>
              <td className="p-3">
                <select
                  onChange={e => handleRoleChange(user.uid, e.target.value)}
                  defaultValue={user.role}
                  className="border p-1 rounded"
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                  <option value="CEO">CEO</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
