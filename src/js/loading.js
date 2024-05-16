function showLoading() {
    const div = document.createElement("div");
    div.classList.add("loading");
    
    const divLoader = document.createElement("div");
    divLoader.classList.add("loader");
    div.appendChild(divLoader);
    
    document.body.appendChild(div);

}


function hideLoading() {
    const loading = document.getElementsByClassName("loading");
    if (loading.length) {
        loading[0].remove();
    }



}
