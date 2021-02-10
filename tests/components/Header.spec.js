/// <reference types="cypress" />
import { mount } from '@cypress/vue';
import Header from '../../src/components/common/Header.vue';

describe('Header', () => {
   it('renders header component', () => {
       mount(Header);
       cy.get('h1').should('exist').and('contain', 'Pizza Calc');
   });
});