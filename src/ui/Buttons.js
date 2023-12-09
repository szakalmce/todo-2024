export const PrimaryButton = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`${className} btn`}>
      {children}
    </button>
  );
};
