export default function Card({ children, className = '', onClick }) {
  return (
    <div
      className={`card-dark ${className} ${onClick ? 'cursor-pointer' : 'cursor-default'}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
