changeContent();

function changeContent() {
    const content = document.querySelector('.content');

    const views = {
        home: `<div class="row"><div class="silderBox"><div class="slide"></div><div class="controlPanel"><span class="material-symbols-outlined prev">arrow_back_ios</span><span class="material-symbols-outlined next">arrow_forward_ios</span></div></div></div><div class="row"><div class="searchBox"><div class="searchDiv"><input id="searchBar" type="text"><label for="searchBar">Wpisz nazwę potrawy</label></div><div class="searchBtn goToSaerchRecipy">SZUKAJ</div></div></div><div class="row"><div class="elem goToAllRecipy"><p>Przeglądaj przepisy</p><span class="material-symbols-outlined">menu_book</span></div><div class="elem goToAddRecipy"><span class="material-symbols-outlined">post_add</span><p>Dodaj własny przepis</p></div><div class="elem goToGit"><p>Zobacz Kod Strony</p><span class="material-symbols-outlined">code</span></div></div><div class="row"><div class="recipeBox"><h2>Najlepsze Przepisy</h2><div class="separatorBox"></div></div></div></div>`,
        recipy: `<div class="row"><div class="searchBox searchBoxMargin"><div class="searchDiv"><input id="searchBar" type="text"><label for="searchBar">Wpisz nazwę potrawy</label></div><div class="searchBtn goToSaerchRecipy">SZUKAJ</div></div></div><div class="row"><div class="recipeBox recipeBoxAll"><h2>Nasze i Wasze przepisy</h2><div class="separatorBox"></div><div class="bestRecipeBox"></div></div></div><div class="row"><div class="elem back"><p>Powrót</p><span class="material-symbols-outlined">home</span></div><div class="elem goToAddRecipy"><span class="material-symbols-outlined">post_add</span><p>Dodaj własny przepis</p></div><div class="elem goToGit"><p>Zobacz Kod Strony</p><span class="material-symbols-outlined">code</span></div></div>`,
        singleRecipy: `<div class="row imgRow"></div><div class="row singleRecipy"></div><div class="row"><div class="elem back"><p>Powrót</p><span class="material-symbols-outlined">home</span></div><div class="elem goToAddRecipy"><span class="material-symbols-outlined">post_add</span><p>Dodaj własny przepis</p></div><div class="elem goToGit"><p>Zobacz Kod Strony</p><span class="material-symbols-outlined">code</span></div></div><div class="aiBox"><h4>AI asistent<span class="material-symbols-outlined closeAi">close</span></h4><div class="textBox"></div><div class="rowChatBot"><input class="input" type="text" placeholder="Zapytaj"><span class="material-symbols-outlined sentBtn">robot_2</span></div></div>`,
        addRecipy: `<div class="row"><div class="uplaodRecipy"><label for="title">Tytuł:</label><input id="title" type="text"><label for="type">Typ:</label><input id="type" type="text"><label for="ingredians">Składniki</label><input id="ingredians" type="text"><label for="descrynation">Przepis:</label><textarea id="descrynation" type="text"></textarea><label for="file">Zdjęcie:</label><input class="file" id="file" type="file"><p class="uploadRecipy">Dodaj</p></div></div><div class="row"><div class="elem back"><p>Powrót</p><span class="material-symbols-outlined">home</span></div><div class="elem goToAllRecipy"><p>Przeglądaj przepisy</p><span class="material-symbols-outlined">menu_book</span></div><div class="elem goToGit"><p>Zobacz Kod Strony</p><span class="material-symbols-outlined">code</span></div></div>`
    };

    let currentView = 'home';

    function renderView(view, recipeId = null) {
        if (views[view]) {
            content.innerHTML = views[view];
            history.pushState({ view: view, recipeId: recipeId }, '', recipeId ? `?view=${view}&id=${recipeId}` : `?view=${view}`);
            currentView = view;
    
            if (view === 'home') {
                initializeSlider();
                setHomeData();
            }

            if (view === 'recipy') {
                setAllRecipyData();
            }
    
            if (view === 'singleRecipy' && recipeId) {
                initializeAiBox();

                fetchSingleRecipe(recipeId);
            }

            if (view === 'singleRecipy' && !recipeId) {
                console.error('Recipe ID is required for singleRecipy view.');
            }

            
            if (view === 'addRecipy' && !recipeId) {
                initializeAddRecipy();
            }
        } 
    }

    function setHomeData() {
        fetch('http://localhost:8080/dane')
        .then(response => response.json())
        .then(data => {
            console.log(data);
    
            const recipeBox = document.querySelector('.recipeBox');
            
            data.forEach(row => {
                recipeBox.innerHTML += `<div class="bestRecipeBox"><div class="recipe"><section><img class="foodImg" src="${row.image}" alt="${row.title}" style="object-fit: cover; object-position: center;"></section><section class="textSection"><div><h4>${row.title}</h4><h6>${row.description}</h6></div><div class="seeMore goToOneRecipy" data-id="${row.id}">Zobacz więcej...</div></section></div></div>`;
            });
        })
        .catch(error => console.error('Błąd:', error));
    }
    
    function setAllRecipyData(searchQuery = '') {
        fetch('http://localhost:8080/dane2')
        .then(response => response.json())
        .then(data => {
            console.log(data);
    
            const recipeBoxAll = document.querySelector('.recipeBoxAll');
            recipeBoxAll.innerHTML = ''; // Clear previous recipes

            const filteredData = data.filter(row =>
                row.title.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredData.length === 0) {
                recipeBoxAll.innerHTML = `<p class="error">Nie znaleziono przepisów pasujących do wyszukiwania.</p>`;
            } else {
                filteredData.forEach(row => {
                    recipeBoxAll.innerHTML += `<div class="bestRecipeBox"><div class="recipe"><section><img class="foodImg" src="${row.image}" alt="${row.title}" style="object-fit: cover; object-position: center;"></section><section class="textSection"><div><h4>${row.title}</h4><h6>${row.description}</h6></div><div class="seeMore goToOneRecipy" data-id="${row.id}">Zobacz więcej...</div></section></div></div>`;
                });
            }
        })
        .catch(error => console.error('Błąd:', error));
    }

    function fetchSingleRecipe(recipeId) {
        fetch(`http://localhost:8080/recipe/${recipeId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const imgRow = document.querySelector('.imgRow');
                const singleRecipy = document.querySelector('.singleRecipy');
                imgRow.innerHTML = `<img class="tittleImg" src="${data.image}" alt="${data.title}" style="object-fit: cover; object-position: center;">`;
                singleRecipy.innerHTML = `<div class="recipyText"><h3 class="recipyTittle">${data.title}</h3><p class="ingredients">${data.ingredients}</p><p class="mainText">${data.description}</p></div>`;
            })
            .catch(error => {
                console.error('Błąd:', error);
                const singleRecipy = document.querySelector('.singleRecipy');
                singleRecipy.innerHTML = `<p class="error">Nie udało się załadować przepisu. Spróbuj ponownie później.</p>`;
            });
    }

    function initializeAddRecipy() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.uploadRecipy')) {
                const title = document.querySelector('#title').value.trim();
                const type = document.querySelector('#type').value.trim();
                const ingredients = document.querySelector('#ingredians').value.trim();
                const description = document.querySelector('#descrynation').value.trim();
                const file = document.querySelector('#file').files[0];
    
                if (!title || !type || !ingredients || !description || !file) {
                    alert('Wszystkie pola muszą być wypełnione!');
                    return;
                }
    
                const formData = new FormData();
                formData.append('title', title);
                formData.append('type', type);
                formData.append('ingredients', ingredients);
                formData.append('description', description);
                formData.append('file', file);
    
                fetch('http://localhost:8080/addRecipe', {
                    method: 'POST',
                    body: formData,
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then((data) => {
                        alert('Przepis został dodany pomyślnie!');
                        renderView('home');
                    })
                    .catch((error) => {
                        console.error('Błąd:', error);
                        alert('Wystąpił błąd podczas dodawania przepisu.');
                    });
            }
        });
    }
    
    window.addEventListener('popstate', (event) => {
      if (event.state && event.state.view) {
        currentView = event.state.view;
        content.innerHTML = views[currentView];
      }
    });
    
    const params = new URLSearchParams(window.location.search);
    const viewFromUrl = params.get('view');
    if (viewFromUrl && views[viewFromUrl]) {currentView = viewFromUrl;}
    
    renderView(currentView);
    
    document.addEventListener('click', (e) => {
        if (e.target.closest('.back')) {
          renderView('home');
          window.scrollTo(0, 0);
        }
    });
    
    document.addEventListener('click', (e) => {
      if (e.target.closest('.goToAllRecipy')) {
        renderView('recipy');
        window.scrollTo(0, 0);
      }
    });
    
    document.addEventListener('click', (e) => {
        const recipeElement = e.target.closest('.goToOneRecipy');
        if (recipeElement) {
            const recipeId = recipeElement.dataset.id; 
            renderView('singleRecipy', recipeId);
            window.scrollTo(0, 0);
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target.closest('.goToSaerchRecipy')) {
            const searchBar = document.querySelector('#searchBar');
            const searchQuery = searchBar.value.trim();
            renderView('recipy');
            setAllRecipyData(searchQuery);
            window.scrollTo(0, 0);
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target.closest('.goToGit')) {
            window.open("https://github.com/JaToExe/kitchenRecipes", "_blank", "width=800,height=600");
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target.closest('.goToAddRecipy')) {
            renderView('addRecipy');
            window.scrollTo(0, 0);
        }
    });
}




function initializeSlider() {
    const previousButton = document.querySelector('.prev'); 
    const nextButton = document.querySelector('.next'); 
    const slideElement = document.querySelector('.slide');
    const totalImages = 3; 
    let currentImageNumber = 1;

    if (!previousButton || !nextButton || !slideElement) {
        console.error('Slider elements are missing.');
        return;
    }

    slideElement.className = `slide slide${currentImageNumber}`;

    previousButton.addEventListener('click', () => {
        if (currentImageNumber > 1) {
            currentImageNumber--;
        } else {
            currentImageNumber = totalImages;
        }
        updateSlide();
        resetAutoSlideChange();
    });

    nextButton.addEventListener('click', () => {
        if (currentImageNumber < totalImages) {
            currentImageNumber++;
        } else {
            currentImageNumber = 1;
        }
        updateSlide();
        resetAutoSlideChange();
    });

    function updateSlide() {
        slideElement.className = `slide slide${currentImageNumber}`;
    }

    let autoSlideInterval;

    function startAutoSlideChange() {
        autoSlideInterval = setInterval(() => {
            if (currentImageNumber < totalImages) {
                currentImageNumber++;
            } else {
                currentImageNumber = 1;
            }
            updateSlide();
        }, 5000); 
    }

    function resetAutoSlideChange() {
        clearInterval(autoSlideInterval);
        startAutoSlideChange();
    }

    startAutoSlideChange();
}

function initializeAiBox() {
    const aiBox = document.querySelector('.aiBox');
    const textBox = document.querySelector('.textBox');
    const inputField = document.querySelector('.input');
    const sentBtn = document.querySelector('.sentBtn');

    if (!aiBox || !textBox || !inputField || !sentBtn) {
        console.error('AI assistant elements are missing.');
        return;
    }

    aiBox.addEventListener('click', () => {
        aiBox.classList.replace('aiBox', 'aiBoxActive');
        textBox.style.display = 'flex';
        chatBot();
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('closeAi')) {
            aiBox.classList.replace('aiBoxActive', 'aiBox');
            textBox.style.display = 'none';
        }
    });
}

function chatBot() {
    const textBox = document.querySelector('.textBox');
    const sentBtn = document.querySelector('.sentBtn');
    const inputField = document.querySelector('.input');

    if (!textBox || !sentBtn || !inputField) {
        console.error('Chatbot elements are missing.');
        return;
    }

    // Clone the sentBtn to remove existing event listeners
    const newSentBtn = sentBtn.cloneNode(true);
    sentBtn.parentNode.replaceChild(newSentBtn, sentBtn);

    newSentBtn.addEventListener('click', chat);

    inputField.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            chat();
        }
    });

    function chat() {
        const textInput = inputField.value.trim();
        if (textInput === '') return;

        console.log('Wiadomość wysłana:', textInput);
        
        textBox.innerHTML += `<p><span class="span">Ty: </span>${textInput}</p>`;

        inputField.value = '';

        textBox.scrollTop = textBox.scrollHeight;  

        // Call Gemini API
        getGeminiResponse(textInput)
            .then(botResponse => {
                textBox.innerHTML += `<p><span class="span bot">Bot: </span>${botResponse}</p>`;
                textBox.scrollTop = textBox.scrollHeight;
            })
            .catch(error => {
                console.error('Error:', error);
                textBox.innerHTML += `<p><span class="span bot">Bot: </span>Przepraszam, wystąpił błąd podczas przetwarzania Twojego zapytania.</p>`;
                textBox.scrollTop = textBox.scrollHeight;
            });
    }
}

async function getGeminiResponse(textInput) {
    try {
        const { GoogleGenerativeAI } = require("@google/generative-ai");

        // Replace with your actual Gemini API key
        const genAI = new GoogleGenerativeAI("AIzaSyBNxBW1PpZTWzHmQV9Tl7JObHp4JFXiCqU");
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash"});

        const result = await model.generateContent(textInput);
        const responseText = result.response.text();
        return responseText;
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Przepraszam, wystąpił błąd podczas przetwarzania Twojego zapytania.";
    }
}

