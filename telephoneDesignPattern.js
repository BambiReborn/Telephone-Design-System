

// 1. TELEPHONE CLASS

class Telephone {
    constructor() {
        // Constructor first, to run them automatically
        this.phoneNumbers = [];
        this.observers = [];
    }


    // --- PHONE NUMBER METHODS ---

    AddPhoneNumber(number) {
        // Adds a new phone number to the contact list
        this.phoneNumbers.push(number);
        console.log(`${number} added.`);
    }

    RemovePhoneNumber(number) {
        // First checks if the number actually exists before removing
        if (this.phoneNumbers.includes(number)) {
            // filter() keeps every number asides the one to remove
            this.phoneNumbers = this.phoneNumbers.filter(n => n !== number);
            console.log(`${number} removed.`);
        } else {
            // Number wasn't in the list — let the user know
            console.log(`${number} not found.`);
        }
    }

    DialPhoneNumber(number) {
        // Only numbers that have been added can be dialled
        if (this.phoneNumbers.includes(number)) {
            // Number exists — notify all observers
            this.notifyObservers(number);
        } else {
            // Number was never added — block the call
            console.log(`Cannot dial ${number}. Not in contacts.`);
        }
    }


    // OBSERVER METHODS

    addObserver(observer) {
        // Registers a new observer to the list
        this.observers.push(observer);
    }

    removeObserver(observer) {
        // Removes an observer from the list
        // The 'filter ()' keyword removes what we don't want
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(phoneNumber) {
        // Loops through every observer and calls their update() method
        
        this.observers.forEach(observer => observer.update(phoneNumber));
    }

}





// 2. BASE OBSERVER CLASS

class Observer {
    update(phoneNumber) {
        // Throws an error if a child class forgets to implement update()
        throw new Error("update() method must be implemented by subclass");
    }
}




// 3. OBSERVER 1 — Prints the phone number

class PrintNumberObserver extends Observer {
    update(phoneNumber) {
        // Simply prints the number
        console.log(phoneNumber);
    }
}



// 4. OBSERVER 2 — Prints "Now Dialling..."

class DialingObserver extends Observer {
    update(phoneNumber) {
        // Prints a formatted message using a template literal
        console.log(`Now Dialling ${phoneNumber}`);
    }
}



// 5. WIRING IT ALL TOGETHER


// Create the telephone object from the Telephone blueprint
const phone = new Telephone();

// Create one of each observer
const observer1 = new PrintNumberObserver();
const observer2 = new DialingObserver();

// Register both observers with the telephone
phone.addObserver(observer1);
phone.addObserver(observer2);



// 6. TESTING

// Add two phone numbers to the contact list
phone.AddPhoneNumber("2347023232");
phone.AddPhoneNumber("2348011111");

console.log("---");

// Dial a number that exists
phone.DialPhoneNumber("2347023232");

console.log("---");

// Try to dial a number that was NEVER added, it should be blocked
phone.DialPhoneNumber("0000000000");

console.log("---");

// Remove a number and try to dial it again
phone.RemovePhoneNumber("2347023232");
phone.DialPhoneNumber("2347023232");

