import React from 'react';

export default function useOverlay(text, position, status) {
  const obj = position
    ? document.getElementById(position)
    : document.getElementById('otheroverlay');
  if (status === true) {
    obj.innerHTML += text;
  } else if (status === 'replace') {
    obj.innerHTML = text;
  } else {
    obj.innerHTML = '';
  }
  return;
}
