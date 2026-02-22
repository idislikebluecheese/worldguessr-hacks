(function(){
  try{
    if(!window.location.href.includes('www.worldguessr.com')) throw new Error('Please Run In www.worldguessr.com')
    const sv = document.getElementById('streetview')
    if(!!!sv) throw new Error('Please Run While In Game.')
    const src = sv.src
    const url = new URL(src)
    const cords = url.searchParams.get('location')
    const maps = `https://www.google.com/maps/place/${cords}`
    const comf = window.confirm(`Cheat Ran Successfully!\nCoordinates: ${cords}\nGoogle Maps URL: ${maps}\n\nWould You Like To Open Google Maps In Another Window?`)
    if(comf) window.open(maps)
  } catch(er) {
    window.alert(er.message)  
  }
}())
