function habi_desabi(value){

    if(value == 10){
        ipt_decimal.disabled = false;
    }
        else if(value != 10){
            ipt_decimal.disabled = true;
        }

    if(value == 2){
        ipt_binario.disabled = false;
    }
        else if(value != 2){
            ipt_binario.disabled = true;
        }

        if(value == 8){
            ipt_octal.disabled = false;
        }
            else if(value != 8){
                ipt_octal.disabled = true;
            }

            if(value == 16){
                ipt_hexadecimal.disabled = false;
            }
                else if(value != 16){
                    ipt_hexadecimal.disabled = true;
                }
    }
    
    function calculo(){
        if(tipos_bases.value ==10){
            converter_decimal();
        }

        if(tipos_bases.value ==2){
            converter_binario();
        }
        if(tipos_bases.value ==8){
            converter_octal();
        }
        if(tipos_bases.value ==16){
            converter_hexadecimal();
        }
    }

    function converter_decimal(){

        var decimal = parseInt(document.getElementById("ipt_decimal").value, 10)
        document.getElementById("ipt_binario").value = decimal.toString(2);
        document.getElementById("ipt_octal").value = decimal.toString(8);
        document.getElementById("ipt_hexadecimal").value = decimal.toString(16);
    
                }
                function converter_binario(){
    
                    var binario = parseInt(document.getElementById("ipt_binario").value, 10)
                    document.getElementById("ipt_decimal").value = parseInt(binario, 2)
                    document.getElementById("ipt_octal").value = parseInt(binario, 2). toString(8);
                    document.getElementById("ipt_hexadecimal").value = parseInt(binario, 2).toString(16);
                
                            }
    
                function converter_octal(){
    
                 var octal = parseInt(document.getElementById("ipt_octal").value, 10)
                document.getElementById("ipt_decimal").value = parseInt(octal, 8)
                document.getElementById("ipt_binario").value = parseInt(octal, 8). toString(2);
                document.getElementById("ipt_hexadecimal").value = parseInt(octal, 8).toString(16);
                }
    
                function converter_hexadecimal(){
    
                    var hexadecimal = parseInt(document.getElementById("ipt_hexadecimal").value,16)
                   document.getElementById("ipt_decimal").value = parseInt(hexadecimal, 16)
                   document.getElementById("ipt_binario").value = parseInt(hexadecimal, 16). toString(2);
                   document.getElementById("ipt_octal").value = parseInt(hexadecimal, 16).toString(8);
                   }