var contact = /** @class */ (function () {
    function contact(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    return contact;
}());
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        this.contacts = [];
    }
    AddressBook.prototype.addContact = function (contact) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(contact.email)) {
            throw new Error("Invalid email format");
        }
        if (!contact.name || contact.name.trim() === "") {
            throw new Error("Name cannot be empty");
        }
        this.contacts.push(contact);
    };
    AddressBook.prototype.findContactByName = function (name) {
        return this.contacts.filter(function (contact) {
            return contact.name === name;
        });
    };
    AddressBook.prototype.filterByGroup = function (group) {
        return this.contacts.filter(function (contact) {
            return contact.group === group;
        });
    };
    AddressBook.prototype.sortByName = function () {
        this.contacts.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    };
    AddressBook.prototype.searchContacts = function (searchTerm) {
        var normalaizedSearchTerm = searchTerm.toLowerCase();
        return this.contacts.filter(function (contact) {
            return contact.name.toLowerCase().includes(normalaizedSearchTerm);
        });
    };
    AddressBook.prototype.printContacts = function () {
        for (var _i = 0, _a = this.contacts; _i < _a.length; _i++) {
            var contact_1 = _a[_i];
            console.log("Name:".concat(contact_1.name));
            console.log("Email:".concat(contact_1.email));
            console.log("Phone: ".concat(contact_1.phone));
            console.log("------");
        }
    };
    return AddressBook;
}());
var addressBook = new AddressBook();
var contact1 = new contact("John Doe", "johndoe@email.com", "123-012-3456");
var contact2 = new contact("Alice Smith", "alice.smith@email.com", "456-012-3456");
var contact3 = new contact("", "valid@email.com", "789-012-3456");
addressBook.addContact(contact1);
try {
    addressBook.addContact(contact2);
    addressBook.addContact(contact3);
}
catch (error) {
    console.error("Error adding contact:", error.message);
}
console.log("Contacts:");
addressBook.printContacts();
var searchResults = addressBook.searchContacts("john");
console.log("Search results (name containing 'john'):");
searchResults.forEach(function (contact) {
    return console.log("-".concat(contact.name));
});
