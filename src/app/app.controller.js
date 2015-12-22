import { assign } from 'lodash';

export default class AppController {
    /*@ngInject*/
    constructor($state) {
        assign(this, { $state });
        this.text = 'Welcome to the Ionic Seed'
    }

    onAboutTap() {
        this.$state.go('about');
    }
}