import React from 'react';

export default function useChangeVideo(e, setTitle, setHistory, name, url) {
  e && e.currentTarget.blur();
  if (e?.target?.files[0]?.path || url) {
    const thePath = !url && `file://${e.target.files[0]?.path}`;
    const filtered = !url && thePath.replace(/#/g, '%23');
    document.getElementById('videoPlayed').src = url ? url : filtered;
    if (setTitle) {
      setTitle(name ? name : e.target.files[0]?.name);
    }
    setHistory &&
      setHistory((prevState) => {
        if (prevState) {
          return [
            {
              name: e.target.files[0]?.name,
              url: filtered,
              date: Date.now(),
            },
            ...prevState,
          ];
        } else {
          return [
            {
              name: e.target.files[0]?.name,
              url: filtered,
              date: Date.now(),
            },
          ];
        }
      });
  }
  return;
}
