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
    
            <div class="bestRecipeBox">
                <div class="recipe">
                    <section>
                        <img class="foodImg" src="./assets/camera.png" alt="">
                    </section>
                    <section class="textSection">
                        <div>
                            <h4>Title</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iure sunt at maxime fugit
                                dolorem adipisci sapiente aspernatur necessitatibus quo.</h6>
                        </div>
                        <div class="seeMore goToOneRecipy">Zobacz więcej...</div>
                    </section>
                </div>
    
                <div class="recipe">
                    <section>
                        <img class="foodImg" src="./assets/camera.png" alt="">
                    </section>
                    <section class="textSection">
                        <div>
                            <h4>Title</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iure sunt at maxime fugit
                                dolorem adipisci sapiente aspernatur necessitatibus quo.</h6>
                        </div>
                        <div class="seeMore goToOneRecipy">Zobacz więcej...</div>
                    </section>
                </div>
    
                <div class="recipe">
                    <section>
                        <img class="foodImg" src="./assets/camera.png" alt="">
                    </section>
                    <section class="textSection">
                        <div>
                            <h4>Title</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iure sunt at maxime fugit
                                dolorem adipisci sapiente aspernatur necessitatibus quo.</h6>
                        </div>
                        <div class="seeMore goToOneRecipy">Zobacz więcej...</div>
                    </section>
                </div>
    
                <p class="seeMore goToAllRecipy">Zobacz wszystkie</p>
            </div>
        </div>
    </div>`,
        account: `
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
                <div class="recipe">
                    <section>
                        <img class="foodImg" src="./assets/camera.png" alt="">
                    </section>
                    <section class="textSection">
                        <div>
                            <h4>Title</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iure sunt at maxime fugit
                                dolorem adipisci sapiente aspernatur necessitatibus quo.</h6>
                        </div>
                        <div class="seeMore goToOneRecipy">Zobacz więcej...</div>
                    </section>
                </div>
    
                <div class="recipe">
                    <section>
                        <img class="foodImg" src="./assets/camera.png" alt="">
                    </section>
                    <section class="textSection">
                        <div>
                            <h4>Title</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iure sunt at maxime fugit
                                dolorem adipisci sapiente aspernatur necessitatibus quo.</h6>
                        </div>
                        <div class="seeMore goToOneRecipy">Zobacz więcej...</div>
                    </section>
                </div>
    
                <div class="recipe">
                    <section>
                        <img class="foodImg" src="./assets/camera.png" alt="">
                    </section>
                    <section class="textSection">
                        <div>
                            <h4>Title</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iure sunt at maxime fugit
                                dolorem adipisci sapiente aspernatur necessitatibus quo.</h6>
                        </div>
                        <div class="seeMore goToOneRecipy">Zobacz więcej...</div>
                    </section>
                </div>
    
                <div class="recipe">
                    <section>
                        <img class="foodImg" src="./assets/camera.png" alt="">
                    </section>
                    <section class="textSection">
                        <div>
                            <h4>Title</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iure sunt at maxime fugit
                                dolorem adipisci sapiente aspernatur necessitatibus quo.</h6>
                        </div>
                        <div class="seeMore goToOneRecipy">Zobacz więcej...</div>
                    </section>
                </div>
    
                <div class="recipe">
                    <section>
                        <img class="foodImg" src="./assets/camera.png" alt="">
                    </section>
                    <section class="textSection">
                        <div>
                            <h4>Title</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iure sunt at maxime fugit
                                dolorem adipisci sapiente aspernatur necessitatibus quo.</h6>
                        </div>
                        <div class="seeMore goToOneRecipy">Zobacz więcej...</div>
                    </section>
                </div>
    
                <p class="seeMore seeMoreRecipe">Zobacz więcej <span class="material-symbols-outlined">arrow_downward</span>
                </p>
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
        singleRecipy: `<div class="row">
        <div class="tittleImg"></div>
    </div>
    
    <div class="row">
        <div class="recipyText">
            <h3 class="recipyTittle">Recipy tittle<span class="material-symbols-outlined">favorite</span></h3>
            <p class="ingredients">item, item, item, item, item</p>
            <p class="mainText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, voluptatem consequatur unde quam provident doloremque error, corporis assumenda libero ipsum similique ratione quia commodi rerum. Obcaecati nulla ratione accusamus, aliquam non nostrum in debitis eveniet eligendi? Nam cumque necessitatibus recusandae exercitationem harum, aliquam voluptate similique iusto fugiat aliquid amet voluptatem unde quo vero suscipit ullam officia soluta fugit! Pariatur sed deleniti repudiandae enim autem numquam quam excepturi odio dolor, et, voluptas debitis quos porro voluptatem voluptatum distinctio similique. Voluptates minus labore sit expedita at delectus iure molestias omnis dolor? Reiciendis vero ut sed minus unde, quae placeat inventore, in adipisci rem odit officiis. Obcaecati natus alias impedit error quis numquam necessitatibus earum a, voluptates fuga sapiente rem, nisi ullam nobis. Quibusdam excepturi velit quae suscipit voluptate molestias et neque rerum, magni ea quaerat magnam ex dolorum expedita, deleniti in sit. Eveniet alias pariatur facilis possimus, provident qui, consequuntur nihil asperiores molestiae error dolorem maxime a ut culpa esse incidunt neque optio veritatis voluptatibus, omnis odio accusantium? Alias dolorem odio animi voluptates, asperiores quisquam inventore velit eum, hic maiores dolore. Ratione quae, laboriosam explicabo aperiam alias quidem veniam debitis praesentium officia eligendi? Praesentium quisquam accusantium ut rem voluptatibus sed recusandae excepturi!</p>
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
    </div>
    
    <div class="aiBox">
        <h4>AI asistent<span class="material-symbols-outlined closeAi">close</span></h4>
    
        <div class="textBox"></div>
        
        <div class="rowChatBot">                  
            <input type="text" placeholder="Zapytaj">
        
            <span class="material-symbols-outlined">robot_2</span>
        </div>
    </div>`,
    };

    let currentView = 'home';

    function renderView(view) {
        if (views[view]) {
            content.innerHTML = views[view];
            history.pushState({ view: view }, '', `?view=${view}`);
            currentView = view;
    
            if (view === 'home') {
                initializeSlider();
            }
    
            if (view === 'singleRecipy') {
                initializeAiBox();
            }
        } 
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
        if (e.target.closest('.goToOneRecipy')) {
          renderView('singleRecipy');
          window.scrollTo(0, 0);
        }
    });
    
    document.addEventListener('click', (e) => {
        if (e.target.closest('.goToAccount')) {
          renderView('account');
          window.scrollTo(0, 0);
        }
    });
}

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
    const openBtn = document.querySelector('.aiBox');
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            openBtn.classList.remove('aiBox');
            openBtn.classList.add('aiBoxActive');
        });
  
        document.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains('closeAi')) {
            openBtn.classList.remove('aiBoxActive');
            openBtn.classList.add('aiBox');
            }
        });
    }
}