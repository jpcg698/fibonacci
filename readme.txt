Hello, I am applying for a front end position but I do know some express and have made REST APIs before so here I go

To run write npm run start or node index.js and go to the specified port since Im assuming this is being run on localhost.
Then just add a number after the port like http://localhost:3000/3 to get that fibonacci number

There were not that many technichal decisions just a basic while loop chekcing to see if the the latest fibonacci number generated is the requested one.
Possible improvement would be to add a response code to the responses, specially if the user inputed a negative number or not a number at all.
Another improvement would be some dynamic programming, If I believe multiple users to be accesing this api I could store previously requested fibonacci numbers in a database.
is a user requested fibnacci number n I would look up if I have fibnacci number n-1 and n-2 and add them together, or just look far enough back to see the biggest
fiboacci number I already have and begin from there

The current solution is O(n) for time and O(1) for space, a dynamically programmed one would be better for time but worse for space.

Thanks for reading. I would be happy to answer any questions or have a face to face interiew.
