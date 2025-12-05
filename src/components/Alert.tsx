import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return (
    <div className="alert alert-primary m-2" role="alert">
      {children}
    </div>
  );
};

export default Alert;
