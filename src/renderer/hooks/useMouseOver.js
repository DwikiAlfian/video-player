import React from 'react';

export default function useMouseOver(e, text, pos, lock) {
  const obj = document.getElementById('mouseTooltip');
  const words = `
    
    <div class="mouse-tooltip ${pos}" style="top: ${
    lock === 'y' ? e?.currentTarget?.getBoundingClientRect().y : e?.pageY
  }px; left: ${
    lock === 'x' ? e?.currentTarget?.getBoundingClientRect().x : e?.pageX
  }px;">
          ${text}
      </div>

    `;

  const changePos = () => {
    obj.innerHTML = words;
  };

  e.currentTarget.addEventListener('mouseleave', () => {
    obj.innerHTML = '';
  });

  obj.addEventListener('mousemove', changePos(), false);
  obj.addEventListener('mouseenter', changePos(), false);
  obj.addEventListener('mouseleave', changePos(), false);
  obj.addEventListener('mouseover', changePos(), false);
  return;
}
