"use client";

import { useAppContext } from "@/contexts/AppContext";
import { useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ isOpen, onClose }: ModalProps) {
  const { isBackgroundMusicOn, setBackgroundMusicOn } = useAppContext();
  const { isScareMode, setScareMode } = useAppContext();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal__title | glitch-font">Midnighthours</h2>
        <button onClick={onClose} className="modal__close-btn">
          ✕
        </button>
        <div className="modal__settings">
          <label className="toggle" htmlFor="settings__bg-music">
            Background music:
            <input
              type="checkbox"
              className="toggle__checkbox"
              id="settings__bg-music"
              checked={isBackgroundMusicOn}
              onChange={(e) => setBackgroundMusicOn(e.target.checked)}
            />
          </label>
          <label className="toggle" htmlFor="settings__scare-mode">
            'Scare Me' mode:
            <input
              type="checkbox"
              className="toggle__checkbox"
              id="settings__scare-mode"
              checked={isScareMode}
              onChange={(e) => setScareMode(e.target.checked)}
            />
          </label>
        </div>
        <hr className="modal__horizontal-line" />
        <p>
          Midnight is a website that only works at midnight from 12:00 am to
          5:00 am. You can also access it once per day. Other times, it will
          closed for access. Built by Technophile. You can also watch the video
          on YouTube.
        </p>
        <div className="modal__footer">
          <a
            className="modal__link"
            href="https://github.com/technoph1le/midnighthours"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Contribute on</span>
            <img src="/assets/github.svg" alt="GitHub" />
          </a>
          <div className="modal__vertical-line"></div>
          <a
            className="modal__link"
            href="https://ko-fi.com/technoph1le"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Support the project</span>
            <img src="/assets/support.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
