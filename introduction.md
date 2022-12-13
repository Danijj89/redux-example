# React State Management
<font size="1">This is a demo inspired by Theo-t3.gg Youtube video "You still use Redux?". Watch the full video [here](https://www.youtube.com/watch?v=5-1LM2NySR0).</font>

## Agenda
1. Overview of React state
2. React Context + Reducer example (current state of our apps)
3. Redux
4. React Query + Zustand

## What is state?
Data that can change.

## What are the different states in React?

### Application State (State Machine)
These are states that mutates often and are mostly linked with user actions. Examples:
- Booleans like isOpen, isClosed, isDisabled, ...
- Form Values like textfield values, dropdown values, radio button selection, ...
- State trackers like currentPage, selectedSession, ...

### Server State (Client-Server State Synchronization)
These are state that hold the data that the client requests from the server. Examples:
- Any data that reside in the backend like calibration sessions, employees, job posts, ...
- State related to the data fetching like isLoading, isError, errorMessage, ...

Since this data belongs to the server (the client doesn't own it) and effectively represents the "state" of the server at that point in time, we refer to this as **server state**.

## Links
- [Redux](https://redux-toolkit.js.org/)
- [React Query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)
- [Zustand](https://github.com/pmndrs/zustand)
