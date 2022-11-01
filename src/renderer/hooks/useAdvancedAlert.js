import React from 'react';
import CirclePause from '../assets/icons/circle-pause.svg';

// Font Awesome Free 6.2.0 by @fontawesome -
// https://fontawesome.com License - https://fontawesome.com/license/free
// (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc.

export default function useAdvancedAlert(type, text, sub) {
  const obj = document.getElementById('advancedAlert');

  const primaryIcons = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path d="M200 160C186.8 160 176 170.8 176 184v144C176 341.3 186.8 352 200 352S224 341.3 224 328v-144C224 170.8 213.3 160 200 160zM312 160C298.8 160 288 170.8 288 184v144c0 13.25 10.75 24 24 24s24-10.75 24-24v-144C336 170.8 325.3 160 312 160zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z" />
  </svg>
  `;

  const successIcons = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
  <path d="M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
  </svg>
  `;

  const dangerIcons = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
  <path d="M328 160h-144C170.8 160 160 170.8 160 184v144C160 341.2 170.8 352 184 352h144c13.2 0 24-10.8 24-24v-144C352 170.8 341.2 160 328 160zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/>
  </svg>
  `;

  const words = `
    <div class="advanced-alert alert-${
      type === 'primary'
        ? `primary`
        : type === 'success'
        ? `success`
        : type === 'danger'
        ? `danger`
        : ''
    }">
        ${type === 'primary' ? primaryIcons : ''}
        ${type === 'success' ? successIcons : ''}
        ${type === 'danger' ? dangerIcons : ''}
        <div class="flex-column">
        
        <span class="span-text" style="font-size: 0.9rem">
            ${text}
        </span>
        ${
          sub
            ? `<span class="span-text span-text-alt">
        ${sub}
    </span>`
            : ``
        }
        </div>
    </div>
    `;
  obj.innerHTML = words;
  return;
}
