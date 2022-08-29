let button=document.querySelector('#getData')
let inputValue=document.getElementById('input')

button.addEventListener('click',()=>{
sendApiRequest()
})

async function sendApiRequest(){
    let res=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=4rkJ42kbD8gmXPAt94eho89K2xLX1j50&q=${inputValue.value}`)
    console.log(res);
    let gifs=await res.json();
    console.log(gifs);
    useApiData(gifs)
}

function useApiData(gifs){
document.querySelector('#wrapper').innerHTML=`<img src="${gifs.data[0].images.original.url}"> `

}

// // 4rkJ42kbD8gmXPAt94eho89K2xLX1j50
// api.giphy.com/v1/gifs/search
// "https://giphy.com/gifs/reaction-mood-2x0VePimPaFJDpGZ7H"