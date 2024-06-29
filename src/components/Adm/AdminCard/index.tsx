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
  onToggleActive: (isActive: boolean) => void;
}

const AdminCard: React.FC<AdminCardProps> = ({ data, onToggleActive }) => {
  return (
    <div className="flex flex-col p-4 border rounded-lg shadow-md bg-white relative max-w-[563px] max-h-[157px]">
      <div className="flex justify-between items-center">
        <p className="font-semibold">{data.name}</p>
        <button
          className={`w-5 h-5 rounded-full ${data.isActive ? 'bg-green-500' : 'bg-red-500'}`}
          onClick={() => onToggleActive(data.isActive)}
        ></button>
      </div>
      <p className="text-gray-600">{data.email}</p>
      <div className="flex items-center space-x-2 mt-2">
        <input type="radio" checked={data.isAdmin} readOnly />
        <label className="text-gray-600">Administrador</label>
        <input type="radio" checked={!data.isAdmin} readOnly />
        <label className="text-gray-600">Usuário</label>
      </div>
      <p className="text-gray-600 mt-2">Código de acesso: <span className="text-green-700">{data.accessCode}</span></p>
    </div>
  );
};

export default AdminCard;
