const button = document.getElementById("countButton");
button.addEventListener("click", function() {

   palavra()
   texto()

   console.log(lettersDiv)

   // teu código vai aqui ... 
});

function texto() {
   let typedText = document.getElementById("textInput").value 

   typedText = typedText.toLowerCase(); 
   typedText = typedText.replace(/[^a-z'\s]+/g, ""); 

   let letra = typedText.split("")
   // console.log(letra)
   
   calcular(letra)
}




function calcular(letra) {
   const letterCounts = {};
   for (let i = 0; i < letra.length; i++) {
      currentLetter = letra[i];

      if (letterCounts[currentLetter] === undefined) {
         letterCounts[currentLetter] = 1; 
         // lettersDiv.innerHTML = `${letterCounts[i]}`
      } else { 
         letterCounts[currentLetter]++; 
         // lettersDiv.innerHTML = letterCounts[i]
      }
   }
   for (let letter in letterCounts) { 
      const span = document.createElement("span"); 
      const textContent = `"${letter}": ${letterCounts[letter]}, `;
      span.innerText = textContent; 
      const letters = document.getElementById("lettersDiv");
      letters.appendChild(span); 
   }
   console.log(letterCounts)
   
   // return letterCounts[]
}

function palavra() {
   let typedText = document.getElementById("textInput").value 

   typedText = typedText.toLowerCase(); 
   typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
   
   let palavra = typedText.split(" ")
   // console.log(letra)
   words = typedText.split(/\s/);
   
   calcular2(words)
}

function calcular2(letra) {
   const letterCounts2 = {};
   for (let i = 0; i < letra.length; i++) {
      currentLetter = letra[i];

      if (letterCounts2[currentLetter] === undefined) {
         letterCounts2[currentLetter] = 1; 
         // lettersDiv.innerHTML = `${letterCounts[i]}`
      } else { 
         letterCounts2[currentLetter]++; 
         // lettersDiv.innerHTML = letterCounts[i]
      }
   }
   for (let letter in letterCounts2) { 
      const span = document.createElement("span"); 
      const textContent = `"${letter}": ${letterCounts2[letter]}, `;
      span.innerText = textContent; 
      const letters = document.getElementById("wordsDiv");
      letters.appendChild(span); 
   }
   // console.log(letterCounts)
   
   // return letterCounts[]
}




