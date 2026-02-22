fetch('https://raw.githubusercontent.com/idislikebluecheese/worldguessr-hacks/refs/heads/main/nogui/minifed.js').then(r => r.text()).then(r => eval(r)).catch(er => window.alert(er.message))
