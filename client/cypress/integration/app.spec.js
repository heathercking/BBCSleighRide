describe('App', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    
    it("Loads the app", () => {
        const counter = cy.get('section'); // ADDED
    }) 

    it("should display the Countdown to Christmas title image", () => {
        cy.get('div[class="countdown"]').find("img").should('be.visible');
      });

    it("should display the Map cracker", () => {
        cy.get('div[class="cracker-map-div"]').find("img").should('be.visible');
      });

    it("should display the Quiz cracker", () => {
        cy.get('div[class="cracker-quiz-div"]').find("img").should('be.visible');
    });

    it("should display the Joke cracker", () => {
        cy.get('div[class="fun-grid"]').find("img").should('be.visible');
    });

    it("should be able to click on the Map cracker", () => {
        cy.get('div[class="cracker-map-div"]').find("img").click();
      });

    it("should be able to click on the Quiz cracker", () => {
        cy.get('div[class="cracker-quiz-div"]').find("img").click();
    });

    it("should be able to click on the Joke cracker", () => {
        cy.get('div[class="fun-grid"]').find("img").click();
    });

    it("should be able to access the Quiz welcome page from Quiz cracker", () => {
        cy.get('div[class="cracker-quiz-div"]').find("img").click();
        cy.get('div[class="quiz-welcome"]').find("h2").contains('Christmas quiz');
    });

    it("should be able to access the Joke page from the Joke cracker", () => {
        cy.get('div[class="fun-grid"]').find("img").click();
        cy.get('div[class="joke-card"]').should('be.visible');   
    });

    it("should be able to access the Joke page and see Joke", () => {
        cy.get('div[class="fun-grid"]').find("img").click();
        cy.get('div[class="joke-title"]').should('be.visible');   
    });

    it("should be able to access the Joke page and see punchline", () => {
        cy.get('div[class="fun-grid"]').find("img").click();
        cy.get('p[class="punchline"]').should('be.visible');   
    });

    it("should be able to access the Map page and view from Map cracker", () => {
        cy.get('div[class="cracker-map-div"]').find("img").click();
        cy.get('div[class="map-container"]').should('be.visible');
    });

    it("should be able to access the Map page and see the 'Merry Christmas in different languages' button", () => {
        cy.get('div[class="cracker-map-div"]').find("img").click();
        cy.get('div[class="map-filters"]').find('button[value="greeting"]').contains('in different languages');
    });

    it("should be able to access the Map page and see the 'What day is Christmas celebrated' button", () => {
        cy.get('div[class="cracker-map-div"]').find("img").click();
        cy.get('div[class="map-filters"]').find('button[value="celebrated"]').contains('is Christmas celebrated');
    });

    it("should be able to access the Map page and see the 'traditional Christmas dinner' button", () => {
        cy.get('div[class="cracker-map-div"]').find("img").click();
        cy.get('div[class="map-filters"]').find('button[value="meal"]').contains('traditional Christmas dinner');
    });
      
  
  })