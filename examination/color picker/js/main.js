let bgr_test = document.getElementById('bgr');

function createRandomColor(){
    let color = '#';
    color = color[Math.floor(Math.random() * 256)];
    return color;
}

function randomColor(){
    bgr_test.style.background = rgb(createRandomColor(), createRandomColor(), createRandomColor());
}

function hexColor(){
    c000000.style.display = "block";
    cFFFFFF.style.display = "block";
    cFF0000.style.display = "block";
    c00FF00.style.display = "block";
    c0000FF.style.display = "block";
    cFFFF00.style.display = "block";
    c00FFFF.style.display = "block";
    cFF00FF.style.display = "block";
    cC0C0C0.style.display = "block";
    c808080.style.display = "block";
    c800000.style.display = "block";
    c808000.style.display = "block";
    c008000.style.display = "block";
    c800080.style.display = "block";
    c008080.style.display = "block";
    c000080.style.display = "block";
}








