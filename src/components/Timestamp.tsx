export const Timestamp = () => {
  let d = new Date();

  const hora = `${d.getHours().toString().padStart(2, "0")}:${d
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${d.getSeconds().toString().padStart(2, "0")}.${d
    .getMilliseconds()
    .toString()
    .padStart(3, "0")}`;

  return (
    <h1 
      key={hora}
      className="text-4xl rounded px-3 py-1"
      style={{
        animation: 'fadeBackground 1s ease-out 0.1s forwards',
        backgroundColor: 'rgb(59 130 246 / 0.4)',
      }}
    >
      <style>{`
        @keyframes fadeBackground {
          to {
            background-color: transparent;
          }
        }
      `}</style>
      {hora}
    </h1>
  );
};