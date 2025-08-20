import Link from 'next/link';

const AnchorButton = ({ content, externalClass }) => {
  return (
    <Link
      href='#'
      className={`bg-[#e25a40] text-white p-[5px] px-3 font-bold ${externalClass}`}
    >
      {content}
    </Link>
  );
};

export default AnchorButton;
