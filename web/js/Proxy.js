/* global revive, replacer */
const $$=(...args)=>
    args.length===0||args.length%2!==0?[]
    :args.reduce((a,e,i)=>i%2!==0?a:a.concat({arg:e,value:args[i+1]}),[]);

class $Proxy{
    constructor(){
        
    };
    static proxy(parametros=[]/*array*/,accion=""/*string*/,tipo=""/*string*/,callBack/*function*/){
        let AJAX_req=new XMLHttpRequest();
        let url="/SGA/servlet?action="+accion;
        AJAX_req.open("POST",url,true);
        AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        AJAX_req.onreadystatechange = function(){
            if( AJAX_req.readyState === 4 && AJAX_req.status === 200 ){
                let jsonText=AJAX_req.responseText;
                let status = JSON.parse( jsonText,revive );
                callBack(status);
            }
        };
        let prms=parametros.reduce((a,e)=>(a=a+"&"+e.arg+"="+JSON.stringify(e.value,replacer)),"CLASS="+tipo);
        AJAX_req.send(prms); 
    }

    
};


    