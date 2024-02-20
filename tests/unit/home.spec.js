import { createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vue from "vue";
import { render, screen } from '@testing-library/vue';
import HelloWorld from '@/components/HelloWorld.vue';

const localVue = createLocalVue();
Vue.use(Vuetify);

test('read text Hello World component', () => {
  render(HelloWorld, { localVue });
  screen.getByText('Welcome to the Tech Interview');
  screen.getByText('Youre doing great so far. Keep it up.');
  screen.getByText('Something seems to be wrong. There should be a nav up there ^^^');
  screen.getByText('Solved: Add a nav to the view /data.');

});