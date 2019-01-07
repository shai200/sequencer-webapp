TO TEST THE BACKEND:

cd to server directory

npm install

npm test


TO RUN:

node server.js 

Then navigate to http://localhost:8081

NOTES

ARCHITECTURE 

In the interest of time, decision to KISS (Keep It Simple, Sister/Smartypants/Serenader).

So, I've decided to usd a boilerplate vuejs-node-express for a full backend and frontend mvc stack

The backend is going to be RESTful

So that the frontend can be implemented with intechangeably vuejs/react/any other js framework.

WHAT'S IMPLEMENTED ON THE BACKEND:

- generators
- piped sequence
- restful api with endpoints for:
 1. The generators
 2. 2 piped sequence examples: one with accumulator, the other with iseven
 
 What's yet implemented
   
 On the backend, more endpoints need to be done for piped sequence generators for each sequence.
 
 On the frontend, an ajax call mechanism to interact with the restful interface, implement all the "Next" buttons for each sequence and show them nicely on the screen; also, generate an error whenever a sequence runs out of values.
