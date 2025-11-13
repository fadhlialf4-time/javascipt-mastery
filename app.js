import {add} from './module/script1-day13.js'
import {multiply} from './module/script2-day13.js'
import {min} from './module/script3-day13.js'

const tagDiv1 = document.getElementById('tagDiv1')

function mengisiTag(a,b) {
    let isi = ''

    let resultAdd = add(a,b);
    let resultmultiply = multiply(a,b);
    let resultMin = min(a,b);

    console.log(`hasil: ${a} + ${b} = ${resultAdd}`);
    console.log(`hasil: ${a} x ${b} = ${resultmultiply}`);
    console.log(`hasil: ${a} - ${b} = ${resultMin}`);
    console.log(`===================`);

    isi += `<h3>hasil: ${a} + ${b} = ${resultAdd}</h3>`
    isi += `<h3>hasil: ${a} x ${b} = ${resultmultiply}</h3>`
    isi += `<h3>hasil: ${a} - ${b} = ${resultMin}</h3>`
    isi += `<h3>====================</h3>`

    return isi
}

tagDiv1.innerHTML +=  mengisiTag(100,900)
tagDiv1.innerHTML +=  mengisiTag(100,800)
tagDiv1.innerHTML +=  mengisiTag(100,700)
tagDiv1.innerHTML +=  mengisiTag(100,600)
tagDiv1.innerHTML +=  mengisiTag(100,500)

/* NB From Me :
innerHTML : Mengatur isi HTML dengan tag HTML
innerText : Mengatur isi teks*/
