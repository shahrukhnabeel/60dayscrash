let select1=document.getElementById('#select1')
select1.addEventListener('click',selectData)
function selectData(){

}
let select2=document.getElementById('#select2')
select1.addEventListener('click',selectData2)
function selectData2(){
    
}
let select3=document.getElementById('#select3')
select1.addEventListener('click',selectData3)
function selectData3(){
    
}
let table=document.getElementById("#tab")
table.addEventListener('click',tableData)

function tableData(){
    fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees')
}
//extract .
//image data
//name
//gender
//department
//salary
//fetch data
//filter these data by hof
//
arr=[{
    "data": [
        {
            "id": 51,
            "image": "https://i.imgur.com/9xEcfJj.jpg",
            "name": "Benson Yoell",
            "gender": "female",
            "department": "operations",
            "salary": 25000
        },
        {
            "id": 91,
            "image": "https://i.imgur.com/9xEcfJj.jpg",
            "name": "Lorettalorna Rosenfarb",
            "gender": "female",
            "department": "operations",
            "salary": 25000
        },
        {
            "id": 96,
            "image": "https://i.imgur.com/9xEcfJj.jpg",
            "name": "Claudia Vasyukhin",
            "gender": "female",
            "department": "hr",
            "salary": 25000
        },
        {
            "id": 2,
            "image": "https://i.imgur.com/9xEcfJj.jpg",
            "name": "Brynn Wildblood",
            "gender": "female",
            "department": "finance",
            "salary": 27000
        },
        {
            "id": 56,
            "image": "https://i.imgur.com/9xEcfJj.jpg",
            "name": "Elli Godlip",
            "gender": "female",
            "department": "hr",
            "salary": 27000
        },
        {
            "id": 92,
            "image": "https://i.imgur.com/9xEcfJj.jpg",
            "name": "Rina Nasey",
            "gender": "female",
            "department": "engineering",
            "salary": 27000
        },
        {
            "id": 88,
            "image": "https://i.imgur.com/9xEcfJj.jpg",
            "name": "Tobi Pizer",
            "gender": "female",
            "department": "operations",
            "salary": 30000
        },
        {
            "id": 24,
            "image": "https://i.imgur.com/9xEcfJj.jpg",
            "name": "Ilyssa Staning",
            "gender": "female",
            "department": "operations",
            "salary": 35000
        },
        {
            "id": 38,
            "image": "https://i.imgur.com/9xEcfJj.jpg",
            "name": "Monty Meers",
            "gender": "female",
            "department": "engineering",
            "salary": 35000
        },
        {
            "id": 65,
            "image": "https://i.imgur.com/9xEcfJj.jpg",
            "name": "Courtenay Risborough",
            "gender": "female",
            "department": "hr",
            "salary": 35000
        }
    ],
    "totalPages": 5
}]