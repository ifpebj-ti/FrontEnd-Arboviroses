export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary_300"></div>
      <p className="text-14 text-primary_300 mt-2">Carregando...</p>
    </div>
  );
}

export default Loading;
