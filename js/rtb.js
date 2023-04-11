$(document).ready(function () {
    setNotBlowUpShit();
    window.document.onkeydown = function (e) {
        if (!e) {
            e = event;
        }
        if (e.keyCode == 27) {
            lightbox_close();
        }
    }


    $(".lightbox_open").click(function () {
        window.scrollTo(0, 0);
        var clases = this.classList;
        document.getElementById('light' + clases[this.classList.length - 1]).style.display = 'block';
        document.getElementById('fade' + clases[this.classList.length - 1]).style.display = 'block';
    })

    $(".lightbox_close").click(function () {
        var clases = this.classList;
        document.getElementById('light' + clases[this.classList.length - 1]).style.display = 'none';
        document.getElementById('fade' + clases[this.classList.length - 1]).style.display = 'none';
    })

    $(".lightbox_comic").click(function () {
        cleanCarusel();
        var clases = this.classList;
        var numberFolder = clases[this.classList.length - 1];

        generateCarousel(numberFolder);

        window.scrollTo(0, 0);
        document.getElementById('carrouselMain').style.display = 'block';
        document.getElementById('carrouselMain').style.display = 'block';
        document.getElementById('mainMap').style.display = 'none';
        document.getElementById('mainMap').style.display = 'none';
        const carousel = document.querySelector('.carousel');
        const carouselItems = carousel.querySelectorAll('li');
        const carouselWidth = carouselItems[0].offsetWidth;
        let carouselPosition = 0;

        document.querySelector('.carousel-prev').addEventListener('click', () => {
            if (carouselPosition > 0) {
                carouselPosition -= carouselWidth;
                carousel.style.transform = `translateX(-${carouselPosition}px)`;
            }
        });

        document.querySelector('.carousel-next').addEventListener('click', () => {
            if (carouselPosition < (carouselItems.length - 1) * carouselWidth) {
                carouselPosition += carouselWidth;
                carousel.style.transform = `translateX(-${carouselPosition}px)`;
            }
        });
    })

    $(".closeComic").click(function () {
        var close = document.querySelector(".closeComic");
        var clases = close.classList;
        var number = clases[clases.length - 1];
        document.getElementById('carrouselMain').style.display = 'none';
        document.getElementById('carrouselMain').style.display = 'none';
        document.getElementById('light'+number).style.display = 'none';
        document.getElementById('fade'+number).style.display = 'none';

        document.getElementById('mainMap').style.display = 'block';
        document.getElementById('mainMap').style.display = 'block';
        close.classList.remove(number);
        cleanCarusel();
        setNotBlowUpShit();
    })

    $( ".boxselect" ).change(function() {
        var close = document.querySelector(".closeComic");
        var clases = close.classList;
        var number = clases[clases.length - 1];
        document.getElementById('light'+number).style.display = 'none';
        document.getElementById('fade'+number).style.display = 'none';
        close.classList.remove(number)
        cleanCarusel();
        generateCarousel(this.value);
    });

});

function generateCarousel(number) {

    setOption(document.querySelector(".boxselect"), number);

    var close = document.querySelector(".closeComic");
    close.classList.add(number);

    var folderUrl = "img/" + number;
    console.log(folderUrl);

    var diccionario = number;
    console.log(diccionario);

    // Split the response into an array of filenames
    var files = data[diccionario];
    console.log(files);
    var count = 0;
    files.forEach(function (file) {
        var parentDiv = document.createElement("div");
        if (count == 0) {
            parentDiv.classList.add("item", "active");
        }
        else {
            parentDiv.classList.add("item");
        }
        // Create the image element
        var imgElement = document.createElement("img");
        var image = folderUrl + "/" + file
        imgElement.setAttribute("src", image);
        imgElement.setAttribute("alt", "");

        // Append the image element to the parent div element
        parentDiv.appendChild(imgElement);

        // Append the parent div element to the document
        var existingDiv = document.querySelector(".carousel-inner");

        existingDiv.appendChild(parentDiv);

        // Create a new li element

        var existingOl = document.querySelector(".carousel-indicators");

        var newLi = document.createElement("li");

        // Set the data-target attribute
        newLi.setAttribute("data-target", "#myCarousel");

        // Set the data-slide-to attribute
        newLi.setAttribute("data-slide-to", "" + count);

        if (count == 0) {
            newLi.classList.add("active");
        }
        existingOl.appendChild(newLi);

        count++;
    });
}

function cleanCarusel(){
    var existingDiv = document.querySelector(".carousel-inner");
    existingDiv.innerHTML = '';
    var existingOl = document.querySelector(".carousel-indicators");
    existingOl.innerHTML = '';
}

function setOption(selectElement, value) {
    var options = selectElement.options;
    for (var i = 0, optionsLength = options.length; i < optionsLength; i++) {
        if (options[i].value == value) {
            selectElement.selectedIndex = i;
            return true;
        }
    }
    return false;
}

function setNotBlowUpShit() {
    var newLi = document.createElement("li");

    // Set the data-target attribute
    newLi.setAttribute("data-target", "#myCarousel");

    // Set the data-slide-to attribute
    newLi.setAttribute("data-slide-to", "0");

    newLi.classList.add("active");
    var existingOl = document.querySelector(".carousel-indicators");

    existingOl.appendChild(newLi);

    var parentDiv = document.createElement("div");
    parentDiv.classList.add("item", "active");
    // Create the image element
    var imgElement = document.createElement("img");
    imgElement.setAttribute("src", "");
    imgElement.setAttribute("alt", "");

    // Append the image element to the parent div element
    parentDiv.appendChild(imgElement);

    // Append the parent div element to the document
    var existingDiv = document.querySelector(".carousel-inner");

    existingDiv.appendChild(parentDiv);
}