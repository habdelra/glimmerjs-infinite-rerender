import Component, { tracked } from "@glimmer/component";

export default class TestGlimmer extends Component {
  @tracked
  foo: boolean = false;

  constructor(options: object) {
    super(options);

    setTimeout(() => {
      this.foo = true;
    }, 2000);
  }
}
