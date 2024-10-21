import $ from "jquery";
import getAgreeType from "./common";

$(function(){
    $('select[name="user_type"] ').on('change', function()  {
        let arrType = getAgreeType();
        let optionType = $(this).parents('.box-body').find($('select[name="type"]'));
        optionType.empty();

        for(let prop in arrType[$(this).val()]){
            optionType.append('<option value='+prop+' >'+arrType[$(this).val()][prop]+'</option>');
        }
    });
});


// const target = document.querySelector("select[name='user_type']")

// target.addEventListener("change", () => {
//     let arrType = getAgreeType();
//     let optionType = document.querySelector('.form-control2')
//     optionType.removeChild();
//     console.log(target.value);
//     console.log(arrType['미곡류']);
//     if(target.value == '미곡류'){
//         console.log(1);
//         for(const prop in arrType['미곡류']){
//             console.log(prop);
//             console.log(arrType['맥류'][prop]);
//             optionType.appendChild('<option value='+prop+' >'+arrType['미곡류'][prop]+'</option>');
//         }
//     }else{                            
//         for(const prop in arrType['맥류']){
//             optionType.appendChild('<option value='+prop+' >'+arrType['맥류'][prop]+'</option>');
//         }                  
//     }        

// })
document.querySelector(".submit").addEventListener("click", () => {
    console.log(document.querySelector(".form-control").value);
    console.log(document.querySelector(".form-control2").value);
})