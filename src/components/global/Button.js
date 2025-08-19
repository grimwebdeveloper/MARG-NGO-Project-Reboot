const Button = ({ content, externalClass }) => {
  return (
    <button
      type='button'
      className={`bg-[#e25a40] text-white p-[5px] px-3 font-bold ${externalClass}`}
    >
      {content}
    </button>
  );
};

export default Button;
