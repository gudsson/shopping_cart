/* eslint-disable jsx-a11y/anchor-is-valid */
const Button = ({ classStyles, title, onClick }) => {
  return (
    <>
      <a className={classStyles} onClick={onClick} data-testid="button-test">
        <span>{title}</span>
      </a>&nbsp;
    </>
  );
};

export default Button;
