interface ButtonProps {
  action?: () => void;
}

const Button = ({ action }: ButtonProps): JSX.Element => {
  const text = "Delete";

  return <button onClick={action}>{text}</button>;
};

export default Button;
