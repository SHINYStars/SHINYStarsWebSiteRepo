const mongoose = require('mongoose');

const User = require("./user/user")

//Non-Profit Organization
const Organization = require('../models');

// Below is an example of a method that seeds your database
// Customize it to fit your needs, and execute it by calling it on a custom route
// Make sure to create your schemas and plug them in - this code won't work!
exports.seedDb = () => {

    try {
        Organization.insertMany([
            { _id: new mongoose.Types.ObjectId(), orgName: "npo1", website: "hhtp://website.com", address1: "123 North St", address2: "Suite A", city: "Walnut Creek", state: "CA", country: "USA", zip: "54597", phoneNumber: "123 456 789", email: "someone@email.com" },
            { _id: new mongoose.Types.ObjectId(), orgName: "npo1", website: "hhtp://website.com", address1: "123 North St", address2: "Suite A", city: "Walnut Creek", state: "CA", country: "USA", zip: "54597", phoneNumber: "123 456 789", email: "someone@email.com" },
            { _id: new mongoose.Types.ObjectId(), orgName: "npo1", website: "hhtp://website.com", address1: "123 North St", address2: "Suite A", city: "Walnut Creek", state: "CA", country: "USA", zip: "54597", phoneNumber: "123 456 789", email: "someone@email.com" },
            { _id: new mongoose.Types.ObjectId(), orgName: "npo1", website: "hhtp://website.com", address1: "123 North St", address2: "Suite A", city: "Walnut Creek", state: "CA", country: "USA", zip: "54597", phoneNumber: "123 456 789", email: "someone@email.com" },
            { _id: new mongoose.Types.ObjectId(), orgName: "npo1", website: "hhtp://website.com", address1: "123 North St", address2: "Suite A", city: "Walnut Creek", state: "CA", country: "USA", zip: "54597", phoneNumber: "123 456 789", email: "someone@email.com" }
        ]).then((organizations) => console.log('Organizations added to DB!', organizations));

    } catch (e) {
        console.log(e);
    }
}