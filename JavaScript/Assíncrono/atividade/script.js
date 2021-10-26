const BASE_URL = "https://thatcopy.pw/catapi/rest/"
const btn = document.querySelector('#change-cat')
const img = document.querySelector('#cat')

//Com try.. catch
const getImg = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
        }
    catch(e){
        console.log(e.message)
    }
}

/*Sem try...catch
const getImg = async() =>{
    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((e)=> console.log(e))

    return data.webpurl
}
*/

const loadImg = async() => {
    img.src = await getImg();
}


btn.addEventListener('click', loadImg)

loadImg()
