# React useEffect accessing previous state

This repository demonstrates a common error in React's `useEffect` hook where the effect function attempts to access a previous state value without proper handling of asynchronous operations.  The example showcases how this can lead to unexpected behavior and how to fix the issue.

## Bug

The `bug.js` file contains a component that increments a counter. The `useEffect` hook attempts to log the previous count, leading to incorrect output when the state rapidly changes. 

## Solution

The `bugSolution.js` file provides a corrected version where the state value is accessed reliably.