import {render, screen} from '@testing-library/vue'
import About from '@/views/About.vue'

test('read text about component', async () => {
  render(About);
  screen.getByText('This is an about page');
})