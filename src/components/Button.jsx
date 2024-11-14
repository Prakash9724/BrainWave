import React from 'react'
import ButtonSvg from '../assets/svg/ButtonSvg'


const Button = ({classname,herf,onClick,children,px,white}) => {
  
  
    const classes = `button relative infline-flex items-center justify-center h-11 transition-color hover:text-color-1 ${px || 'px-7'} ${white ? "text-n-8" : "text-n-1"} ${classname || ""} 
  ` ;
    
    const spanClasses = 'relative z-10'
   
    const renderButton = () =>(
        <button className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    );
    
    const renderLink = () =>(
        <a className={classes} href={herf}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </a>
    )
    
    return herf ? renderLink() : renderButton();
  
};

export default Button
