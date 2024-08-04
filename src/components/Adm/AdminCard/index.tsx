'use client';
import { useId, useState } from 'react';
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
  const idRadioAdmin = useId();
  const idRadioCommomUser = useId();
  const [radioValue, setRadioValue] = useState<'isAdmin' | 'isCommomUser'>(
    'isAdmin'
  );
  // return (
  //   <div className="flex flex-col p-4 border rounded-lg shadow-md bg-white relative xl:max-w-3/5">
  //     <div className="mb-4">
  //       <h3 className="text-lg font-semibold text-green-700">
  //         Administradores
  //       </h3>
  //     </div>
  //     <div className="flex justify-between items-center">
  //       <p className="font-semibold">{data.name}</p>
  //       <button
  //         className="w-5 h-5 rounded-full flex items-center justify-center"
  //         onClick={onToggleActive}
  //       >
  //         {data.isActive ? (
  //           <svg
  //             width="25"
  //             height="25"
  //             viewBox="0 0 25 25"
  //             fill="none"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <path
  //               d="M8.33301 19.7917L16.6663 19.7917C20.6934 19.7917 23.958 16.5271 23.958 12.5C23.958 8.47294 20.6934
  //               5.20835 16.6663 5.20835H8.33301C4.30593 5.20835 1.04134 8.47294 1.04134 12.5C1.04134 16.5271 4.30593
  //               19.7917 8.33301 19.7917Z"
  //               stroke="#1F8505"
  //               strokeWidth="1.5"
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //             />
  //             <path
  //               d="M8.33301 9.375C6.60712 9.375 5.20801 10.7741 5.20801 12.5C5.20801 14.2259 6.60712 15.625 8.33301
  //               15.625C10.0589 15.625 11.458 14.2259 11.458 12.5C11.458 10.7741 10.0589 9.375 8.33301 9.375Z"
  //               fill="#1F8505"
  //               stroke="#1F8505"
  //               strokeWidth="1.5"
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //             />
  //           </svg>
  //         ) : (
  //           <svg
  //             width="25"
  //             height="25"
  //             viewBox="0 0 25 25"
  //             fill="none"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <path
  //               d="M16.667 5.20831H8.33366C4.30658 5.20831 1.04199 8.4729 1.04199 12.5C1.04199 16.5271 4.30658 19.7916 8.33366 19.7916H16.667C20.6941 19.7916 23.9587 16.5271 23.9587 12.5C23.9587 8.4729 20.6941 5.20831 16.667 5.20831Z"
  //               stroke="#D83634"
  //               strokeWidth="1.5"
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //             />
  //             <path
  //               d="M16.667 15.625C18.3929 15.625 19.792 14.2259 19.792 12.5C19.792 10.7741 18.3929 9.375 16.667 9.375C14.9411 9.375 13.542 10.7741 13.542 12.5C13.542 14.2259 14.9411 15.625 16.667 15.625Z"
  //               fill="#D83634"
  //               stroke="#D83634"
  //               strokeWidth="1.5"
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //             />
  //           </svg>
  //         )}
  //       </button>
  //     </div>
  //     <p className="text-gray-600">{data.email}</p>
  //     <div className="flex items-center space-x-2 mt-2">
  //       <input type="radio" checked={data.isAdmin} readOnly />
  //       <label className="text-gray-600">Administrador</label>
  //       <input type="radio" checked={!data.isAdmin} readOnly />
  //       <label className="text-gray-600">Usuário</label>
  //     </div>
  //     <div className="flex justify-between">
  //       <p className="text-gray-600 mt-2">
  //         Código de acesso:
  //         <span className="text-green-700">{data.accessCode}</span>
  //       </p>
  //       <button onClick={handleCopy}>
  //         <svg
  //           width="61"
  //           height="20"
  //           viewBox="0 0 61 20"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <g clipPath="url(#clip0_174_730)">
  //             <path
  //               d="M15.3687 8.15302H9.44763C8.72093 8.15302 8.13184 8.74211 8.13184 9.4688V15.3899C8.13184 16.1165 8.72093 16.7056 9.44763 16.7056H15.3687C16.0954 16.7056 16.6845 16.1165 16.6845 15.3899V9.4688C16.6845 8.74211 16.0954 8.15302 15.3687 8.15302Z"
  //               stroke="#1F8505"
  //               strokeWidth="1.3"
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //             />
  //             <path
  //               d="M5.50005 12.1004H4.84216C4.49319 12.1004 4.15851 11.9618 3.91175 11.715C3.66499 11.4683 3.52637 11.1336 3.52637 10.7846V4.86358C3.52637 4.51461 3.66499 4.17993 3.91175 3.93318C4.15851 3.68642 4.49319 3.54779 4.84216 3.54779H10.7632C11.1122 3.54779 11.4469 3.68642 11.6936 3.93318C11.9404 4.17993 12.079 4.51461 12.079 4.86358V5.52147"
  //               stroke="#1F8505"
  //               strokeWidth="1.3"
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //             />
  //           </g>
  //           <path
  //             d="M27.596 15.182C26.712 15.182 25.9233 14.9892 25.23 14.6035C24.541 14.2135 23.9972 13.6653 23.5985 12.959C23.2042 12.2483 23.007 11.412 23.007 10.45C23.007 9.488 23.2063 8.65383 23.605 7.9475C24.008 7.23683 24.5583 6.68867 25.256 6.303C25.958 5.913 26.7553 5.718 27.648 5.718C28.1117 5.718 28.5537 5.76783 28.974 5.8675C29.3943 5.96717 29.7627 6.095 30.079 6.251L29.949 7.395C29.624 7.239 29.2665 7.10683 28.8765 6.9985C28.4865 6.89017 28.0727 6.836 27.635 6.836C26.92 6.836 26.3198 6.9985 25.8345 7.3235C25.3492 7.64417 24.9808 8.0775 24.7295 8.6235C24.4825 9.1695 24.359 9.77833 24.359 10.45C24.359 11.1217 24.4803 11.7305 24.723 12.2765C24.97 12.8225 25.334 13.258 25.815 13.583C26.3003 13.9037 26.8983 14.064 27.609 14.064C28.0597 14.064 28.4757 14.0163 28.857 13.921C29.2427 13.8213 29.6067 13.687 29.949 13.518L30.079 14.662C29.754 14.8093 29.3878 14.9328 28.9805 15.0325C28.5732 15.1322 28.1117 15.182 27.596 15.182ZM33.908 15.13C33.2407 15.13 32.6708 14.9827 32.1985 14.688C31.7305 14.389 31.3708 13.9903 31.1195 13.492C30.8725 12.9893 30.749 12.4303 30.749 11.815C30.749 11.1997 30.8725 10.6428 31.1195 10.1445C31.3708 9.64183 31.7305 9.24317 32.1985 8.9485C32.6708 8.6495 33.2407 8.5 33.908 8.5C34.571 8.5 35.1387 8.6495 35.611 8.9485C36.0833 9.24317 36.443 9.64183 36.69 10.1445C36.9413 10.6428 37.067 11.1997 37.067 11.815C37.067 12.4303 36.9413 12.9893 36.69 13.492C36.443 13.9903 36.0833 14.389 35.611 14.688C35.1387 14.9827 34.571 15.13 33.908 15.13ZM33.908 14.09C34.5407 14.09 35.026 13.8907 35.364 13.492C35.702 13.089 35.871 12.53 35.871 11.815C35.871 11.1 35.702 10.5432 35.364 10.1445C35.026 9.7415 34.5407 9.54 33.908 9.54C33.2797 9.54 32.7943 9.7415 32.452 10.1445C32.114 10.5432 31.945 11.1 31.945 11.815C31.945 12.53 32.114 13.089 32.452 13.492C32.7943 13.8907 33.2797 14.09 33.908 14.09ZM38.2735 18.146V8.63H39.1835L39.3915 10.086L39.0665 9.852C39.3351 9.436 39.6666 9.10667 40.061 8.864C40.4553 8.62133 40.9385 8.5 41.5105 8.5C42.0911 8.5 42.5895 8.64733 43.0055 8.942C43.4215 9.23667 43.74 9.63533 43.961 10.138C44.182 10.6363 44.2925 11.1953 44.2925 11.815C44.2925 12.4347 44.1885 12.9958 43.9805 13.4985C43.7725 13.9968 43.4626 14.3933 43.051 14.688C42.6393 14.9827 42.1258 15.13 41.5105 15.13C41.0035 15.13 40.5441 15.026 40.1325 14.818C39.7251 14.6057 39.4305 14.2893 39.2485 13.869L39.4435 13.635V18.146H38.2735ZM41.2895 14.09C41.8571 14.09 42.2991 13.8907 42.6155 13.492C42.9361 13.089 43.0965 12.53 43.0965 11.815C43.0965 11.1 42.9361 10.5432 42.6155 10.1445C42.2991 9.7415 41.8571 9.54 41.2895 9.54C40.9385 9.54 40.6178 9.6245 40.3275 9.7935C40.0415 9.95817 39.8118 10.2095 39.6385 10.5475C39.4651 10.8812 39.3785 11.3037 39.3785 11.815C39.3785 12.348 39.4651 12.7813 39.6385 13.115C39.8118 13.4487 40.0415 13.6957 40.3275 13.856C40.6178 14.012 40.9385 14.09 41.2895 14.09ZM45.5098 15V8.63H46.6798V15H45.5098ZM45.5098 7.2V5.9H46.6798V7.2H45.5098ZM49.7467 15.13C49.3523 15.13 49.0078 15.0498 48.7132 14.8895C48.4185 14.7292 48.1888 14.5103 48.0242 14.233C47.8638 13.9557 47.7837 13.6393 47.7837 13.284C47.7837 12.9243 47.8617 12.6167 48.0177 12.361C48.178 12.101 48.3903 11.8865 48.6547 11.7175C48.9233 11.5442 49.2223 11.4077 49.5517 11.308C49.881 11.204 50.2212 11.1303 50.5722 11.087C50.9275 11.0393 51.2677 11.0133 51.5927 11.009C51.5927 10.4023 51.4735 10.0058 51.2352 9.8195C50.9968 9.63317 50.6523 9.54 50.2017 9.54C49.9633 9.54 49.7077 9.57683 49.4347 9.6505C49.166 9.72417 48.8627 9.878 48.5247 10.112L48.3557 9.163C48.6113 8.968 48.9298 8.80983 49.3112 8.6885C49.6925 8.56283 50.0933 8.5 50.5137 8.5C51.051 8.5 51.4843 8.59533 51.8137 8.786C52.143 8.97233 52.3835 9.28867 52.5352 9.735C52.6868 10.1813 52.7627 10.788 52.7627 11.555V12.855C52.7627 13.1583 52.7757 13.4097 52.8017 13.609C52.832 13.804 52.897 13.9513 52.9967 14.051C53.1007 14.1463 53.2653 14.194 53.4907 14.194H53.6077L53.4257 15.13H53.3347C52.9577 15.13 52.6652 15.0932 52.4572 15.0195C52.2535 14.9458 52.0975 14.8397 51.9892 14.701C51.8808 14.5623 51.7833 14.3933 51.6967 14.194C51.4583 14.4713 51.1767 14.6967 50.8517 14.87C50.5267 15.0433 50.1583 15.13 49.7467 15.13ZM49.9677 14.194C50.2797 14.194 50.5808 14.116 50.8712 13.96C51.1658 13.804 51.4063 13.596 51.5927 13.336V11.815C50.973 11.8367 50.4703 11.8973 50.0847 11.997C49.7033 12.0967 49.4238 12.2462 49.2462 12.4455C49.0685 12.6448 48.9797 12.9027 48.9797 13.219C48.9797 13.5613 49.0707 13.8105 49.2527 13.9665C49.439 14.1182 49.6773 14.194 49.9677 14.194ZM54.5108 15V8.63H55.4728L55.6158 9.683C55.9408 9.28 56.2506 8.98317 56.5453 8.7925C56.8443 8.5975 57.1628 8.5 57.5008 8.5C57.6091 8.5 57.7088 8.513 57.7998 8.539L57.6828 9.826C57.6264 9.813 57.5658 9.80433 57.5008 9.8C57.4401 9.79133 57.3708 9.787 57.2928 9.787C56.9548 9.787 56.6428 9.86283 56.3568 10.0145C56.0751 10.1618 55.8758 10.3243 55.7588 10.502V15H54.5108Z"
  //             fill="#1F8505"
  //           />
  //           <defs>
  //             <clipPath id="clip0_174_730">
  //               <rect
  //                 width="15"
  //                 height="15"
  //                 fill="white"
  //                 transform="translate(2.5 2.5)"
  //               />
  //             </clipPath>
  //           </defs>
  //         </svg>
  //       </button>
  //     </div>
  //   </div>
  // );
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
      <div className="flex items-center gap-x-[10px]">
        <div>
          <input
            type="radio"
            id={idRadioAdmin}
            value={radioValue}
            checked={radioValue === 'isAdmin'}
            onChange={() => setRadioValue('isAdmin')}
            className="accent-primary_200 mr-[5px]"
          />
          <label htmlFor={idRadioAdmin}>Administrador</label>
        </div>
        <div>
          <input
            type="radio"
            id={idRadioCommomUser}
            value={radioValue}
            checked={radioValue === 'isCommomUser'}
            onChange={() => setRadioValue('isCommomUser')}
            className="accent-primary_200 mr-[5px]"
          />
          <label htmlFor={idRadioCommomUser}>Usuário</label>
        </div>
      </div>
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
