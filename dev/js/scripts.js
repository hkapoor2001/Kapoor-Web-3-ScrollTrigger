import { drawpainting } from "./scrolltrigger.js"
import { rotate } from "./scrolltrigger.js"


let painting = ["#painting1","#painting2","#painting3","#painting4","#painting5"];

for(let i = 0; i < painting.length; i++){ drawpainting(painting[i]); }


for(let i = 0; i < painting.length; i++){ rotate(painting[i]); }