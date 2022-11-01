import React from 'react';
import useOverlay from './useOverlay';

export default function useVolume(e) {
  let currentTop =
    e?.currentTarget?.getBoundingClientRect().y - e?.currentTarget?.clientWidth;
  let currentLeft =
    e?.currentTarget?.getBoundingClientRect().x +
    e?.currentTarget?.clientWidth / 2;

  const object = document.getElementById('otherOverlay');

  const words = `
  <div class="volume-rocker" style="top: ${currentTop}px; left: ${currentLeft}px">
  <div class="volume-bar">
  <span class="volume-button"></span>
  <span class="volume-length"></span>
  </div>
  </div>
  `;

  if (object?.innerHTML) {
    useOverlay(words, 'otherOverlay', false);
  } else {
    useOverlay(words, 'otherOverlay', 'replace');
  }

  return;
}
