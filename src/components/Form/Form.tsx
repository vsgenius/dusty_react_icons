import React from 'react';
import { cnForm } from './Form.classname';
import type { FC } from 'react';
import { Icon } from '../Icon/Icon';
import type { IconsType } from '../ThreeIcons'

import './Form.css';

type FormProps = {
  visible: boolean;
  top: number;
  left: number;
  addIcons: (icon: IconsType) => void;
  changeVisible: (value: boolean) => void;
};

const Form: FC<FormProps> = ({ visible, top, left, addIcons, changeVisible }) => {
  const handleClick = (event: any) => {
    event.stopPropagation();
    addIcons({ 
      class: event.target.className,
      top: top, 
      left: left 
    });
    changeVisible(false);
  };
  return (
    <div
      className={cnForm()}
      style={{ 
        display: visible ? 'block' : 'none', 
        top: top, 
        left: left 
    }}
    >
      <div>
        <p>Выберите иконку</p>
      </div>
      <div className={cnForm('Icons')} onClick={handleClick}>
        <Icon />
      </div>
    </div>
  );
};

export { Form };
