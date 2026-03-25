let input = document.getElementById("markdown-input");
let output = document.getElementById("html-output");
let preview = document.getElementById("preview");

function convertMarkdown(){
    let resultHTML = input.value;
    resultHTML =resultHTML.replace(/^### (.*$)/igm, "<h3>$1</h3>");
    resultHTML =resultHTML.replace(/^## (.*$)/igm, "<h2>$1</h2>");
    resultHTML =resultHTML.replace(/^# (.*$)/igm, "<h1>$1</h1>");
    resultHTML =resultHTML.replace(/\*\*(.*?)\*\*/igm, "<strong>$1</strong>");
    resultHTML =resultHTML.replace(/__(.*?)__/igm, "<strong>$1</strong>");
    resultHTML =resultHTML.replace(/\*(.*?)\*/igm, "<em>$1</em>");
    resultHTML =resultHTML.replace(/_(.*?)_/igm, "<em>$1</em>");
    resultHTML =resultHTML.replace(/!\[(.*?)\]\((.*?)\)/igm, '<img alt="$1" src="$2">');
    resultHTML =resultHTML.replace(/\[(.*?)\]\((.*?)\)/igm, '<a href="$2">$1</a>');
    resultHTML =resultHTML.replace(/^> (.*$)/igm, "<blockquote>$1</blockquote>");

    output.textContent = resultHTML;
    preview.innerHTML = resultHTML;
    return resultHTML
}



input.addEventListener("input", convertMarkdown)
