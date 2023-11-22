async function clickCallback(nextPath){
    // Change the title to the bypassing text
    document.getElementById('titleMessage').innerText = "Bypassing..."
    
    // Generate Nonce
    const nonce = document.location.pathname.split('/').join('') + nextPath

    // Calculate proof of work
    for(let i = 0; ; i++){
        const msgUint8 = new TextEncoder().encode(`${i}${nonce}`);
        const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");

        if(hashHex.startsWith("0000"))
            window.location = `${document.location.origin}${document.location.pathname}${nextPath}/?code=${i}&hash=${hashHex}`;    
    }
}