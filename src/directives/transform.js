export default {
    bind(el, binding, vnode){        
        let current = 0;

        el.addEventListener('dblclick', function(){

            let increment = binding.value || 90; 
            let efeito;
            
            if(!binding.arg || binding.arg == 'rotate')
            {
                if(binding.modifiers.invers) {                
                    current-=increment;
                }else{
                    current+=increment;
                }

                efeito = `rotate(${current}deg)`;
            }else if(binding.arg == "scale"){
                efeito = `scale(${increment})`;
            }
            
            el.style.transform = efeito;
            
            if(binding.modifiers.animate) el.style.transition = 'transform 0.5s';
            
        })
    }
}