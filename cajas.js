let d = document;
let c1 = d.querySelector('#caja1');
let c2 = d.querySelector('#caja2');
let c3 = d.querySelector('#caja3');
let c4 = d.querySelector('#caja4');
let c5 = d.querySelector('#caja5');
let seleccion = null;
let msj = d.querySelector('#msj');
let txtProp = d.querySelector('#propiedad');
let txtValor = d.querySelector('#valor');
let btn = d.querySelector('#boton');
let btnDark = d.querySelector('#dark');
let btnLight = d.querySelector('#light');
let body = d.querySelector('body');

function Seleccionar() {
    console.log(this);
    seleccion = this;
}

c1.onclick = Seleccionar;
c2.onclick = Seleccionar;
c3.onclick = Seleccionar;
c4.onclick = Seleccionar;
c5.onclick = Seleccionar;

btn.onclick = function () {
    msj.innerHTML = '';
    if(seleccion == null) {
        msj.innerHTML = 'No selecciono ningun div';
    } else {
        let propiedad = txtProp.value;
        let valor = txtValor.value;
        console.log(propiedad, ':', valor);
        seleccion.style[propiedad] = valor;
    }
}

btnDark.addEventListener('click', (e)=>{
    body.className = 'dark';
})

btnLight.addEventListener('click', (e)=>{
    body.className = 'light';
})