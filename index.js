console.log("hellOo");

// version.js
import os from "os";

// Node.js version
console.log("Node.js version:", process.version);

// OS infos
console.log("Platform:", os.platform());   // 'linux', 'darwin', 'win32'
console.log("Release:", os.release());     // kernel version
console.log("Arch:", os.arch());           // 'x64', 'arm', etc.
console.log("Hostname:", os.hostname());
console.log("CPUs:", os.cpus().length, "cores");
console.log("Total memory (GB):", (os.totalmem() / (1024 ** 3)).toFixed(2));
console.log("Free memory (GB):", (os.freemem() / (1024 ** 3)).toFixed(2));