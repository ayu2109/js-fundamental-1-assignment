let name ="Mithun";
let emailid = "mithun.s@pw.live";
let age = 21;
if(typeof name !== "string"){
    console.log("Name Should Be A String..");

} else if( typeof emailid !== "string"){
    console.log("Email Should Be A String");

}
else if ( typeof age !== "number"){
    console.log("Age Should Be A Number");
}
else{
    console.log("All Value Are Currect");
}