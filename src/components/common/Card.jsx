/**
 * Card - reusable dark card
 * Props: children, className, onClick, hover (bool)
 */
export default function Card({ children, className = '', onClick, hover = true, style = {} }) {
  return (
    <div
      className={`card-dark ${className}`}
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
