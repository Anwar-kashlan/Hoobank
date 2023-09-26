const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`bg-blue-gradient font-poppins font-medium text-[18px] py-4 px-6 ${styles} outline-none rounded-lg `}
    >
      Get Started
    </button>
  );
};

export default Button;
