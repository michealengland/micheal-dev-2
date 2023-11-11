import createMarkup from '../createMarkup'

test('createMarkup returns correct markup.', () => {
  const dangerousMarkup = '<p>HTML Content with markup.</p>'
  const renderDangerousMarkup = jest.fn(markup => markup.__html)

  // Mock function by returning Object data.
  renderDangerousMarkup(createMarkup(dangerousMarkup))

  // Expect returned Object data to match original content.
  expect(renderDangerousMarkup).toHaveReturnedWith('<p>HTML Content with markup.</p>')
})
