export const settingsStyles = /* css */ `
.settings {
  z-index: 1;
}
.settings--visible .settings__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.simple-bar--floating .settings--visible .settings__overlay,
.simple-bar--no-bar-background .settings--visible .settings__overlay {
  display: none;
}
.simple-bar--on-bottom  .settings--visible .settings__overlay {
  top: unset;
  bottom: 28px;
}
.settings__outer {
  position: fixed;
  left: calc(50% - 320px);
  top: 38px;
  width: 640px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 20px;
  background-color: var(--main);
  border-radius: 4px;
  box-shadow: var(--light-shadow);
  opacity: 0;
  transform: translate(0, -50px) scale(0.8);
  pointer-events: none;
  touch-action: none;
  transition: opacity 160ms var(--transition-easing), transform 160ms var(--transition-easing);
  z-index: 1;
}
.simple-bar--floating .settings__outer {
  top: 43px;
}
.simple-bar--on-bottom  .settings__outer {
  top: unset;
  bottom: 38px;
  transform: translate(0, 50px) scale(0.8);
}
.settings--visible .settings__outer {
  pointer-events: auto;
  touch-action: auto;
  opacity: 1;
  transform: none;
}
.settings__header {
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  font-size: calc(var(--font-size) * 1.4);
  font-weight: 700;
}
.settings__close {
  width: 10px;
  height: 10px;
  margin-left: auto;
  fill: var(--foreground);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
}
.settings__tabs {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
}
.settings__tab {
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px;
  font-family: var(--font);
  font-size: var(--font-size);
  color: var(--foreground);
  text-align: center;
  background-color: transparent;
  border-radius: 3px;
  border: 0;
  outline: none;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  transition: color 160ms var(--transition-easing), background-color 160ms var(--transition-easing),
    box-shadow 160ms var(--transition-easing);
}
.settings__tab:hover {
  box-shadow: var(--hover-ring);
}
.settings__tab:active {
  box-shadow: var(--focus-ring);
}
.settings__tab:not(:last-of-type) {
  margin-right: 10px;
}
.settings__tab--current {
  color: var(--background);
  background-color: var(--foreground);
}
.settings__inner {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  overflow: hidden;
}
.settings__category {
  flex: 0 0 100%;
  display: flex;
  flex-wrap: wrap;
  transition: transform 160ms var(--transition-easing);
}
.settings__inner-title {
  flex: 0 0 100%;
  margin-bottom: 10px;
  font-size: calc(var(--font-size) * 1.2);
  font-weight: 700;
}
.settings__item-title {
  flex: 0 0 100%;
  margin: 8px 0;
  font-weight: 700;
}
.settings__item,
.settings__item-option {
  flex: 0 0 33.33%;
  margin-bottom: 5px;
}
.settings__item--full-width {
  flex: 1 1 100%;
  display: flex;
  align-items: center;
  margin-right: 3px;
}
.settings__item--radio {
  flex: 0 0 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0;
}
.settings__item > label,
.settings__item-option > label {
  margin-left: 8px;
}
.settings__item--text > label {
  margin-left: 0;
  margin-right: 8px;
}
.settings__item--textarea {
  flex-direction: column;
  align-items: stretch;
  padding: 5px;
}
.settings__item--full-width.settings__item--text > label,
.settings__item--full-width.settings__item--textarea > label {
  flex: 1 1 auto;
  white-space: nowrap;
}
.settings__item--text > input,
.settings__item--textarea > textarea {
  width: auto;
  padding: 2px 4px;
  box-sizing: border-box;
  font-family: var(--font);
  font-size: calc(var(--font-size) * 0.9);
  border: 0;
  outline: none;
  border-radius: 4px;
  transition: box-shadow 160ms var(--transition-easing), opacity 160ms var(--transition-easing);
}
.settings__item--textarea > textarea {
  resize: vertical;
}
.settings__item--full-width.settings__item--text > input
.settings__item--full-width.settings__item--textarea > textarea {
  flex: 1 1 100%;
}
.settings__item--text > input:hover,
.settings__item--textarea > textarea:hover {
  box-shadow: var(--hover-ring);
}
.settings__item--text > input:focus,
.settings__item--textarea > textarea:focus {
  box-shadow: var(--focus-ring);
}
.settings__infos {
  width: 100%;
  margin-top: 5px;
  padding: 10px;
  color: var(--black);
  background-color: var(--white);
  border-radius: 5px;
}
.settings__infos-title {
  margin-bottom: 7px;
  font-size: calc(var(--font-size) * 1.1);
  font-weight: 700;
}
.settings__info {
  font-style: italic;
}
.settings__bottom {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
}
.settings__pending-changes {
  margin: 0 10px;
}
.settings__refresh-button,
.settings__import-button,
.settings__export-button {
  padding: 7px 10px;
  font-family: var(--font);
  font-size: calc(var(--font-size) * 0.9);
  border-radius: var(--item-radius);
  border: 0;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  transition: box-shadow 160ms var(--transition-easing), opacity 160ms var(--transition-easing);
}
.settings__import-button,
.settings__export-button {
  margin-right: 10px;
  color: var(--foreground);
  background-color: var(--minor);
}
.settings__export-button {
  margin-left: 10px;
}
.settings__refresh-button {
  background-color: var(--green);
}
.settings__refresh-button:not(:disabled),
.settings__import-button:not(:disabled),
.settings__export-button:not(:disabled) {
  box-shadow: var(--light-shadow);
}
.settings__refresh-button:not(:disabled):hover,
.settings__import-button:not(:disabled):hover,
.settings__export-button:not(:disabled):hover {
  box-shadow: var(--light-shadow), var(--focus-ring);
}
.settings__refresh-button:disabled,
.settings__import-button:disabled,
.settings__export-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.settings__import-export-label {
  margin-right: auto;
}
`
