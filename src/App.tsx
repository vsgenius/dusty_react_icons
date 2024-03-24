import React, { useState } from 'react';
import type { MouseEvent } from 'react';

import  {Form} from './components/Form/Form';
import './App.css';

export type IconsType = {
  class:string;
  top:number;
  left:number;
}

function App() {
  const [coords, setCoords] = useState({top:0,left:0});
  const [visible, setVisible] = useState(false);
  const [icons, setIcons] = useState<IconsType[]>([]);

  const handleClick = (event:MouseEvent<HTMLDivElement>)=>{

    setCoords({top:event.clientY,left:event.clientX})
    setVisible(true);

  }
  return (
    <div className="App">
      <header 
          className="App-header" 
          onClick={handleClick}>
        <Form 
        visible={visible} 
        top={coords.top} 
        left={coords.left} 
        setIcons={setIcons} 
        setVisible={setVisible}/>
        {icons && icons.map((elem,index)=>
          <i 
          key={index} 
          className={elem?.class} 
          style={{
            position:"absolute",
            top: elem.top, 
            left: elem.left 
            }}>

            </i>)}
      </header>
    </div>
  );
}

export default App;
