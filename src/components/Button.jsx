import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, herf, onClick, children, px, white }) => {
  const classes = `button relative infline-flex items-center justify-center h-11 transition-color hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""} 
  `;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={herf} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return herf ? renderLink() : renderButton();
};

export default Button;
