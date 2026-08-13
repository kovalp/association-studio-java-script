# Changelog

## 5.4.0

- Little refactoring of the reference box select control.

## 5.3.0

- Control size of the reference box via a select element in the main menu.
- Move the reset button to the main menu.

## 5.2.0

- Bar plot of current scores.

## 5.1.0

- Add the favicon.
- Consume chart.js directly from CDN, i.e. exclude it from the minified version.
- Change the page title to Association Studio.

## 5.0.0

- Add scatter plotting of the scores.

## 4.1.1

- Update dependencies.

## 4.1.0

- Chart visibility is saved/restored from local storage.

## 4.0.0

- Size-modulated Mahalanobis-based metric (two-yaw-iou-like)

## 3.0.0

- Add chart of the scores (line chart adding a point to GIoU and MAHA curves on every change.)
- Add checkbox "Show chart" in the main menu.

## 2.2.0

- Internal refactoring
- Cyan color for the self-biting arrow.
- Change default value of the yaw precision from 4 to 2.

## 2.1.0

- Version number in the About dialog.
- Fix the MAHA score-card.

## 2.0.0

- Added a waffle menu with:
    - a keyboard-shortcuts modal window to show the notes.
    - an "about" dialog to show the notes.

## 1.5.0

- Internal improvements:
    - Simplify the BoxUi
    - Use Frontend class
    - Use run function together with main function
    - Coverage is 100% with two explicitly omitted lines in `main.js`

## 1.4.0

- ScoreDriver class to diminish the `main.js`
- The explanatory panel does not overfill the whole window.
- Flex-start justify content in the top panel.

## 1.3.0

- Default value of size precision is 1 instead of 2.
- Using ctrl + arrows to change size instead of alt + arrows.
