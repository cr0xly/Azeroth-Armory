# Azeroth Armory

A World of Warcraft Classic Era character roster application built using React, TypeScript and CSS.

## About

This is a personal project I'm working on to get more comfortable with React and TypeScript, especially components, props, useState and event handling.

The idea is to make a simple character roster (inspired by the original WoW Armory) where you can view characters, create new ones and manage existing ones.

I'll also be including comments throughout the project to explain new concepts as I learn them, since this is ultimately a learning experience.

## Current Progress

* Created the React + TypeScript project using Vite and connected the GitHub repository.
* Created `data.ts` with the character data, class information and starting characters.
* Created `Card.tsx` to display the information for an individual character.
* Created `CardContainer.tsx` to generate a card for each character using `.map()`.
* Added class-specific text colors and icons using `.find()` to match character classes with their associated information.
* Added race portraits using a `Record<string, string>` object to associate each race with its image.
* Styled the character cards using `CSS`, including Flexbox layouts, borders and semi-transparent backgrounds.
* Added a responsive card layout using `flex-wrap` so the roster adjusts when the browser window changes size.

## Technologies Used
* **React** — Building reusable components and displaying character information.
* **TypeScript** — Using interfaces to define the structure of character and class data.
* **CSS** — Styling the character cards, images and roster layout.
* **Vite** — Setting up and running the React development environment.

## Planned Features
* Add buttons to increase or decrease character levels, with a maximum level of 60.
* Create a character creation form with options for race, class and specialization.
* Allow users to add new characters to the roster.
* Allow users to delete existing characters.

*This project is still a work in progress. I'm building it gradually as I learn more about React and TypeScript.*