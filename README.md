# React useEffect Infinite Loop Bug
This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly updating state within the effect.  The `bug.js` file contains the buggy code. The `bugSolution.js` file shows the corrected code. 

## Bug Description
The `useEffect` hook in `bug.js` attempts to increment the `count` state variable every time the component renders. This leads to an infinite loop, as each update triggers a re-render, which in turn triggers another update, and so on.

## Solution
The corrected code in `bugSolution.js` demonstrates the proper way to handle state updates within `useEffect` in this scenario. We use the `useRef` hook to avoid triggering additional renders. 
