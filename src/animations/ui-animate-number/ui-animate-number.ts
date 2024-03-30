import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('ui-animate-number')
export class UiAnimateNumber extends LitElement {
  // TODO Implement element
  render() {
    return html`<slot></slot>`;
  }
}
