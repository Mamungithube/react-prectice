const Button = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-[#1E3A8A] text-white py-3 rounded-md hover:bg-blue-900 transition-all font-semibold ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;