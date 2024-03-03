import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ui-date-input')
export class UiDateInput extends LitElement {
  @property()
  value = '';

  render() {
    return html`<input type="date" value="${this.value}" />`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-date-input': UiDateInput;
  }
}
