



  var today = new Date();
  
  var dd = today.getDate();
  var mm = today.getMonth() + 1;

  var yyyy = today.getFullYear();
  if (dd < 10) {
      dd = '0' + dd;
  }
  if (mm < 10) {
      mm = '0' + mm;
  }
  var today = mm + '/' + dd + '/' + yyyy;


  

function getNoteList(){
    document.getElementById("noteTable");
    fetch('https://60ca3aba772a7600172059b5.mockapi.io/api/v1/notesss')
    .then(response=>response.json())
    .then(data=>{
       
        const table=document.getElementById("noteTable");
      
        document.getElementById("noteTable").innerHTML="";
           
        for(nott of data){
            table.innerHTML+=`
            <td> <p id="notesss_${nott.id}"   >${nott.notesss}</p> <br>
            <p class="small text-muted" id="tarih_${nott.id}" >${nott.tarih}</p> </td>
           
            <td><a href="#" id="yildizzz_${nott.id}" onclick='updateNote("${nott.id}")' class=" rrr "><i id="rass" class="fas fa-star ${nott.onemli}"><p style="display: none;"> ${nott.onemli}</p></i></a>
            <button onclick='deleteNote("${nott.id}")' class="btn  rrr btn-danger">X</button></td></tr>
            `

        }
      
            

    }).catch((error)=>{
        toastr.error("Hata Var "  + error);

        console.error("Hata",error);
    });
};
// Not Listesini Getir
//Not Tablosunu Yenile
function refreshTable(){

    getNoteList();
    toastr.info("Başarıyla Yenilendi")
}

getNoteList();


//Yeni Not Oluştur

function createNote() {
    toastr.success("Başarıyla Eklendi");

    console.log("Çalışıyor");
    let data={
        notesss: document.getElementById("notesss").value || "",
        tarih: today || "",
        onemli: true || false
    };
    fetch("https://60ca3aba772a7600172059b5.mockapi.io/api/v1/notesss",{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data),
    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        const table=document.getElementById("noteTable");
        console.log("Not Oluşturuldu:",data);

        table.innerHTML+=`
        <td> <p>${data.notesss}</p> <br>
        <p class="small text-muted" id="tarih_${data.id}">${data.tarih}</p> </td>
       
           
        <td><a href="#" id="yildizzz_${data.id}" onclick='updateNote("${data.id}")' class=" rrr "><i id="rass" class="fas fa-star ${nott.onemli}"><p style="display: none;"> ${data.onemli}</p></i></a>
        <button onclick='deleteNote("${data.id}")' class="btn rrr btn-danger">X</button></td></tr>
            `;
     
        
    })
    .catch((error)=>{
        toastr.error("Hata Var "  + error);

        console.error("Hata",error);
    });
    document.getElementById("notesss").value="";
    getNoteList();

};







function updateNote(id){
console.log(id);
 
var yildiz = document.getElementById("yildiz");
       ydeger = yildiz.innerHTML;
if(ydeger == "true")
{
 yildiz.innerHTML="false";

 
}
if(ydeger == "false")

{
  yildiz.innerHTML="true";

}
getNoteList();


data={
    onemli:document.getElementById("yildiz").innerText || "",
};
fetch("https://60ca3aba772a7600172059b5.mockapi.io/api/v1/notesss/"+id,{
    method:'PUT',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify(data)
})
.then(response=>response.json())
    .then(data=>{

        
         toastr.info("Başarıyla Güncellendi");

         console.log("Not Güncellendi",data);
    })
    .catch((error)=>{
        toastr.error("Hata Var "  + error);

        console.log('Hata',error);
})
getNoteList();

}






function deleteNote(id){
    toastr.error("Başarıyla Silindi");
    fetch("https://60ca3aba772a7600172059b5.mockapi.io/api/v1/notesss/" + id,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
        }
    })
    .then(response=>console.log(response))
    .then(data=>{
        
        console.log("Not Silindi",data);
    })
    .catch((error)=>{
        toastr.error("Hata Var "  + error);

        console.log("Hata:" + error);
    })

};






 function  myFunction(){
var chek1 = document.getElementById("checkbox1"); 
var lbl = document.getElementById("lbl");

 if (chek1.checked == true ){
  lbl.value="true";
}
else{

    lbl.value="";
}
fff();

}

