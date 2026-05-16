export default function Card({ children, className = '', onClick }) {
  return (
    <div
      className={`bg-[rgba(255,255,255,0.05)] backdrop-blur-2xl border border-[rgba(255,255,255,0.1)] shadow-[0px_4px_15px_rgba(0,0,0,0.55)] rounded-2xl ${className} ${onClick ? 'cursor-pointer' : 'cursor-default'}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
