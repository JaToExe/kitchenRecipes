changeContent();

function changeContent() {
    const content = document.querySelector('.content');

    const views = {
        home: `
    <div class="row">
        <div class="silderBox">
            <div class="slide"></div>
    
            <div class="controlPanel">
                <span class="material-symbols-outlined prev">arrow_back_ios</span>
    
                <span class="material-symbols-outlined next">arrow_forward_ios</span>
            </div>
        </div>
    </div>
    
    <div class="row">
        <div class="searchBox">
            <div class="searchDiv">
                <input id="searchBar" type="text">
                <label for="searchBar">Wpisz nazwę potrawy</label>
            </div>
    
            <div class="searchBtn goToSaerchRecipy">SZUKAJ</div>
        </div>
    </div>
    
    <div class="row">
        <div class="elem goToAccount">
            <span class="material-symbols-outlined">person</span>
            <p>Zobacz informacje o koncie</p>
        </div>
        <div class="elem goToAllRecipy">
            <p>Przeglądaj przepisy</p>
            <span class="material-symbols-outlined">menu_book</span>
        </div>
        <div class="elem goToAddRecipy">
            <span class="material-symbols-outlined">post_add</span>
            <p>Dodaj własny przepis</p>
        </div>
    </div>
    
    <div class="row">
        <div class="recipeBox">
            <h2>Najlepsze Przepisy</h2>
    
            <div class="separatorBox"></div>

            </div>
        </div>
    </div>`,
    recipy: `<div class="row">
        <div class="searchBox searchBoxMargin">
            <div class="searchDiv">
                <input id="searchBar" type="text">
                <label for="searchBar">Wpisz nazwę potrawy</label>
            </div>
    
            <div class="searchBtn goToSaerchRecipy">SZUKAJ</div>
        </div>
    </div>
    
    <div class="row">
        <div class="recipeBox recipeBoxAll">
            <h2>Nasze i Wasze przepisy</h2>
    
            <div class="separatorBox"></div>
    
            <div class="bestRecipeBox">

            </div>
        </div>
    </div>
    
    <div class="row">
        <div class="elem back">
            <p>Powrót</p>
            <span class="material-symbols-outlined">home</span>
        </div>
        <div class="elem goToAccount">
            <span class="material-symbols-outlined">person</span>
            <p>Zobacz informacje o koncie</p>
        </div>
        <div class="elem goToAddRecipy">
            <span class="material-symbols-outlined">post_add</span>
            <p>Dodaj własny przepis</p>
        </div>
    </div>`,
    singleRecipy: `
    <div class="row imgRow"></div>
        <div class="row singleRecipy"></div>
    <div class="row">
        <div class="elem back">
            <p>Powrót</p>
            <span class="material-symbols-outlined">home</span>
        </div>
        <div class="elem goToAllRecipy">
            <p>Przeglądaj przepisy</p>
            <span class="material-symbols-outlined">menu_book</span>
        </div>
        <div class="elem goToAddRecipy">
            <span class="material-symbols-outlined">post_add</span>
            <p>Dodaj własny przepis</p>
        </div>
    </div>
    
    <div class="aiBox">
        <h4>AI asistent<span class="material-symbols-outlined closeAi">close</span></h4>
    
        <div class="textBox"></div>
        
        <div class="rowChatBot">                  
            <input class="input" type="text" placeholder="Zapytaj">
        
            <span class="material-symbols-outlined sentBtn">robot_2</span>
        </div>
    </div>`,
    accountNoLogin: `
    <div class="row">
    <div class="infoBox">
        <h3 class="InfoUserTittle"><span class="harf">Zaloguj się</span> aby dostać dostęp do tej strony</h3>
    </div>
</div>

<div class="row">
    <div class="elem back">
        <p>Powrót</p>
        <span class="material-symbols-outlined">home</span>
    </div>
    <div class="elem goToAllRecipy">
        <p>Przeglądaj przepisy</p>
        <span class="material-symbols-outlined">menu_book</span>
    </div>
    <div class="elem goToAddRecipy">
        <span class="material-symbols-outlined">post_add</span>
        <p>Dodaj własny przepis</p>
    </div>
</div>`,
    accountLogin: `
    <div class="row">
    <div class="infoBox">
        <h3 class="InfoUserTittle">Nazwa użytkownika:</h3>
        <p class="InfoUserSubtitle">User name</p>
        <h3 class="InfoUserTittle">Email:</h3>
        <p class="InfoUserSubtitle">email@example.com</p>
        <h3 class="InfoUserTittle">Password:</h3>
        <p class="InfoUserSubtitle">pasword</p>
    </div>
</div>

<div class="row">
    <div class="elem back">
        <p>Powrót</p>
        <span class="material-symbols-outlined">home</span>
    </div>
    <div class="elem goToAllRecipy">
        <p>Przeglądaj przepisy</p>
        <span class="material-symbols-outlined">menu_book</span>
    </div>
    <div class="elem goToAddRecipy">
        <span class="material-symbols-outlined">post_add</span>
        <p>Dodaj własny przepis</p>
    </div>
</div>`,
loginPage: `
<div class="row">
    <div class="loginBox">
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Wpisz email">

        <label for="password">Hasło:</label>
        <input type="password" id="password" placeholder="Wpisz hasło">

        <div class="loginBtn">Zaloguj się</div>

        <p class="registerPrompt">Nie masz konta? <span class="registerLink">Zarejestruj się</span></p>
    </div>
</div>

<div class="row">
    <div class="elem back">
        <p>Powrót</p>
        <span class="material-symbols-outlined">home</span>
    </div>
    <div class="elem goToAllRecipy">
        <p>Przeglądaj przepisy</p>
        <span class="material-symbols-outlined">menu_book</span>
    </div>
    <div class="elem goToAddRecipy">
        <span class="material-symbols-outlined">post_add</span>
        <p>Dodaj własny przepis</p>
    </div>
</div>`,
registerPage: `            <div class="row">
                <div class="registerBox">
                    <label for="username">Nazwa użytkownika:</label>
                    <input type="text" id="username" placeholder="Wpisz nazwę użytkownika">

                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Wpisz email">

                    <label for="password">Hasło:</label>
                    <input type="password" id="password" placeholder="Wpisz hasło">

                    <label for="confirmPassword">Potwierdź hasło:</label>
                    <input type="password" id="confirmPassword" placeholder="Potwierdź hasło">

                    <div class="registerBtn">Zarejestruj się</div>

                    <p class="loginPrompt">Masz już konto? <span class="loginLink">Zaloguj się</span></p>
                </div>
            </div>
            
            <div class="row">
    <div class="elem back">
        <p>Powrót</p>
        <span class="material-symbols-outlined">home</span>
    </div>
    <div class="elem goToAllRecipy">
        <p>Przeglądaj przepisy</p>
        <span class="material-symbols-outlined">menu_book</span>
    </div>
    <div class="elem goToAddRecipy">
        <span class="material-symbols-outlined">post_add</span>
        <p>Dodaj własny przepis</p>
    </div>
</div>`
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
                    recipeBoxAll.innerHTML += `
                    <div class="bestRecipeBox">
                        <div class="recipe">
                            <section>
                                <img class="foodImg" src="${row.image}" alt="${row.title}" style="object-fit: cover; object-position: center;">
                            </section>
                            <section class="textSection">
                                <div>
                                    <h4>${row.title}</h4>
                                    <h6>${row.description}</h6>
                                </div>
                                <div class="seeMore goToOneRecipy" data-id="${row.id}">Zobacz więcej...</div>
                            </section>
                        </div>
                    </div>`;
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
                imgRow.innerHTML = `
                        <img class="tittleImg" src="${data.image}" alt="${data.title}" style="object-fit: cover; object-position: center;">
                    `;
                singleRecipy.innerHTML = `                        <div class="recipyText">
                            <h3 class="recipyTittle">${data.title}<span class="material-symbols-outlined">favorite</span></h3>
                            <p class="ingredients">${data.ingredients}</p>
                            <p class="mainText">${data.description}</p>
                        </div>`;
            })
            .catch(error => {
                console.error('Błąd:', error);
                const singleRecipy = document.querySelector('.singleRecipy');
                singleRecipy.innerHTML = `<p class="error">Nie udało się załadować przepisu. Spróbuj ponownie później.</p>`;
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
            const recipeId = recipeElement.dataset.id; // Ensure the element has a `data-id` attribute
            renderView('singleRecipy', recipeId);
            window.scrollTo(0, 0);
        }
    });
    
    document.addEventListener('click', (e) => {
        if (e.target.closest('.goToAccount')) {

            renderView('accountNoLogin');

            const harf = document.querySelector('.harf');

            harf.addEventListener('click', () => {
                renderView('accountLogin');
            });
        //   if (!cookie) {
        //     renderView('accountNoLogin');
        //   } else {
        //     renderView('account');
        //   }

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
        if (e.target.closest('.goToAccount')) {
            // Always navigate to the accountNoLogin view first
            renderView('accountNoLogin');

            // Add event listener for the "Zaloguj się" link in the accountNoLogin view
            const harf = document.querySelector('.harf');
            if (harf) {
                harf.addEventListener('click', () => {
                    renderView('loginPage'); // Navigate to the login view
                    window.scrollTo(0, 0);
                });
            }

            window.scrollTo(0, 0);
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target.closest('.registerLink')) {
            renderView('registerPage'); // Navigate to the registration view
            window.scrollTo(0, 0);
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target.closest('.loginLink')) {
            renderView('loginPage'); // Navigate back to the login view
            window.scrollTo(0, 0);
        }
    });
}

function checkLoginStatus() {
    fetch('http://localhost:8080/check-login', { credentials: 'include' })
        .then(response => response.json())
        .then(data => {
            if (data.loggedIn) {
                renderView('accountLogin'); // Navigate to accountLogin if logged in
            } else {
                renderView('accountNoLogin'); // Navigate to accountNoLogin if not logged in
            }
        })
        .catch(error => console.error('Błąd:', error));
}

// Add event listener for the account view
document.addEventListener('click', (e) => {
    if (e.target.closest('.goToAccount')) {
        checkLoginStatus(); // Check login status when navigating to the account view
        window.scrollTo(0, 0);
    }
});

// Handle login form submission
document.addEventListener('click', (e) => {
    if (e.target.closest('.loginBtn')) {
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();

        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email, password })
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    alert(data.message);
                    renderView('accountLogin'); // Navigate to accountLogin on successful login
                } else {
                    alert(data.error);
                }
            })
            .catch(error => console.error('Błąd:', error));
    }
});

// Handle logout
document.addEventListener('click', (e) => {
    if (e.target.closest('.logoutBtn')) {
        fetch('http://localhost:8080/logout', {
            method: 'POST',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                renderView('accountNoLogin'); // Navigate to accountNoLogin on logout
            })
            .catch(error => console.error('Błąd:', error));
    }
});

// Handle registration form submission
document.addEventListener('click', (e) => {
    if (e.target.closest('.registerBtn')) {
        const username = document.querySelector('#username').value.trim();
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();
        const confirmPassword = document.querySelector('#confirmPassword').value.trim();

        if (!username || !email || !password || !confirmPassword) {
            alert('Wszystkie pola są wymagane!');
            return;
        }

        if (password !== confirmPassword) {
            alert('Hasła nie są zgodne!');
            return;
        }

        fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    alert(data.message); // Show success message
                    renderView('loginPage'); // Navigate to login page after successful registration
                } else {
                    alert(data.error); // Show error message
                }
            })
            .catch(error => console.error('Błąd:', error));
    }
});

function initializeSlider() {
    const previousButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slideElement = document.querySelector('.slide');

    let currentImageNumber = 1;
    const totalImages = 3;

    const imagePaths = [
        "../assets/slider/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
        "../assets/slider/brooke-lark-oaz0raysASk-unsplash.jpg",
        "../assets/slider/davide-cantelli-jpkfc5_d-DI-unsplash.jpg"
    ];

    const preloadImages = () => {
        imagePaths.forEach((path) => {
            const image = new Image();
            image.src = path;
        });
    };

    slideElement.className = `slide slide${currentImageNumber}`;

    window.onload = function () {
        preloadImages();
        startAutoSlideChange();
    };

    nextButton.addEventListener('click', () => {
        if (currentImageNumber < totalImages) {
            currentImageNumber++;
        } else {
            currentImageNumber = 1;
        }
        updateSlide();
        resetAutoSlideChange();
    });

    previousButton.addEventListener('click', () => {
        if (currentImageNumber > 1) {
            currentImageNumber--;
        } else {
            currentImageNumber = totalImages;
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
}

function initializeAiBox() {
    const aiBox = document.querySelector('.aiBox');
    const textBox = document.querySelector('.textBox');
    
    if (aiBox) {
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
}

function chatBot() {
    const textBox = document.querySelector('.textBox');
    const sentBtn = document.querySelector('.sentBtn');
    const inputField = document.querySelector('.input');

    sentBtn.replaceWith(sentBtn.cloneNode(true));
    const newSentBtn = document.querySelector('.sentBtn');

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

        fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer YOUR_OPENAI_API_KEY` // Replace with your valid OpenAI API key
            },
            body: JSON.stringify({
                model: 'text-davinci-003',
                prompt: textInput,
                max_tokens: 150
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const botResponse = data.choices[0]?.text?.trim() || "Przepraszam, nie mogę odpowiedzieć na to pytanie.";
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