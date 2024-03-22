
class contact {
    name : string ; 
    email : string ;
    phone : number | string ;
 
  constructor (name:string , email:string , phone:number | string ){
    this.name = name;
    this.email = email;
    this.phone = phone;

  }
}

class AddressBook {
    contacts: Array<any> = [];

    addContact(contact:any) {
        const emailRegex:any= /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
        if (!emailRegex.test(contact.email)) {
            throw new Error("Invalid email format");
        }
        if (!contact.name || contact.name.trim()=== "") {
            throw new Error("Name cannot be empty"); 
        }
        this.contacts.push(contact);
    }

    findContactByName (name:string) {
        return this.contacts.filter((contact)=>
        contact.name === name);
    }
    filterByGroup(group: string | number){
        return this.contacts.filter((contact) =>
        contact.group === group);
    }
    sortByName () {
        this.contacts.sort((a:any , b:any) =>
        a.name.localeCompare(b.name));
    }


    searchContacts(searchTerm:string) {
        const normalaizedSearchTerm:any= searchTerm.toLowerCase();
        return this.contacts.filter((contact) => 
        contact.name.toLowerCase().includes(normalaizedSearchTerm));
    }
    printContacts(){
        for (const contact of this.contacts){
            console.log(`Name:${contact.name}`);
            console.log(`Email:${contact.email}`);
            console.log(`Phone: ${contact.phone}`);
            console.log("------")
        }
    }
}

const addressBook = new AddressBook ();

const contact1 = new contact ("John Doe" , "johndoe@email.com" , "123-012-3456");
const contact2 = new contact ("Alice Smith" , "alice.smith@email.com" , "456-012-3456");
const contact3 = new contact ("" , "valid@email.com" , "789-012-3456");

addressBook.addContact(contact1);

try {
    addressBook.addContact(contact2);
    addressBook.addContact(contact3);
} catch (error:any){
    console.error("Error adding contact:", error.message);   
}

console.log("Contacts:");
addressBook.printContacts();


const searchResults = addressBook.searchContacts("john");
console.log("Search results (name containing 'john'):");
searchResults.forEach((contact) =>
console.log(`-${contact.name}`));
