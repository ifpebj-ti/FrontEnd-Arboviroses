'use client';
import { FiCopy } from 'react-icons/fi';

interface AdminData {
  id: number;
  name: string;
  email: string;
  accessCode: string;
  isActive: boolean;
  isAdmin: boolean;
}

type AdminCardProps = {
  data: AdminData;
  onToggleActive: () => void;
};

export function AdminCard({ data, onToggleActive }: AdminCardProps) {
  return (
    <div className="flex flex-col p-[10px] gap-y-[10px] border rounded-lg shadow-md bg-white relative paragraph-mobile lg:paragraph xl:max-w-3/5">
      <div className="flex w-full justify-between">
        <h1 className="section-title-mobile lg:caption">Nome</h1>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 border-2 border-primary_200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-primary_200 after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:border-danger_300 peer-checked:after:bg-danger_300" />
        </label>
      </div>
      <p>Email</p>
      <div className="flex w-full justify-between">
        <p>
          Código de acesso: <span className="text-primary_200">123456</span>
        </p>
        <div className="flex gap-x-[5px] text-primary_200 cursor-pointer">
          <FiCopy />
          <p>Copiar</p>
        </div>
      </div>
    </div>
  );
}
