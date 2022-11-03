import React, { useEffect, useState } from 'react';
import { HiPlay, HiPause, HiVolumeUp } from 'react-icons/hi';
import { BsStopCircleFill } from 'react-icons/bs';
import { CgChevronDoubleLeftO, CgChevronDoubleRightO } from 'react-icons/cg';
import { MdFullscreen } from 'react-icons/md';
import useTooltip from 'renderer/hooks/useTooltip';
import useMouseOver from 'renderer/hooks/useMouseOver';
import useAdvancedAlert from 'renderer/hooks/useAdvancedAlert';
import useVolume from 'renderer/hooks/useVolume';

export default function PlayerControls({
  length,
  setLength,
  currentTime,
  setCurrentTime,
  seekTime,
  setSeekTime,
  setTimeInterval,
  videoPlayer,
  playVid,
  pauseVid,
  stopVid,
  seekTimeHandler,
  dragControlHandler,
  mouseEnterHandler,
  mouseLeaveHandler,
}) {
  const ipcRenderer = window.require('electron')?.ipcRenderer;

  // Fullscreen Window Function
  const fullscreenWindow = () => {
    ipcRenderer?.invoke('fullscreen-event');
  };
  return (
    <>
      <div
        className="player-controls-container"
        onMouseOver={(e) => {
          mouseEnterHandler(e);
        }}
      >
        <div className="player-controls">
          <div className="player-inline">
            <span className="player-time">
              {currentTime < 3600
                ? new Date(currentTime * 1000).toISOString().substring(14, 19)
                : currentTime > 3600
                ? new Date(currentTime * 1000).toISOString().substring(11, 19)
                : '--:--'}
            </span>
            <div
              className="drag-control"
              onClick={(e) => {
                dragControlHandler(e);
              }}
              onMouseMove={(e) => {
                // e.currentTarget.cli
                useMouseOver(
                  e,
                  seekTime < 3600
                    ? new Date(seekTime * 1000).toISOString().substring(14, 19)
                    : seekTime > 3600
                    ? new Date(seekTime * 1000).toISOString().substring(11, 19)
                    : '--:--',
                  'center',
                  'y'
                );
                seekTimeHandler(e);
              }}
            >
              <div
                className="drag-control-bar"
                style={{
                  width: length ? `${(currentTime / length) * 100}%` : '0%',
                }}
              ></div>
              <span
                className="button button-bar"
                style={{
                  left: length ? `${(currentTime / length) * 100}%` : '0%',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              ></span>
            </div>
            <span className="player-time">
              {length < 3600
                ? new Date(length * 1000).toISOString().substring(14, 19)
                : length > 3600
                ? new Date(length * 1000).toISOString().substring(11, 19)
                : '--:--'}
            </span>
          </div>
        </div>
        <div
          className="player-controls player-between"
          style={{ paddingTop: 15, paddingBottom: 15 }}
        >
          <div
            className="button"
            onClick={() => {
              fullscreenWindow();
            }}
            onMouseEnter={(e) => {
              useTooltip(e, 'Fullscreen (F11)');
            }}
          >
            <MdFullscreen size={18} />
          </div>
          <div className="flex-inline gap-5 player-center">
            <div
              className="button"
              onClick={() => {
                pauseVid();
              }}
              onMouseEnter={(e) => {
                useTooltip(e, 'Pause video');
              }}
            >
              <HiPause size={17} />
            </div>
            <div
              className="button button-big"
              onClick={() => {
                playVid();
              }}
              onMouseEnter={(e) => {
                useTooltip(e, 'Play video');
              }}
            >
              <HiPlay size={28} />
            </div>
            <div
              className="button"
              onClick={() => {
                stopVid();
              }}
              onMouseEnter={(e) => {
                useTooltip(e, 'Stop video');
              }}
            >
              <BsStopCircleFill size={15} />
            </div>
          </div>
          <div
          // onClick={(e) => {
          //   useVolume(e);
          // }}
          >
            <div className="button button-off">
              <HiVolumeUp size={14} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
