import {tambah} from './aritmatika.js';
import {kurang} from './aritmatika.js';
import {kali} from './aritmatika.js'
import {bagi} from './aritmatika.js'

const tagDiv1 = document.getElementById('tagDiv1')


function hasilTag(a,b) {

    let fill = ''

    let hasilTambah = tambah(a,b);
    let hasilKurang = kurang(a,b);
    let hasilKali = kali(a,b);
    let hasilBagi = bagi(a,b);

    console.log(`hasil dari ${a} + ${b} = ${hasilTambah}`);
    console.log(`hasil dari ${a} - ${b} = ${hasilKurang}`);
    console.log(`hasil dari ${a} x ${b} = ${hasilKali}`);
    console.log(`hasil dari ${a} ÷ ${b} = ${hasilBagi}`);
    
    fill += `<h3>Hasil : ${a} + ${b} = ${hasilTambah}</h3>`
    fill += `<h3>Hasil : ${a} - ${b} = ${hasilTambah}</h3>`
    fill += `<h3>Hasil : ${a} x ${b} = ${hasilTambah}</h3>`
    fill += `<h3>Hasil : ${a} ÷ ${b} = ${hasilTambah}</h3>`

    return fill

}

tagDiv1.innerHTML +=  hasilTag(100,900)
tagDiv1.innerHTML +=  hasilTag(100,800)
tagDiv1.innerHTML +=  hasilTag(100,700)
tagDiv1.innerHTML +=  hasilTag(100,600)
tagDiv1.innerHTML +=  hasilTag(100,500)