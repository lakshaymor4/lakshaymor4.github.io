const gg = document.querySelector("#lp")
const gy = document.querySelector("#bit")
const tt = document.querySelector("#h")
const rtt = document.querySelector("body")
gy.addEventListener("click",async ()=>{
   const yl = gg.value
   const quer = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/"+yl)
   console.log(quer.data)
   const g= quer.data[0]
   const fr = g.phonetics
   
   const gy = document.createElement("h1")
   const tty = document.createElement("h3")
   tty.setAttribute("id","hh")
   gy.setAttribute("id","h")
   gy.innerText = yl
   for(let t=0;t<fr.length;t++){
    for(var yew in fr[t]){
        if(yew == "text"){
            tty.innerText = fr[t].text
            break
        }

    }
   }
   
   if(document.querySelector("#h")==null && document.querySelector("#hh")==null){
   document.querySelector(".mai23").append(gy)
   document.querySelector(".mai23").append(tty)
   }
   else{
    document.querySelector("#h").remove()
    document.querySelector("#hh").remove()
    document.querySelector(".mai23").append(gy)
   document.querySelector(".mai23").append(tty)
   }
   const op = g.meanings.length
   if(document.querySelector(".meani")!=null){
    document.querySelector(".meani").remove()
    const typ = document.createElement("div")
    typ.setAttribute("class","meani")
     rtt.append(typ)
    for(let i=0;i<op;i++){
     const yy = g.meanings[i].partOfSpeech
     const rr  = document.createElement("div")
     rr.setAttribute("class","mo")
     typ.append(rr)
     const p = document.createElement("p")
     p.setAttribute("id","p1")
     p.innerText = yy
     rr.append(p)
     const yup = document.createElement("div")
     yup.setAttribute("class","mean")
     typ.append(yup)
     const ull = document.createElement("ul")
     ull.setAttribute("id","lis")
     ull.innerText = "Meaning"
     yup.append(ull)
     const ho = g.meanings[i].definitions.length
     for(let j=0;j<ho;j++){
         const hj = g.meanings[i].definitions[j]
         const lii = document.createElement("li")
         ull.append(lii)
         const re = document.createElement("span")
         re.innerText = hj.definition
         lii.append(re)
         
 
     }
     if(g.meanings[i].synonyms.length>0){
         const ggh = document.createElement("div")
         ggh.setAttribute("class","syn")
         typ.append(ggh)
         const gtt = document.createElement("p")
         gtt.setAttribute("id","p2")
         gtt.innerText = "Synonyms:"
         ggh.append(gtt)
         const fu = document.createElement("div")
         fu.setAttribute("class","sy")
         ggh.append(fu)
         for(let h= 0; h<g.meanings[i].synonyms.length;h++){
             const yui = document.createElement("p")
             yui.setAttribute("id","p3")
             yui.innerText = g.meanings[i].synonyms[h]
             fu.append(yui)
         } 
     }
     if(g.meanings[i].antonyms.length>0){
         const ggh = document.createElement("div")
         ggh.setAttribute("class","syn")
         typ.append(ggh)
         const gtt = document.createElement("p")
         gtt.setAttribute("id","p2")
         gtt.innerText = "Antonyms:"
         ggh.append(gtt)
         const fu = document.createElement("div")
         fu.setAttribute("class","sy")
         ggh.append(fu)
         for(let h= 0; h<g.meanings[i].antonyms.length;h++){
             const yui = document.createElement("p")
             yui.setAttribute("id","p3")
             yui.innerText = g.meanings[i].antonyms[h]
             fu.append(yui)
         } 
     }
     
 
    }
    console.log("done")
   }
   else{
    const typ = document.createElement("div")
    typ.setAttribute("class","meani")
     rtt.append(typ)
    for(let i=0;i<op;i++){
     const yy = g.meanings[i].partOfSpeech
     const rr  = document.createElement("div")
     rr.setAttribute("class","mo")
     typ.append(rr)
     const p = document.createElement("p")
     p.setAttribute("id","p1")
     p.innerText = yy
     rr.append(p)
     
     
     const yup = document.createElement("div")
     yup.setAttribute("class","mean")
     typ.append(yup)
     const ull = document.createElement("ul")
     ull.setAttribute("id","lis")
     ull.innerText = "Meaning"
     yup.append(ull)
     const ho = g.meanings[i].definitions.length
     for(let j=0;j<ho;j++){
         const hj = g.meanings[i].definitions[j]
         const lii = document.createElement("li")
         ull.append(lii)
         const re = document.createElement("span")
         re.innerText = hj.definition
         lii.append(re)
         
 
     }
     if(g.meanings[i].synonyms.length>0){
         const ggh = document.createElement("div")
         ggh.setAttribute("class","syn")
         typ.append(ggh)
         const gtt = document.createElement("p")
         gtt.setAttribute("id","p2")
         gtt.innerText = "Synonyms:"
         ggh.append(gtt)
         const fu = document.createElement("div")
         fu.setAttribute("class","sy")
         ggh.append(fu)
         for(let h= 0; h<g.meanings[i].synonyms.length;h++){
             const yui = document.createElement("p")
             yui.setAttribute("id","p3")
             yui.innerText = g.meanings[i].synonyms[h]
             fu.append(yui)
         } 
     }
     if(g.meanings[i].antonyms.length>0){
         const ggh = document.createElement("div")
         ggh.setAttribute("class","syn")
         typ.append(ggh)
         const gtt = document.createElement("p")
         gtt.setAttribute("id","p2")
         gtt.innerText = "Antonyms:"
         ggh.append(gtt)
         const fu = document.createElement("div")
         fu.setAttribute("class","sy")
         ggh.append(fu)
         for(let h= 0; h<g.meanings[i].antonyms.length;h++){
             const yui = document.createElement("p")
             yui.setAttribute("id","p3")
             yui.innerText = g.meanings[i].antonyms[h]
             fu.append(yui)
         } 
     }
     
 
    }
    console.log("done")
   }
})
