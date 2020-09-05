$("input").number(true,2,",",".");

function celciusToFahrenheit(){
    var celciusDegree1 = Number($("#celcius-fahrenheit").val());
    var result =celciusDegree1*9/5+32;
    $(".C-F").html(celciusDegree1.toLocaleString('ID')+" Celcius = "+result.toLocaleString('ID')+" F" ); 
}
function celciusToKelvin() {
    var celciusDegree2 = Number($("#celcius-kelvin").val());
var result =celciusDegree2+273.15;
$(".C-K").html(celciusDegree2.toLocaleString('ID')+" Celcius = "+result.toLocaleString('ID')+" K" );
}
//versi 1
$(".btn").click(celciusToFahrenheit);
$("#celcius-fahrenheit").keyup(function(e){
    if (e.keyCode===13) {
celciusToFahrenheit()
    }
});
//versi 2
$("#celcius-kelvin").keyup(celciusToKelvin)


//versi 3
$("#fahrenheit-celcius").keyup(function(){
var fahrenheitDegree1 = Number($("#fahrenheit-celcius").val());
var result =(fahrenheitDegree1-32)*5/9;
$(".F-C").html(fahrenheitDegree1.toLocaleString('ID')+" Fahrenheit = "+result.toLocaleString('ID')+" C" );
})
$("#fahrenheit-kelvin").keyup(function(){
var fahrenheitDegree2 = Number($("#fahrenheit-kelvin").val());
var result =(fahrenheitDegree2-32)*5/9+ 273.15  ;
$(".F-K").html(fahrenheitDegree2.toLocaleString('ID')+" Fahrenheit = "+result.toLocaleString('ID')+" K" );
})

$("#kelvin-celcius").keyup(function(){
var kelvinDegree1 = Number($("#kelvin-celcius").val());
var result =kelvinDegree1-273.15;
$(".K-C").html(kelvinDegree1.toLocaleString('ID')+" Kelvin = "+result.toLocaleString('ID')+" C" );
})
$("#kelvin-fahrenheit").keyup(function(){
var kelvinDegree2 = Number($("#kelvin-fahrenheit").val());
var result =(kelvinDegree2-273.15)*9/5+32  ;
$(".K-F").html(kelvinDegree2.toLocaleString('ID')+" Kelvin = "+result.toLocaleString('ID')+" F" );
})
//---------------------------------------------BMI--------------------------------------------------------------
function bmiConverter (){
    let berat = Number($("#bmi-weight").val()); //kg
    let tinggi = Number($("#bmi-height").val()); //cm
    let tinggi2 = tinggi / 100;//merubah satuan tinggi dari cm ke m
    
    let bmi = berat / Math.pow(tinggi2,2);
    let bmi2 = bmi.toFixed(2).toLocaleString('ID');//membatasi bilangan dibelakang koma menjadi 2 digit
    
    
    
    if($("#bmi-weight").val() ==""||0.00 || $("bmi-height").val() ==""||0.00){
        alert("harap masukkan angka")
    }else if(bmi2 < 18.5){
        kondisi = `Nilai BMI anda adalah ${bmi2} dan dengan nilai  BMI tersebut, berat badan anda termasuk dibawah normal`
    }else if(bmi2 > 18.5 && bmi2 < 25){
        kondisi = `Nilai BMI anda adalah ${bmi2}  dan dengan nilai BMI  tersebut, berat badan anda termasuk normal`
    }else if(bmi2>=25 && bmi2<30 ) {
        kondisi = `Nilai BMI anda adalah ${bmi2} dan dengan nilai  BMI tersebut, berat badan anda termasuk overweight`
    }else if(bmi2 >= 30 && bmi2 <35){
        kondisi =`Nilai BMI anda adalah ${bmi2} dan dengan nilai  BMI tersebut, berat badan anda termasuk obesitas kelas 1`
    }else if(bmi2 >= 35 && bmi2 <40){
        kondisi =`Nilai BMI anda adalah ${bmi2} dan dengan nilai  BMI tersebut, berat badan anda termasuk obesitas kelas 2`
    }else if(bmi2 >= 40){
        kondisi =`Nilai BMI anda adalah ${bmi2} dan dengan nilai  BMI tersebut, berat badan anda termasuk kelas 3`
    }
    $("#bmi-result").html(kondisi);
};
$("#bmi-proccess").click(bmiConverter);

 //--------------berat badan ideal----------------------------
 function idealWeight(){
     let tinggi = Number($("#height").val());
     let gender = $('input:radio[name=gender]:checked').val();
     let rumus  = tinggi - 100
     let rumusCowok = rumus - (10/100 * rumus);
     let rumusCewek =rumus - (15/100 * rumus);   
    // console.log(gender);
     if(gender == "cowok"){
        //  alert("ini cowok")
        rekomendasi = `untuk tinggi badan laki-laki setinggi ${tinggi} cm ,berat badan ideal anda adalah ${rumusCowok}`
    }else if(gender == "cewek"){
        // alert("ini cewek")
        rekomendasi = `untuk tinggi badan perempuan setinggi ${tinggi} cm ,berat badan ideal anda adalah ${rumusCewek}`
    }
    $("#weight-result").html(rekomendasi);
 }
 $("#proccess").click(idealWeight);
