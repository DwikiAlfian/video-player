import React from 'react';

export default function useChangeVideo(
  e,
  setTitle,
  setCurrentUrl,
  setHistory,
  name,
  url
) {
  e && e.currentTarget.blur();
  if (e?.target?.files[0]?.path || url) {
    const thePath = !url && `file://${e.target.files[0]?.path}`;
    const filtered = !url && thePath.replace(/#/g, '%23');
    document.getElementById('videoPlayed').src = url ? url : filtered;
    if (setTitle) {
      setTitle(name ? name : e.target.files[0]?.name);
    }
    if (setCurrentUrl) {
      setCurrentUrl(url ? url : e.target.files[0]?.path);
    }

    const date = new Date(Date.now()).getDate();
    const month = new Date(Date.now()).getMonth();
    const year = new Date(Date.now()).getFullYear();

    const fullTime = `${month}/${date}/${year}`;

    setHistory &&
      setHistory((prevState) => {
        const result = {
          [fullTime]: [
            {
              name: name ? name : e.target.files[0]?.name,
              url: url ? url : e.target.files[0]?.path,
            },
          ],
        };
        if (prevState) {
          if (prevState[fullTime]) {
            prevState[fullTime].splice(0, 0, {
              name: name ? name : e.target.files[0]?.name,
              url: url ? url : e.target.files[0]?.path,
            });
            return prevState;
          } else {
            const addedYear = {
              [fullTime]: [
                {
                  name: name ? name : e.target.files[0]?.name,
                  url: url ? url : e.target.files[0]?.path,
                },
              ],
              ...prevState,
            };
            return addedYear;
          }
        } else {
          return result;
        }
      });
  }
  return;
}
