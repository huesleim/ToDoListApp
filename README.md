## Todo List App

A small, framework-free Todo List application built with modern JavaScript. The focus of this project is clean state management, simple sorting logic, and DOM rendering without external libraries.

## Overview

The app allows users to create todos with a name, optional due date, and optional description. Todos are automatically ordered by due date, can be marked as completed, deleted, and are persisted using `localStorage`.

This project is intentionally minimal and designed as a learning exercise or portfolio piece rather than a full-featured task manager.

## Key Concepts

* **Plain JavaScript**: No frameworks or build tools
* **State-driven rendering**: The UI reflects the current state of the `todoList` array
* **Automatic sorting**: Todos with earlier due dates appear first
* **Persistence**: Todos are saved and restored using `localStorage`

## How It Works

* Each todo is created as a plain object with a unique ID, metadata, and a completion flag
* New todos are inserted into the list at the correct position based on due date
* The list is fully re-rendered whenever state changes
* Completion and deletion update the state directly, then trigger a re-render
* Todos are serialized and stored in the browser using `localStorage`. On page load, saved todos are restored and rendered automatically.


