# trip-countdown

## Description

A countdown timer to a specified trip date. Additionally, it includes functionality for playing background audio and changing the heading when the countdown reaches zero.

## Functionality

### Countdown Timer (tripCountdown function)
The tripCountdown function calculates the remaining time until the specified trip date.
It updates the HTML elements with class names 'days', 'hours', 'minutes', and 'seconds' to display the countdown.
When the countdown reaches zero, it calls the happySkiing function, stops the countdown timer, and logs the timer ID.
### Happy Skiing (happySkiing function)
Changes the heading text to "Happy Skiing!" and adds the 'animate' class for a visual effect.
### Audio Control
Clicking the "Play Audio" button starts playing the audio specified in the <audio> tag.
Clicking the "Pause Audio" button pauses the audio playback.
### Note
By default, the "Pause Audio" button is disabled until the "Play Audio" button is clicked.

## Code Structure

- `index.html`: Main HTML file.
- `styles.css`: Stylesheet for the application.
- `index.js`: JavaScript file containing the logic for the countdown.

## Technologies Used

- HTML
- CSS
- JavaScript

## Demo

[View Demo](https://ski-trip-countdown.glitch.me/)


