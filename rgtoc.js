var h2List = $('#main').find('h2');
if (h2List.length > 0) {
  let toc = $('#toc');
  let tocDiv = document.createElement("div");
  //tocDiv.addClass('toc');
  let tocHeader = document.createElement("h3");
  tocHeader.innerHTML = "Table of Contents";
  tocHeader.classList.add('tocHeader');
  tocDiv.append(tocHeader);
	tocDiv.classList.add('toc');
  let tocUL = document.createElement("ul");
  for(let i = 0; i <h2List.length; i++){
  	let tocLi = document.createElement("li");
    let toca = document.createElement("a");
    toca.href = "#"+h2List[i].id;
    toca.innerHTML = h2List[i].innerText;
    tocLi.append(toca);
    tocUL.append(tocLi);
  }
  tocDiv.append(tocUL);
	toc.append(tocDiv);
}
