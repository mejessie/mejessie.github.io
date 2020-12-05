document.getElementById('resume-left').addEventListener('click',function(){
    if(num < images.length-2){
        num = 2;
    }
    else{
        num-=1;
    }
    showDialog(num,images,headTexts,texts);
});
document.getElementById('resume-right').addEventListener('click',function(){
    if(num > images.length-2){
        num = 0;
    }
    else{
        num+=1;
    }
    showDialog(num,images,headTexts,texts);
});
let showDialog = function(num,images,headTexts,texts){
    document.getElementById('resume-image').setAttribute('src',images[num]);
    document.getElementById('resume-head').innerHTML = headTexts[num];
    document.getElementById('resume-text').innerHTML = texts[num];
    document.getElementById('work-card-number').textContent = ''+(num+1)+"/"+images.length;
}
var num = 0;
let images = ['assets/images/จิตอาสาซ่อมเครื่องใช้ไฟฟ้า.jpg',
            'assets/images/แข่งขันไมโครบิต.jpg',
            'assets/images/แข่งขันแขนกล.jpg'];
let headTexts = ['<h1>จิตอาสา</h1>',
                '<h1>แข่งขัน</h1>',
                '<h1>แข่งขัน</h1>']
let texts = ['ทำกิจกรรมจิตอาสารับซ่อมเครื่องใช้ไฟฟ้าให้กับชาวบ้านในพื้นที่ปี 2561<br><strong>วิทยาลัยสารพัดช่างพระนคร</strong>',
            'แข่งขันเขียนโปรแกรมภาษา Python ควบคุม Micro:Bit ปี 2562<br><strong>วิทยาลัยเทคนิคดอนเมือง, วิทยาลัยเทคนิคสระแก้ว, วิทยาลัยเทคนิคร้อยเอ็ด</strong>',
            'แข่งขันเขียนโปรแกรมควบคุม Cobot ปี 2562<br><strong>ศูนย์การค้าเซียร์รังสิต</strong>'];