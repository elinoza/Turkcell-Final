import clsx from "clsx";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} &React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonDefault = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={clsx(className, "btn")} {...props}>
      {children}
    </button>
  );
};

export default ButtonDefault;
