import { LitElement } from 'lit';
import './';

async function setupTest({
  content,
}: {
  content: string;
}): Promise<{ element: LitElement }> {
  const element = document.createElement('ui-animate-number') as LitElement;
  element.innerHTML = content;
  document.body.appendChild(element);
  await element.updateComplete;

  return {
    element,
  };
}

describe('UiAnimateNumber', () => {
  test('should render the content passed as slot', async () => {
    const content = '1,000,000.00';
    await setupTest({ content });

    expect(document.body.innerHTML).toContain(content);
  });
});
