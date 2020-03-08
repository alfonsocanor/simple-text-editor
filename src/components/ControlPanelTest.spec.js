import { mount } from '@vue/test-utils'
import ControlPanel from './ControlPanel.vue'

describe('ControlPanel.vue', () => {
    const wrapper = mount(ControlPanel)
    it('when edit is click it should return index 0 of actions as true and 1 and 2 as false', () =>{
        wrapper.find('button#edit').trigger('click')
        let editTrue = wrapper.vm.actions;
        expect(editTrue[0]).toBe(true)
    })

    it('when edit is click it should return index 1 of actions as true and 0 and 2 as false', () =>{
        wrapper.find('button#save').trigger('click')
        let saveTrue = wrapper.vm.actions;
        expect(saveTrue[1]).toBe(true)
    })

    it('when edit is click it should return index 2 of actions as true and 0 and 1 as false', () =>{
        wrapper.find('button#cancel').trigger('click')
        let cancelTrue = wrapper.vm.actions;
        expect(cancelTrue[2]).toBe(true)
    })
}) 