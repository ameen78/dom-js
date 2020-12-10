    function add(){
        let contain  = document.getElementById("contain");
        let  ele = document.getElementById('text');
        let  newel = document.createElement('p');
        newel.innerText= ele.value
        newel.setAttribute('onclick', 'del(this)');
        contain.appendChild(newel);
        return contain;
    }
     function del(elm){
         elm.remove()
     }