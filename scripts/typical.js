const article = document.querySelector('.article');

function readTextFileToElement(file, element)
{
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                const allText = rawFile.responseText;
                // console.log(allText);
                element.innerHTML = allText;
                // return allText;
            }
        }
    }
    rawFile.send(null);
}

readTextFileToElement('../articles/sample.html', article)
//const article = ;

// console.log(article);
