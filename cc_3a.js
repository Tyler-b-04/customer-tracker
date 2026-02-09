let customers = [
    {
    name: "Devon Turn",
    email: "turn_devon@gmail.com",
    purchases: ["4k monitor", "RGB Keyboard", "Large Mousepad"],
    },
    {
    name: "Sebastian Rod",
    email: "seabass.rod@gmail.com",
    purchases: ["Headset with Mic"],
    },
    {
    name: "Tyler Brem",
    email: "ty_brem@gmail.com",
    purchases: ["Laptop Case", "Small Mousepad"],
    },
];

console.log("~~~ New Customer List ~~~")
console.log(customers);

customers.push({
    name: "Connor Garry",
    email: "big_cg@gmail.com",
    purchases: ["RGB Keyboard"],
});
console.log("\nAdded new customer (push): Connor Garry");

let removedCustomer = customers.shift();
console.log(`Removed first customer (shift): ${removedCustomer.name}`);

customers.forEach((c) => {
    if (c.name = "Sebastian Rod") {
        c.email = "sebastian.rod@gmail.com";
    }
});
console.log("\nUpdated email for Sebastian Rod");

customers.forEach((c) => {
    if (c.name = "Tyler Brem") {
        c.purchases.push("Wireless Mouse");
    }
});
console.log("Added purchase for Tyler Brem: Wireless Mouse");

console.log("\n~~~ Customer Report ~~~");
customers.forEach((c) => {
  console.log(
    `${c.name} | ${c.email} | Total Purchases: ${c.purchases.length}`
  );
});
