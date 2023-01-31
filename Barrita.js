class BarraPorcentual extends HTMLElement {
    constructor(value,max) {
        super();
        this.value = value;
        this.max = max;
    }
    
    get value(){return this.innerHTML= this.getAttribute('value'); }
    set value(v){this.setAttribute('value',v)}
    get max(){return this.innerHTML= this.getAttribute('max'); }
    set max(m){this.setAttribute('max',m)}

    attributeChangedCallback(name,old,now){
        console.log(name,old,now);
        switch (name) {
            case 'value':
                if (now>0) {
                    this.innerHTML = "";
                     
                }
                break;
        
            default:
                break;
        }
        if(now>0)this.innerHTML=now;
        else now = old;
    }

    createbar(){
        const span = document.createElement('span');
        const progress = document.createElement('progress');
        progress.value = this.value;
        progress.max= this.max;
        this.append(span);
        span.append(progress);
    }
}
customElements.define('barra-porcentual', BarraPorcentual);
let barrita = new BarraPorcentual(50,100);
barrita.createbar();
document.body.append(barrita);
