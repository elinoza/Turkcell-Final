import Image from "next/image";
const Logo = () => {
  return (
    <>
      {" "}
      <Image src="/logo.svg" width={32} height={32} alt="logo" />
      <h5 className="m-0 d-inline">Rocket</h5>
    </>
  );
};

export default Logo;
