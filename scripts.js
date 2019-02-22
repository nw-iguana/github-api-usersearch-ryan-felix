function formatQuery() {
    const baseEndpoint = "https://api.github.com";
    return baseEndpoint;

}

function getRepos(url) {
    fetch(url)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));

}

function formHandler(event) {
    event.preventDefault();
    let userInput = $("[name='user-search']").val();
    console.log(userInput);
    getRepos(formatQuery());
}


function main() {
    $('form').on('submit', formHandler);

}

$(main());