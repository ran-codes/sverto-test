console.log("Test script: attempting to get Deno version...")
console.log("Current Deno version", Deno.version.deno);
console.log("Test script: success!")
console.log("Path in Quarto's Deno: ", Deno.env.get("Path"))