import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import FooterExample from "../components/FooterExample.vue";

let wrapper;
describe("app.vue", () => {
    beforeEach(() => {
        wrapper = mount(FooterExample);
    });
    it("Should confirm basic functionality", () => {
        expect(1).toBe(1); //Sanity check, this should always pass
    });
    it("Should mount the Footer Example and contain footer content", () => {
        expect(wrapper.vm.content).toBe("Footer Here");
        expect(wrapper.html()).toContain("Footer Here");
    });
});
