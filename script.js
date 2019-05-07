var source = document.querySelector('#product-template').innerHTML
var template = Handlebars.compile(source)

var input = document.querySelector('#threebox').innerHTML
var secondtemp = Handlebars.compile(input)


var http = new XMLHttpRequest()
http.open("GET", "products.json", true)
http.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        var data = this.responseText
        data = JSON.parse(data)
        data.products.forEach(function (product) {
            document.querySelector('.products').innerHTML += template(product)

        })
    }
}
http.send()

var moredata = [
        {
            "title": "Hot Headsets",
            "subTitle":"The Best Offers",
            "class":"headset"
        },
        {
            "title": "Only the best",
            "subTitle":"Flying Tutorials",
            "class":"thebest"
        },
        {
            "title": "Portable GPS",
            "subTitle":"The Highest Quality",
            "class":"gps"
        }
    ]

    moredata.forEach(function (boxes)  {
        document.querySelector('.trio-box').innerHTML += secondtemp(boxes)
    })