let count = 0

document.getElementById('count').onclick =function() {
    count+=1
    document.getElementById('counts').innerHTML= count
}