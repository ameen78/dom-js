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

//    let co =  document.getElementById("name")
//    co.innerHTML = "ameen"
// //   console.log(co);
//     // let d = c
//     par = document.getElementById("blue")

//     function blue(){ 
//       par.classlist.toggle(blue)
//     }

     

        
        
         let min=(array,min=array[0])=>{
             for(let i= 0; i<array.length;i++){
                 if(min>array[i])min=array[i];
             }
             return min;
         }
         let arry=[0,1,2,3,4,5,6,7]
          console.log(min(arry));

          let max = (array, max=array[array.length-1])=>{
              for(let i=array.length;i=0;i--){
                  if(max<array[i])max=array[i];
              }
              return max;
          }
          let num = [20,40,60,80,100,120]
          console.log(max(num));
      

          let numb = [30 ,60,90,120,150,180]
          let ar = (lem) =>{
             return Math.max.apply(null,lem)
            }
            console.log(ar(numb));

          let veg1 = {
              name:'carrot',
              stem :'root',
              type : 'tap root',
              color: 'orange'
            }  
        
           let veg2 = {
               name :'tommato',
               stem: 'branch',
               type:'herb',
               color:'red'
           }
           let veg =(veg1,veg2)=>{
               let s;
               if(JSON.stringify(veg1)===JSON.stringify(veg2)){
                   s = "true"
               }else{
                   s = 'false'
               }
             return s;
           }
           console.log(veg(veg1,veg2));

