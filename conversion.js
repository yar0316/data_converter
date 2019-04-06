function conversion(input) {
    console.log(input.match(/\s\n/))
    console.log(input.match(/\n/))
    if(input.match(/\s\n/g) != null){
        document.write(input.replace(/\s\n/g,","))
    }else if(input.match(/\n/g) != null){
        document.write(input.replace(/\n/g,","))
    }
    
}