addEventListener("load", function () {
    idarray = [1177,1351,5081,11285,369,37451,59,596,1535,48542,2759,387,21855,587,3220] //,1637,9260,31757,31758,30860,8129,34599,36862,41084,9756,11981,2367,4421,164,15689,11597,17549,23623,31685,2966,437,199,339,789,30,32,35838,7311,849,4382,5118,16436,51536,16742,8861]
    async function bleh(){
        let html = `<tbody>`
        for(i = 0; i < idarray.length; i++){
            console.log(idarray[i])
            let response = await fetch(`https://api.jikan.moe/v4/anime/${idarray[i]}/full`)
            let data = await response.json()
            html += `<tr id="anime${i}">`
            html += `<td><img src="${data.data.images.webp.small_image_url}"></td>`
            html += `<td><a href=${data.data.url}>${data.data.title}</a></td>`
            html += `<td>${data.data.aired.prop.from.year}</td>`
            html += `</tr>`
        }
        html +=`</tbody>`
        return html
    }

    bleh().then(html => document.getElementById("animetable").innerHTML = html)




})
