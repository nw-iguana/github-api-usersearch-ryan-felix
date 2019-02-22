function formatQuery(searchTerm) {
    const baseEndpoint = "https://api.github.com";
    const query = `/users/sdfasdfa/repos`

    return baseEndpoint + query;

}

///users/:username/repos

function getRepos(url) {
    fetch(url)
    .then(response => {
        if(response.ok){
           return response.json()
        }
        throw new Error('something went terribly wrong!');
    })
    .then(responseJson => {
        if(responseJson.length === 0) {
        renderResults('please enter a valid user name.');
        throw new Error('something went terribly wrong!');
        }
        renderResults(responseJson)
    })
    .catch(error => console.log(error.message));

}

function getSearchValue() {
    let $formEl = $("[name='user-search']");
    let search = $formEl.val();
    console.log($formEl);
    $formEl.val('');
    return search;
}


function formHandler() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        let userInput = getSearchValue();
        console.log(userInput);
        getRepos(formatQuery(userInput));
    });
}

function createLink(innerText,url) {
    return `<a href="${url}" target="_blank">${innerText}</a>`
}


function renderResults(responseJson) {
    console.log(responseJson);
    let $results = $('.results');

        if(typeof responseJson === 'string') {
            $results.append(`<h1 style="color:red">${responseJson}</h1>`)
            $results.removeClass('hidden');
            return;
        }

    let linksArray = responseJson.map(function getNameAndUrl(item) {
        let $results = $('.results');
        let url = item.html_url;
        let name = item.name;
        console.log(responseJson);

        $results.append(createLink(name,url));
        $results.removeClass('hidden');

    });
}

//responseJson.html_url
//responseJson.name

$(formHandler());