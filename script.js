async function shrink() {
    let data = document.getElementById('fullurl').value;
    console.log(data)
    fetch("https://url-shortener-yuvi.herokuapp.com/shorturl", {
        method: 'POST',
        body: JSON.stringify({ "url": data }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.status == 200) {
            alert('URL Shrinked!!');
        }
        
    }).catch(err => console.log(err));

    document.getElementById('fullurl').innerHTML = "";
    location.reload(true);
    console.log(data);
}

async function filldata() {

    let raw = await fetch('https://url-shortener-yuvi.herokuapp.com/load');
    let data = await raw.json();

    let tbody = document.createElement('tbody');
    tbody.id = "table-body"
    data.forEach(url => {
        console.log(url)
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = `<a href="${url.fullURL}">${url.fullURL}</a>`
        let td2 = document.createElement('td');
        td2.innerHTML = `<a target="_blank" href="https://url-shortener-yuvi.herokuapp.com/${url.shortURL}">https://url-shortener-yuvi.herokuapp.com/${url.shortURL}</a>`
        let td3 = document.createElement('td');
        td3.innerHTML = url.clicks;
        tr.append(td1, td2, td3);
        tbody.append(tr);
    })
    document.getElementById('urlTable').appendChild(tbody);
}


filldata();