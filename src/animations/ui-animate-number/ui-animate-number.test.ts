import './';

describe('UiAnimateNumber', () => {
  test('should render the content specified on its slot', () => {
    const content = '1,000,000.00';
    document.body.innerHTML = `<ui-animate-number>${content}</ui-animate-number>`;

    expect(document.body.innerHTML).toContain(content);
  });
});
