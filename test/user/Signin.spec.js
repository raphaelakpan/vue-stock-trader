import { shallow } from '@vue/test-utils'
import Signin from '../../src/components/user/Signin.vue'

describe('Signin.vue', () => {
  it('has \'Log in\' header', () => {
    const wrapper = shallow(Signin);
    const header = wrapper.find('h2').text();

    expect(header).toBe('Log In')
  })
})
