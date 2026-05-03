
# Telephone Observer System

A simple JavaScript implementation of the **Observer Design Pattern** 
using a telephone system as a use case.

## How It Works
A `Telephone class` maintains a list of phone numbers and a list of observers.
Whenever a phone number is dialled, all registered observers are 
automatically notified and react in their own way.

## Classes
- **Telephone** — The main subject. Manages phone numbers and notifies observers
- **Observer** — The base contract every observer must follow
- **PrintNumberObserver** — Prints the dialled number
- **DialingObserver** — Prints "Now Dialling <number>"

## How To Run
```bash
node telephoneDesignPattern.js
```

## Concepts Demonstrated
- Observer Design Pattern
- Class Inheritance
- Encapsulation