const $inputSearch = document.querySelector(".input-search");
const $open = $inputSearch.querySelector(".-open");
const $close = $inputSearch.querySelector(".-close")


$open.addEventListener("click", event => {
    event.preventDefault();

    $inputSearch.classList.toggle("-active")
    $open.classList.remove("-active")
    $close.classList.add("-active")
})