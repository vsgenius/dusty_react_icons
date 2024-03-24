import React from 'react';
import { cnForm } from './Form.classname';
import type { Dispatch, FC, SetStateAction } from 'react';
import { Icon } from '../Icon/Icon';
import type { IconsType } from '../../App'

import './Form.css';

type FormProps = {
  visible: boolean;
  top: number;
  left: number;
  setIcons: Dispatch<SetStateAction<IconsType[]>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const Form: FC<FormProps> = ({ visible, top, left, setIcons, setVisible }) => {

  const handleClick = (event: any) => {
    event.stopPropagation();
    const target = event.target;

    setIcons((prev: any) => [
      ...prev,
      { class: target.className,
        top: top, 
        left: left 
    },
    ]);

    setVisible(false);
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
