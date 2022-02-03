/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * Es el mensaje que se va a mostrar en el label
    */
    label: string;
    /**
    * Son los tamaños permitidos para el label
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
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
export declare const MyLabel: ({ label, size, color, allCaps, fontColor }: MyLabelProps) => JSX.Element;
