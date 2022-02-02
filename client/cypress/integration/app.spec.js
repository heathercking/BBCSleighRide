describe('App', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    
    it("Loads the app", () => {
        const counter = cy.get('section'); // ADDED
    }) 

    it("should display the Countdown to Christmas title image", () => {
        cy.get('div[class="countdown-title"]').find('img[alt="Countdown to Christmas..."]').should('be.visible');
      });

    it("should display the Santa chatbot icon", () => {
        cy.get('nav[class="options"]').find('img[class="santa-header"]').should('be.visible');
      });

    it("should be able to click on the Santa chatbot icon and view Santa welcome", () => {
        cy.get('nav[class="options"]').find('img[class="santa-header"]').click();
        cy.get('div[class="react-chatbot-kit-chat-bot-message"]').find("span").contains('Ho ho Ho Merry Christmas');
      });

    it("should display the Map cracker", () => {
        cy.get('div[class="cracker-map-wrapper"]').find('img[class="cracker-map"]').should('be.visible');
      });

    it("should display the Quiz cracker", () => {
        cy.get('div[class="cracker-quiz-wrapper"]').find('img[class="cracker-quiz"]').should('be.visible');
    });

    it("should display the Joke cracker", () => {
        cy.get('div[class="joke-wrapper"]').find('img[class="cracker-joke"]').should('be.visible');
    });

    it("should be able to click on the Map cracker", () => {
        cy.get('div[class="cracker-map-wrapper"]').find('img[class="cracker-map"]').click();
      });

    it("should be able to click on the Quiz cracker", () => {
        cy.get('div[class="cracker-quiz-wrapper"]').find('img[class="cracker-quiz"]').click();
    });

    it("should be able to click on the Joke cracker", () => {
        cy.get('div[class="joke-wrapper"]').find('img[class="cracker-joke"]').click();
    });

    it("should be able to access the Quiz welcome page from Quiz cracker", () => {
        cy.get('div[class="cracker-quiz-wrapper"]').find('img[class="cracker-quiz"]').click();
        cy.get('div[class="quiz-welcome"]').find("h2").contains('Christmas quiz');
    });

    it("should be able to access the Joke page from the Joke cracker", () => {
        cy.get('div[class="joke-wrapper"]').find('img[class="cracker-joke"]').click();
        cy.get('div[class="joke-card"]').should('be.visible');   
    });

    it("should be able to access the Joke page and see Joke", () => {
        cy.get('div[class="joke-wrapper"]').find('img[class="cracker-joke"]').click();
        cy.get('div[class="joke-title"]').should('be.visible');   
    });

    it("should be able to access the Joke page and see punchline", () => {
        cy.get('div[class="joke-wrapper"]').find('img[class="cracker-joke"]').click();
        cy.get('p[class="punchline"]').should('be.visible');   
    });

    it("should be able to access the Map page and view from Map cracker", () => {
        cy.get('div[class="cracker-map-wrapper"]').find('img[class="cracker-map"]').click();
        cy.get('div[class="map-container"]').should('be.visible');
    });

    it("should be able to access the Map page and see the 'Greetings' cracker", () => {
        cy.get('div[class="cracker-map-wrapper"]').find("img").click();
        cy.get('div[class="map-filters"]').find('input[value="greeting"]').should('be.visible');
    });

    it("should be able to access the Map page and see the 'Dates' cracker", () => {
        cy.get('div[class="cracker-map-wrapper"]').find("img").click();
        cy.get('div[class="map-filters"]').find('input[value="celebrated"]').should('be.visible');
    });

    it("should be able to access the Map page and see the 'Foods' cracker", () => {
        cy.get('div[class="cracker-map-wrapper"]').find("img").click();
        cy.get('div[class="map-filters"]').find('input[value="meal"]').should('be.visible');
    });

    it("should be able to access the Map page and see the 'instructions' bauble" , () => {
        cy.get('div[class="cracker-map-wrapper"]').find("img").click();
        cy.get('div[class="map-filters"]').find('img[class="bauble-instructions"]').should('be.visible');
    });

    it("should be able to access the Map page, click on 'instructions' bauble and see instructions" , () => {
        cy.get('div[class="cracker-map-wrapper"]').find("img").click();
        cy.get('div[class="map-filters"]').find('img[class="bauble-instructions"]').click();
        cy.get('div[class="map-modal-body"]').find('p').contains('Select a Christmas').next('p').contains('Sleigh by each map').next('p').contains('See what you can');
    });

    it("should be able to access the Map page, click on 'instructions' bauble, see instructions and exit back to map" , () => {
        cy.get('div[class="cracker-map-wrapper"]').find("img").click();
        cy.get('div[class="map-filters"]').find('img[class="bauble-instructions"]').click();
        cy.get('div[class="map-modal-footer"]').find('img[class="map-exit-button"]').click();
        cy.get('div[class="map-container"]').should('be.visible');
    });
      
  
  })