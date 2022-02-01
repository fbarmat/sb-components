import React from 'react';
import './mylabel.css';

export interface MyLabelProps {
    /**
    * Es el mensaje que se va a mostrar en el label
    */
    label: string;
    /**
    * Son los tamaños permitidos para el label
    */
    size: 'normal'| 'h1' | 'h2' | 'h3';
    /**
    * Colores basicos del boton
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Si quiere todo capitalizado
    */
    allCaps: boolean;
    /**
    * Color de la fuente
    */
   fontColor?: string;
}

export const MyLabel = ({
        label = 'No Label', 
        size= 'normal',
        color= 'primary',
        allCaps= false,
        fontColor
}: MyLabelProps) => {
    return (
        <span 
            className={`label ${size} text-${color}`}
            style={{color: fontColor}}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    );
};
