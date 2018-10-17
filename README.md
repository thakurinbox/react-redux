# CalendarDay Component

## Part I

You need to create a React component for a single Calendar Day. Each day needs to represent 9AM to 9PM. A day can have multiple appointments, some of which might overlap. The goal is to display these appointments at the right time, and handle overlaps gracefully. 

There are 2 major constraints on how to decide the width of an appointment:
- Every colliding appointment must be the same width as every other appointment that it collides with.
- An appointment should use the maximum width possible while still adhering to the first constraint.

![alt text](src/assets/images/example.png?raw=true "Example Calendar")

The component will accept a prop called appointments - which will be an array of appointment objects with the start and end times of the event. For example, 

```
[{id : 1, start : 60, end : 120},  // an event from 10am to 11am 
{id : 2, start : 100, end : 240}, // an event from 10:40am to 1pm 
{id : 3, start : 700, end : 720}]  // an event from 8:40pm to 9pm

```

### UI Specification

The width of the component will be 620px (10px padding on either side) and the height will be 720px (1 pixel for every minute between 9am and 9pm). Appointments should be laid out so that they do not visually overlap with each other. If there is only one appointment at a given time slot, its width should be 600px.

## Part II

Use the component from Part I to create a day view with the following appointments:

- An event that starts at 9:45am and ends at 11:15am
- An event that starts at 6:10pm and ends at 7:00pm
- An event that starts at 6:30pm and ends at 7:30pm
- An event that starts at 7:05pm and ends at 8:05pm
