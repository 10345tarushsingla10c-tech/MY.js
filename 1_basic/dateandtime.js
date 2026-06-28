//  date and time

let myDate = new Date()
console.log(myDate)
console.log(myDate.getMonth())
// this will print month , similarly we can print day ,date , hour , year etc.
// month will me -1 of the actual so as it is june it will print 5 instead of 6 as it start from 0.

console.log(myDate.toString())
// Converts the entire date, time, and local timezone info into a long, human-readable string.
console.log(myDate.toDateString());
//trips out all the time and timezone data, returning only the date portion (Day, Month, Date, Year).
console.log(myDate.toISOString());
// Converts the date to the standardized ISO 8601 format in Coordinated Universal Time (UTC).
console.log(myDate.toJSON());
// It is same as ISOString
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString())
// These three methods format the date, time, or both based entirely on the user's local system settings
let myTimeStamp = Date.now()
console.log(myTimeStamp)
// output = 1782639306616  this is nanosecond
console.log(myTimeStamp/1000);
// output = 1782639388.455  it is in seconds to avoid decimal use math.floor

