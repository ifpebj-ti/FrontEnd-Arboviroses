import React from 'react';

interface AdminData {
  id: number;
  name: string;
  email: string;
  accessCode: string;
  isActive: boolean;
  isAdmin: boolean;
}

interface AdminCardProps {
  data: AdminData;
  onEdit: (id: number) => void;
  onRemove: (id: number) => void;
}

const AdminCard: React.FC<AdminCardProps> = ({ data, onEdit, onRemove }) => {
  return (
    <div className="flex flex-col p-4 border rounded-lg shadow-md bg-white relative max-w-[563px] max-h-[157px]">
      <div className="flex justify-between">
        <p>{data.name}</p>
        <div className="flex space-x-2">
          <button onClick={() => onEdit(data.id)} className="text-blue-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 17l-1.586-1.586a2 2 0 010-2.828l9-9a2 2 0 012.828 0l2.828 2.828a2 2 0 010 2.828l-9 9a2 2 0 01-2.828 0L11 17z"
              />
            </svg>
          </button>
          <button onClick={() => onRemove(data.id)} className="text-red-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 13H5v-2h14v2zm-7 8a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </button>
        </div>
      </div>
      <p>{data.email}</p>
      <p>{data.accessCode}</p>
      <p>{data.isActive ? 'Active' : 'Inactive'}</p>
      <p>{data.isAdmin ? 'Admin' : 'User'}</p>
    </div>
  );
};

export default AdminCard;
