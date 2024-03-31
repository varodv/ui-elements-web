import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

@customElement('ui-date-input')
export class UiDateInput extends LitElement {
  @property({ type: String }) value?: string;

  @property({ type: String }) min?: string;

  @property({ type: String }) max?: string;

  @property({ type: Number }) step?: number;

  @property({ type: Boolean }) readonly = false;

  @property({ type: Boolean }) disabled = false;

  @property({ type: Boolean }) autofocus = false;

  @query('input') input!: HTMLInputElement;

  render() {
    return html`<input
      type="date"
      .value="${live(this.value)}"
      min="${ifDefined(this.min)}"
      max="${ifDefined(this.max)}"
      step="${ifDefined(this.step)}"
      ?readonly="${this.readonly}"
      ?disabled="${this.disabled}"
      ?autofocus="${this.autofocus}"
      @input="${this.handleInput}"
      @change="${this.handleChange}"
    />`;
  }

  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  blur() {
    this.input.blur();
  }

  showPicker() {
    this.input.showPicker();
  }

  stepDown() {
    this.input.stepDown();
  }

  stepUp() {
    this.input.stepUp();
  }

  select() {
    this.input.select();
  }

  private handleInput() {
    this.value = this.input.value;
  }

  private handleChange() {
    this.value = this.input.value;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-date-input': UiDateInput;
  }
}

/**
 *
 * - @property({ type: String }) id?: string;
 * - @property({ type: String }) title?: string;
 * (type)
 * @property({ type: String }) value?: string;
 * @property({ type: String }) min?: string;
 * @property({ type: String }) max?: string;
 * @property({ type: Number }) step?: number;
 * @property({ type: Boolean }) readonly?: boolean;
 * @property({ type: Boolean }) disabled?: boolean;
 * @property({ type: Boolean }) autofocus?: boolean;
 * - @property({ type: String }) autocomplete?: string;
 * - @property({ type: String }) list?: string;
 * -----
 * - @property({ type: String }) form?: string;
 * - @property({ type: String }) name?: string;
 * - @property({ type: Boolean }) required?: boolean;
 * - @property({ type: String }) pattern?: string;
 *
 * +++++
 *
 * @focus
 * @blur
 * @input
 * @change
 * - @invalid
 *
 */
