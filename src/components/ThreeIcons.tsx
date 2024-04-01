import React, { useState } from 'react';
import type { MouseEvent } from 'react';
import { Form } from './Form/Form';

import './ThreeIcons.css';
import { cnThreeIcons } from './ThreeIcons.classname';

export type IconsType = {
  class: string;
  top: number;
  left: number;
}

function ThreeIcons() {
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const [visible, setVisible] = useState(false);
    const [icons, setIcons] = useState<IconsType[]>([]);
  
    const handleClick = (event: MouseEvent<HTMLDivElement>)=>{
      setCoords({ top: event.clientY,left: event.clientX })
      setVisible(true);
    }

    const changeVisible = (value: boolean) => {
        setVisible(value);
    }

    const addIcons = (value: IconsType) => {
        setIcons((prev) => [...prev,value])
    }

    const removeHandle = (index: string) => {
      return (event:MouseEvent<HTMLElement>) => {
        event.stopPropagation();

        setIcons((prev) => prev.filter(icon=>icon.class!==index))
      }
    }
  return (
    <div className={cnThreeIcons()} onClick={handleClick}>
        <Form 
            visible={visible} 
            top={coords.top} 
            left={coords.left} 
            addIcons={addIcons} 
            changeVisible={changeVisible}
        />
        {icons && icons.map((elem,index)=>
            <i 
            key={index} 
            id={elem.class}
            className={elem.class} 
            style={{
                position:"absolute",
                top: elem.top, 
                left: elem.left 
                }}
            onClick={removeHandle(elem.class)}
                >
                  
            </i>)
        }
    </div>
  )
}

export { ThreeIcons }