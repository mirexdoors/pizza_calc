import Header from "./src/components/common/Header";
import { mount } from '@cypress/vue';

describe("Header mount test", () => {
    it("Shoud render form", () =>{
     mount(Header);
     cy.get("h1").should('exist');
    });
});