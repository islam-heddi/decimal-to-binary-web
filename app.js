function decimaltobinary(){
    console.log("the user have clicked");
    let decimal = document.getElementById("decimal").value;
    console.log("decimal : " + decimal);

    //calculating the binary value
    let binary =0;
    let p = 1;
    let decimal_tmp=decimal;
    console.log("decimal_tmp  : " + decimal_tmp);
    while(decimal_tmp!=0){
        binary = Math.floor(decimal_tmp % 2)*p + Math.floor(binary);
        decimal_tmp=Math.floor(decimal_tmp/2);
        p=p*10; 
    }

    console.log("binary : " + binary);
    document.getElementById("result").innerHTML = binary;
    return;
}