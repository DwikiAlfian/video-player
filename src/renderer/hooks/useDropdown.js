import React from 'react';
import useOverlay from './useOverlay';

export default function useDropdown(e, list) {
  let currentTop =
    e?.currentTarget?.getBoundingClientRect().y + e?.currentTarget?.clientWidth;
  let currentLeft =
    e?.currentTarget?.getBoundingClientRect().x +
    e?.currentTarget?.clientWidth / 2;

  const object = document.getElementById('dropdown');

  // let status = false;

  // const event = () => {
  //   console.log('CLICKED');
  //   status = !status;
  // };

  // document.addEventListener('scroll', event(), true);

  // setTimeout(() => {
  //   document.addEventListener('click', () => {
  //     document.removeEventListener('scroll', event(), false);
  //     useOverlay('', 'dropdown', false);
  //   });
  // }, 50);
  // console.log(list);
  const words = `
  <div>
  <div id="elementDropdown" class="element-dropdown" style="top: ${currentTop}px; left: ${currentLeft}px">
  </div>
  </div>
  `;

  if (object?.innerHTML) {
    useOverlay(words, 'dropdown', false);
  } else {
    setTimeout(() => {
      list.map((lists) => {
        return useOverlay(
          `
        <a onclick="(function(){window.location.href= '${lists?.link}'})()" class="span-text">
          ${lists?.name}
        </a>
        `,
          'elementDropdown',
          true
        );
      });
    }, 50);
    useOverlay(words, 'dropdown', 'replace');
  }

  return;
}
